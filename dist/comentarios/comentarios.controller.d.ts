import { ComentariosService } from './comentarios.service';
export declare class ComentariosController {
    private readonly comentariosService;
    constructor(comentariosService: ComentariosService);
    findAll(): Promise<import("./comentario.entity").Comentario[]>;
    findByLugar(id: string): Promise<import("./comentario.entity").Comentario[]>;
    findOne(id: string): Promise<import("./comentario.entity").Comentario | null>;
    create(data: any): Promise<import("./comentario.entity").Comentario[]>;
    update(id: string, data: any): Promise<import("./comentario.entity").Comentario>;
    delete(id: string): Promise<import("./comentario.entity").Comentario>;
}
