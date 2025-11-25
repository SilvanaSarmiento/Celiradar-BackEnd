import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<import("./usuario.entity").Usuario[]>;
    findOne(id: string): Promise<import("./usuario.entity").Usuario | null>;
    create(data: any): Promise<import("./usuario.entity").Usuario>;
    update(id: string, data: any): Promise<import("./usuario.entity").Usuario>;
    delete(id: string): Promise<import("./usuario.entity").Usuario>;
}
