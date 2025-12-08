import { RecetasService } from './recetas.service';
import { Receta } from './receta.entity';
import { CreateRecetaDto } from '../receta/dto/create-receta-dto';
import { UpdateRecetaDto } from './dto/update-receta-dto';
export declare class RecetasController {
    private recetasService;
    constructor(recetasService: RecetasService);
    findAll(): Promise<Receta[]>;
    findOne(id: number): Promise<Receta>;
    create(createDto: CreateRecetaDto): Promise<Receta>;
    update(id: number, updateDto: UpdateRecetaDto): Promise<Receta>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
