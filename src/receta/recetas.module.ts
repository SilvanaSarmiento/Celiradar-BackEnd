import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './receta.entity';
import { RecetasService } from './recetas.service';
import { RecetasController } from './receta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Receta])],
  providers: [RecetasService],
  controllers: [RecetasController],
})
export class RecetasModule {}
