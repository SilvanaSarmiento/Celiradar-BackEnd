import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';

@Controller('favoritos')
export class FavoritosController {
  constructor(private readonly favoritosService: FavoritosService) {}

  @Get()
  findAll() {
    return this.favoritosService.findAll();
  }

  @Get('usuario/:id')
  findByUsuario(@Param('id') id: string) {
    return this.favoritosService.findByUsuario(Number(id));
  }

  @Post()
  create(@Body() data: any) {
    return this.favoritosService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.favoritosService.delete(Number(id));
  }
}
