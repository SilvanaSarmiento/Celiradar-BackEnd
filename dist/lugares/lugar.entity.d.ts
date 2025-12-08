import { Imagen } from '../imagenes/imagen.entity';
import { Categoria } from '../categorias/categoria.entity';
import { Comentario } from '../comentarios/comentario.entity';
import { Favorito } from '../favoritos/favorito.entity';
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
    categoria: Categoria[];
    comentarios: Comentario[];
    favoritos: Favorito[];
}
