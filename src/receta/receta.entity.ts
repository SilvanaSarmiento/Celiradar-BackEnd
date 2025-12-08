import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';


@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id_receta: number;

 
  @Column({ type: 'varchar', length: 255, nullable: true })
  titulo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  categoria: string;


  @Column({ type: 'longtext', nullable: true })
  ingredientes: string;

  @Column({ type: 'longtext', nullable: true })
  pasos: string;

   @ManyToOne(() => Usuario, (usuario) => usuario.recetas, { onDelete: 'CASCADE' })
  usuario: Usuario;

  
}

