import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Lugar } from '../lugares/lugar.entity';

@Entity('comentarios')
export class Comentario {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.id, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @ManyToOne(() => Lugar, lugar => lugar.comentarios, { onDelete: 'CASCADE' })
  lugar: Lugar;

  @Column({ type: 'text' })
  texto: string;

  @Column()
  fecha: Date;
}
