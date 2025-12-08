import { ConsejosService } from './consejos.service';
import { Consejo } from './consejo.entity';
export declare class ConsejosController {
    private consejosService;
    constructor(consejosService: ConsejosService);
    findAll(): Promise<Consejo[]>;
    create(data: {
        titulo: string;
        texto: string;
    }): Promise<Consejo>;
}
