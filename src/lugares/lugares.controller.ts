import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { LugaresService } from './lugares.service';

@Controller('lugares')
export class LugaresController {
  constructor(private lugaresService: LugaresService) {}

  // ================================
  // GET /lugares  → lista todos
  // ================================
  @Get()
  async getAll() {
    return this.lugaresService.findAll({
      relations: ['imagenes']  // trae las imágenes asociadas
    });
  }

  // ================================
  // GET /lugares/:id → trae un lugar
  // ================================
  @Get(':id')
  async getOne(@Param('id') id: number) {
    const lugar = await this.lugaresService.findOne(id, {
      relations: ['imagenes']
    });

    if (!lugar) {
      throw new NotFoundException(`El lugar con ID ${id} no existe`);
    }

    return lugar;
  }

  // ================================
  // POST /lugares  → crear un lugar
  // ================================
  @Post()
  async create(@Body() body) {
    return this.lugaresService.create(body);
  }

  // ================================
  // PUT /lugares/:id → actualizar
  // ================================
  @Put(':id')
  async update(@Param('id') id: number, @Body() body) {
    const lugar = await this.lugaresService.update(id, body);
    return lugar;
  }

  // ================================
  // DELETE /lugares/:id → borrar
  // ================================
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.lugaresService.delete(id);
  }
}
