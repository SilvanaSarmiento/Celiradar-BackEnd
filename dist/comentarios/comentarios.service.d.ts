import { Repository } from 'typeorm';
import { Comentario } from './comentario.entity';
export declare class ComentariosService {
    private comentariosRepo;
    constructor(comentariosRepo: Repository<Comentario>);
    findAll(): Promise<Comentario[]>;
    findByLugar(lugarId: number): Promise<Comentario[]>;
    findOne(id: number): Promise<Comentario | null>;
    create(data: any): Promise<Comentario[]>;
    update(id: number, data: any): Promise<Comentario>;
    delete(id: number): Promise<Comentario>;
}
