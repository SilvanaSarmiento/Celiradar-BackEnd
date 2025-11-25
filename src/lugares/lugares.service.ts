import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lugar } from './lugar.entity';

@Injectable()
export class LugaresService {
  constructor(
    @InjectRepository(Lugar)
    private lugarRepo: Repository<Lugar>
  ) {}

  // ===========================
  // Traer todos los lugares
  // ===========================
  findAll(options: any = {}) {
    return this.lugarRepo.find(options);
  }

  // ===========================
  // Traer un lugar por ID
  // ===========================
  async findOne(id: number, options: any = {}) {
    return this.lugarRepo.findOne({
      where: { id },
      ...options
    });
  }

  // ===========================
  // Crear nuevo lugar
  // ===========================
  create(data: any) {
    const nuevo = this.lugarRepo.create(data);
    return this.lugarRepo.save(nuevo);
  }

  // ===========================
  // Actualizar lugar
  // ===========================
  update(id: number, data: any) {
    return this.lugarRepo.update(id, data);
  }

  // ===========================
  // Eliminar lugar
  // ===========================
  delete(id: number) {
    return this.lugarRepo.delete(id);
  }
}
