import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/user.entity';

@Module({
  imports: [
    ClientsModule.register([{ 
        name: 'USER_SERVICE', 
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
        
    },
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '82025840',
      database: 'coca',
      entities: [Usuario],
      synchronize: true,
    }),
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

