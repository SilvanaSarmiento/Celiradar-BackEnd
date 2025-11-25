import { FavoritosService } from './favoritos.service';
export declare class FavoritosController {
    private readonly favoritosService;
    constructor(favoritosService: FavoritosService);
    findAll(): Promise<import("./favorito.entity").Favorito[]>;
    findByUsuario(id: string): Promise<import("./favorito.entity").Favorito[]>;
    create(data: any): Promise<import("./favorito.entity").Favorito[]>;
    delete(id: string): Promise<import("./favorito.entity").Favorito>;
}
