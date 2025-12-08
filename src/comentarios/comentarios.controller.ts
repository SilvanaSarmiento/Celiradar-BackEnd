import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Get()
  findAll() {
    return this.comentariosService.findAll();
  }

  @Get('lugar/:id')
  findByLugar(@Param('id') id: string) {
    return this.comentariosService.findByLugar(Number(id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentariosService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: any) {
    return this.comentariosService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.comentariosService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.comentariosService.delete(Number(id));
  }
}
