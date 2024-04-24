import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usersService: UsuariosService) { }
    
    @Post()
    createUser(@Body() newUser: UsuarioDto) {
    return this.usersService.createUser(newUser);

}
}


