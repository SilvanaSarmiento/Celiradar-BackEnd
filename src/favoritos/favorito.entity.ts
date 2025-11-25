import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Lugar } from '../lugares/lugar.entity';

@Entity('favoritos')
export class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.id, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @ManyToOne(() => Lugar, lugar => lugar.favoritos, { onDelete: 'CASCADE' })
  lugar: Lugar;

  @Column()
  fecha_guardado: Date;
}
