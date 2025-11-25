import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './comentario.entity';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private comentariosRepo: Repository<Comentario>,
  ) {}

  findAll() {
    return this.comentariosRepo.find({
      relations: ['usuario', 'lugar'],
    });
  }

  findByLugar(lugarId: number) {
    return this.comentariosRepo.find({
      where: { lugar: { id: lugarId } },
      relations: ['usuario', 'lugar'],
    });
  }

  findOne(id: number) {
    return this.comentariosRepo.findOne({
      where: { id },
      relations: ['usuario', 'lugar'],
    });
  }

  async create(data: any) {
    const nuevoComentario = this.comentariosRepo.create({
      ...data,
      fecha: new Date(),
    });
    return this.comentariosRepo.save(nuevoComentario);
  }

  async update(id: number, data: any) {
    const comentario = await this.comentariosRepo.findOne({ where: { id } });

    if (!comentario) {
      throw new NotFoundException('El comentario no existe');
    }

    Object.assign(comentario, data);
    return this.comentariosRepo.save(comentario);
  }

  async delete(id: number) {
    const comentario = await this.comentariosRepo.findOne({ where: { id } });

    if (!comentario) {
      throw new NotFoundException('El comentario no existe');
    }

    return this.comentariosRepo.remove(comentario);
  }
}
