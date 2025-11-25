import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Lugar } from '../lugares/lugar.entity';

@Entity('imagenes_lugares')
export class Imagen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  imagen: string;

  @ManyToOne(() => Lugar, lugar => lugar.imagenes, { onDelete: 'CASCADE' })
  lugar: Lugar;
}
