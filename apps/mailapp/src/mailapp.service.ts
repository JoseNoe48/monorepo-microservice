import { Injectable } from '@nestjs/common';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Soy El Micro Servicio Usando el Puerto 3001';
  }
}
