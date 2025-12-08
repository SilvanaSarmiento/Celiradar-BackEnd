import { Repository } from 'typeorm';
import { Receta } from './receta.entity';
export declare class RecetasService {
    private recetaRepo;
    constructor(recetaRepo: Repository<Receta>);
    findAll(): Promise<Receta[]>;
    findOne(id: number): Promise<Receta>;
    create(data: Partial<Receta>): Promise<Receta>;
    update(id: number, data: Partial<Receta>): Promise<Receta>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
