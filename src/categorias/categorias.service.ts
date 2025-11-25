import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';


@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) {}

  findAll() {
    return this.categoriaRepo.find({ relations: ['lugares'] });
  }

  findOne(id: number) {
    return this.categoriaRepo.findOne({
      where: { id },
      relations: ['lugares'],
    });
  }

  async create(data: Partial<Categoria>) {
    const nuevaCategoria = this.categoriaRepo.create(data);
    return this.categoriaRepo.save(nuevaCategoria);
  }

  async update(id: number, data: Partial<Categoria>) {
    const categoria = await this.categoriaRepo.findOne({ where: { id } });

    if (!categoria) {
      throw new NotFoundException('La categoría no existe');
    }

    Object.assign(categoria, data);
    return this.categoriaRepo.save(categoria);
  }

  async delete(id: number) {
    const categoria = await this.categoriaRepo.findOne({ where: { id } });

    if (!categoria) {
      throw new NotFoundException('La categoría no existe');
    }

    return this.categoriaRepo.remove(categoria);
  }
}
