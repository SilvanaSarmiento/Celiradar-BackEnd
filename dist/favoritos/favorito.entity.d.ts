import { Usuario } from '../usuarios/usuario.entity';
import { Lugar } from '../lugares/lugar.entity';
export declare class Favorito {
    id: number;
    usuario: Usuario;
    lugar: Lugar;
    fecha_guardado: Date;
}
