
import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Usuario } from './usuario.entity';
import { RegistroUsuarioDto } from './DTOs/registro-usuario.dto';
import { LoginUsuarioDto } from './DTOs/login-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepo: Repository<Usuario>,
  ) {}

  async registrar(datos: RegistroUsuarioDto): Promise<Usuario> {
    const existente = await this.usuariosRepo.findOne({ where: { email: datos.email } });
    if (existente) throw new BadRequestException('El email ya está registrado');

    const hash = await bcrypt.hash(datos.password, 10);

    const nuevo = this.usuariosRepo.create({
      nombre: datos.nombre,
      email: datos.email,
      password: hash,
    });

    return await this.usuariosRepo.save(nuevo);
  }

  async login(datos: LoginUsuarioDto): Promise<Usuario> {
    const usuario = await this.usuariosRepo.findOne({ where: { email: datos.email } });
    if (!usuario) throw new UnauthorizedException('Credenciales inválidas');

    const coincide = await bcrypt.compare(datos.password, usuario.password);
    if (!coincide) throw new UnauthorizedException('Credenciales inválidas');

    return usuario;
  }

  // Ahora este método lanza NotFoundException si no encuentra al usuario,
  // de modo que los llamantes no manejan `Usuario | null`.
  async obtenerUsuario(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepo.findOne({ where: { id } });
    if (!usuario) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return usuario;
  }

  async activarSuscripcion(id: number): Promise<Usuario> {
    const usuario = await this.obtenerUsuario(id); // ya lanza si no existe
    usuario.es_suscriptor = 1;
    return await this.usuariosRepo.save(usuario);
  }

  async desactivarSuscripcion(id: number): Promise<Usuario> {
    const usuario = await this.obtenerUsuario(id); // ya lanza si no existe
    usuario.es_suscriptor = 0;
    return await this.usuariosRepo.save(usuario);
  }
}
