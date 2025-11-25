import { ImagenesService } from './imagenes.service';
export declare class ImagenesController {
    private imagenesService;
    constructor(imagenesService: ImagenesService);
    getByLugar(id: string): Promise<import("./imagen.entity").Imagen[]>;
}
