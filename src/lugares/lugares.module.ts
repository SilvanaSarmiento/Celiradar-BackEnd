import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lugar } from './lugar.entity';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lugar])],
  providers: [LugaresService],
  controllers: [LugaresController],
  exports: [TypeOrmModule]
})
export class LugaresModule {}
