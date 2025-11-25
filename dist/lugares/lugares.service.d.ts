import { Repository } from 'typeorm';
import { Lugar } from './lugar.entity';
export declare class LugaresService {
    private lugarRepo;
    constructor(lugarRepo: Repository<Lugar>);
    findAll(options?: any): Promise<Lugar[]>;
    findOne(id: number, options?: any): Promise<Lugar | null>;
    create(data: any): Promise<Lugar[]>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
