import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Imagen } from './imagen.entity';

@Injectable()
export class ImagenesService {
  constructor(
    @InjectRepository(Imagen)
    private imagenRepo: Repository<Imagen>
  ) {}

  findByLugar(lugarId: number) {
    return this.imagenRepo.find({
      where: { lugar: { id: lugarId } },
      relations: ['lugar'],
    });
  }
}
