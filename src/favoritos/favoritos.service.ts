import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorito } from './favorito.entity';

@Injectable()
export class FavoritosService {
  constructor(
    @InjectRepository(Favorito)
    private favoritosRepo: Repository<Favorito>,
  ) {}

  findAll() {
    return this.favoritosRepo.find({
      relations: ['usuario', 'lugar'],
    });
  }

  findByUsuario(usuarioId: number) {
    return this.favoritosRepo.find({
      where: { usuario: { id: usuarioId } },
      relations: ['usuario', 'lugar'],
    });
  }

  async create(data: any) {
    const nuevoFav = this.favoritosRepo.create({
      ...data,
      fecha_guardado: new Date(),
    });

    return this.favoritosRepo.save(nuevoFav);
  }

  async delete(id: number) {
    const fav = await this.favoritosRepo.findOne({ where: { id } });

    if (!fav) {
      throw new NotFoundException('El favorito no existe');
    }

    return this.favoritosRepo.remove(fav);
  }
}
