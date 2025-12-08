import { LugaresService } from './lugares.service';
export declare class LugaresController {
    private lugaresService;
    constructor(lugaresService: LugaresService);
    getAll(): Promise<import("./lugar.entity").Lugar[]>;
    getOne(id: number): Promise<import("./lugar.entity").Lugar>;
    create(body: any): Promise<import("./lugar.entity").Lugar[]>;
    update(id: number, body: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
