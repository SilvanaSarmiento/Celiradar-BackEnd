import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Lugar } from '../lugares/lugar.entity';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @OneToMany(() => Lugar, lugar => lugar.categoria)
  lugares: Lugar[];
}
