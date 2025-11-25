import { Repository } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';
export declare class CategoriasService {
    private categoriaRepo;
    constructor(categoriaRepo: Repository<Categoria>);
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria | null>;
    create(data: Partial<Categoria>): Promise<Categoria>;
    update(id: number, data: Partial<Categoria>): Promise<Categoria>;
    delete(id: number): Promise<Categoria>;
}
