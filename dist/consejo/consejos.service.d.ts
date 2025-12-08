import { Repository } from 'typeorm';
import { Consejo } from './consejo.entity';
export declare class ConsejosService {
    private repo;
    constructor(repo: Repository<Consejo>);
    findAll(): Promise<Consejo[]>;
    create(data: {
        titulo: string;
        texto: string;
    }): Promise<Consejo>;
}
