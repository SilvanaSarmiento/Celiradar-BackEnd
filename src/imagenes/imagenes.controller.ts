import { Controller, Get, Param } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';

@Controller('lugares')
export class ImagenesController {
  constructor(private imagenesService: ImagenesService) {}

  @Get(':id/imagenes')
  getByLugar(@Param('id') id: string) {
    return this.imagenesService.findByLugar(Number(id));
  }
}
