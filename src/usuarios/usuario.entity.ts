import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Consejo } from '../consejo/consejo.entity';
import { Receta } from '../receta/receta.entity';
import { Comentario } from '../comentarios/comentario.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'tinyint', default: 0 })
  es_suscriptor: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

   @OneToMany(() => Consejo, consejo => consejo.usuario)
  consejos: Consejo[];

  @OneToMany(() => Receta, receta => receta.usuario)
  recetas: Receta[];

  @OneToMany(() => Comentario, comentario => comentario.usuario)
  comentarios: Comentario[];
}

