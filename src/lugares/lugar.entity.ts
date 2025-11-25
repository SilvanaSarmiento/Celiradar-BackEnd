import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Imagen } from '../imagenes/imagen.entity';

@Entity('lugares')
export class Lugar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column()
  tipo: string;

  @Column({ length: 255 })
  direccion: string;

  @Column('decimal', { precision: 10, scale: 7 })
  lat: number;

  @Column('decimal', { precision: 10, scale: 7 })
  lng: number;

  @Column({ nullable: true })
  imagen: string;

  @Column({ nullable: true })
  categoria_id: number;

  @OneToMany(() => Imagen, imagen => imagen.lugar)
  imagenes: Imagen[];
}
