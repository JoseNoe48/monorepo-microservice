import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario) private readonly UserRepository: Repository<Usuario>,
        @Inject('USER_SERVICE') private readonly clientMail?: ClientProxy,) { }

    async createUser(User: UsuarioDto) {
        const userFound = await this.UserRepository.findOne({ where: { nombre: User.nombre } });

        if (userFound) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }

        const newUser = this.UserRepository.create(User);
        const savedUser = await this.UserRepository.save(newUser);

        // Esto es para poder Emitir el evento 'user_created'
        this.clientMail.emit('user_created', savedUser);

        return savedUser;
    }
}
