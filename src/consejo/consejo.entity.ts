import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';


@Entity()
export class Consejo {
  @PrimaryGeneratedColumn()
  id_consejo: number;

  @Column()
  titulo:string;

  @Column('text')
  texto: string;

  // Relaciones
  @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.consejos, { onDelete: 'CASCADE' })
  usuario: Usuario[];
}