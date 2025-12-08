import { Consejo } from '../consejo/consejo.entity';
import { Receta } from '../receta/receta.entity';
import { Comentario } from '../comentarios/comentario.entity';
export declare class Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    es_suscriptor: number;
    fecha_registro: Date;
    consejos: Consejo[];
    recetas: Receta[];
    comentarios: Comentario[];
}
