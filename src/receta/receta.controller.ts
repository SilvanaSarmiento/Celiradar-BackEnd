import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { RecetasService } from './recetas.service';
import { Receta } from './receta.entity';
import {CreateRecetaDto} from '../receta/dto/create-receta-dto';
import { UpdateRecetaDto } from './dto/update-receta-dto';

@Controller('recetas')
export class RecetasController {
  constructor(private recetasService: RecetasService) {}

  @Get()
  findAll(): Promise<Receta[]> {
    return this.recetasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.recetasService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  create(@Body() createDto: CreateRecetaDto) {
    return this.recetasService.create(createDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateRecetaDto) {
    return this.recetasService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recetasService.remove(id);
  }
}


