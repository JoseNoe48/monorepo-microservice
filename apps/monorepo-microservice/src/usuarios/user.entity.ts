import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'usuarios'})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;
}
