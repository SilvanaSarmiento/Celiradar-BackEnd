import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './receta.entity';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private recetaRepo: Repository<Receta>,
  ) {}

  findAll(): Promise<Receta[]> {
    return this.recetaRepo.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Receta> {
    const receta = await this.recetaRepo.findOne({
      where: { id_receta: id },
      relations: ['usuario'],
    });
    if (!receta) throw new NotFoundException(`Receta ${id} no encontrada`);
    return receta;
  }

  create(data: Partial<Receta>) {
    const nueva = this.recetaRepo.create(data);
    return this.recetaRepo.save(nueva);
  }

  async update(id: number, data: Partial<Receta>) {
    const receta = await this.recetaRepo.findOne({ where: { id_receta: id }});
    if (!receta) throw new NotFoundException(`Receta ${id} no encontrada`);
    const merged = this.recetaRepo.merge(receta, data);
    return this.recetaRepo.save(merged);
  }

  async remove(id: number) {
    const receta = await this.recetaRepo.findOne({ where: { id_receta: id }});
    if (!receta) throw new NotFoundException(`Receta ${id} no encontrada`);
    await this.recetaRepo.remove(receta);
    return { message: 'Receta eliminada' };
  }
}
