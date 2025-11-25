import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: any) {
    return this.categoriasService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.categoriasService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoriasService.delete(Number(id));
  }
}
