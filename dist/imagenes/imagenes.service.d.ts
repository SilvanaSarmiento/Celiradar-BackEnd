import { Repository } from 'typeorm';
import { Imagen } from './imagen.entity';
export declare class ImagenesService {
    private imagenRepo;
    constructor(imagenRepo: Repository<Imagen>);
    findByLugar(lugarId: number): Promise<Imagen[]>;
}
