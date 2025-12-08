import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConsejosService } from './consejos.service';
import { Consejo } from './consejo.entity';

@Controller('consejos') 
export class ConsejosController {
  constructor(private consejosService: ConsejosService) {}

  @Get()
  findAll(): Promise<Consejo[]> {
    return this.consejosService.findAll();
  }

  @Post()
  create(@Body() data: { titulo: string; texto: string }): Promise<Consejo> {
    return this.consejosService.create(data);
  }
}