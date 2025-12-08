import { CategoriasService } from './categorias.service';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    findAll(): Promise<import("./categoria.entity").Categoria[]>;
    findOne(id: string): Promise<import("./categoria.entity").Categoria | null>;
    create(data: any): Promise<import("./categoria.entity").Categoria>;
    update(id: string, data: any): Promise<import("./categoria.entity").Categoria>;
    delete(id: string): Promise<import("./categoria.entity").Categoria>;
}
