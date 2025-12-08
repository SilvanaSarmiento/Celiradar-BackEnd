import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consejo } from './consejo.entity'; 
import { ConsejosService } from './consejos.service';
import { ConsejosController } from './consejos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Consejo])],
  providers: [ConsejosService],
  controllers: [ConsejosController],
  exports: [ConsejosService],
})
export class ConsejosModule {}
