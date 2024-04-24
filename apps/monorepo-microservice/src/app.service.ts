import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private clientMail: ClientProxy) {}
  getHello(): string {

    return 'Soy El Proyecto Principal y Uso el Puerto 3000';
  }

  newUser(user:any){

    this.clientMail.emit('new_user', user);
    return 'send_queue';

  }
}
