import { Usuario } from '../usuarios/usuario.entity';
import { Lugar } from '../lugares/lugar.entity';
export declare class Comentario {
    id: number;
    usuario: Usuario;
    lugar: Lugar;
    texto: string;
    fecha: Date;
}
