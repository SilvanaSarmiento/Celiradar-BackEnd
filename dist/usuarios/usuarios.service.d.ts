import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare class UsuariosService {
    private usuariosRepo;
    constructor(usuariosRepo: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario | null>;
    create(data: Partial<Usuario>): Promise<Usuario>;
    update(id: number, data: Partial<Usuario>): Promise<Usuario>;
    delete(id: number): Promise<Usuario>;
}
