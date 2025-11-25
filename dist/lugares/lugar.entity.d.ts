import { Imagen } from '../imagenes/imagen.entity';
export declare class Lugar {
    id: number;
    nombre: string;
    tipo: string;
    direccion: string;
    lat: number;
    lng: number;
    imagen: string;
    categoria_id: number;
    imagenes: Imagen[];
}
