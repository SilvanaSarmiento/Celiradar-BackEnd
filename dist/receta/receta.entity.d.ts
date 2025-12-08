import { Usuario } from '../usuarios/usuario.entity';
export declare class Receta {
    id_receta: number;
    titulo: string;
    categoria: string;
    ingredientes: string;
    pasos: string;
    usuario: Usuario;
}
