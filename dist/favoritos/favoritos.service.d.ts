import { Repository } from 'typeorm';
import { Favorito } from './favorito.entity';
export declare class FavoritosService {
    private favoritosRepo;
    constructor(favoritosRepo: Repository<Favorito>);
    findAll(): Promise<Favorito[]>;
    findByUsuario(usuarioId: number): Promise<Favorito[]>;
    create(data: any): Promise<Favorito[]>;
    delete(id: number): Promise<Favorito>;
}
