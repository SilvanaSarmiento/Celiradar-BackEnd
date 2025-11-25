import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepo: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuariosRepo.find();
  }

  findOne(id: number) {
    return this.usuariosRepo.findOne({ where: { id } });
  }

  async create(data: Partial<Usuario>) {
    const nuevoUsuario = this.usuariosRepo.create(data);
    return this.usuariosRepo.save(nuevoUsuario);
  }

  async update(id: number, data: Partial<Usuario>) {
    const usuario = await this.usuariosRepo.findOne({ where: { id } });

    if (!usuario) throw new NotFoundException('El usuario no existe');

    Object.assign(usuario, data);
    return this.usuariosRepo.save(usuario);
  }

  async delete(id: number) {
    const usuario = await this.usuariosRepo.findOne({ where: { id } });

    if (!usuario) throw new NotFoundException('El usuario no existe');

    return this.usuariosRepo.remove(usuario);
  }
}
