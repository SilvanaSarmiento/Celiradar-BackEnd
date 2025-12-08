import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { RegistroUsuarioDto } from './DTOs/registro-usuario.dto';
import { LoginUsuarioDto } from './DTOs/login-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('registro')
  registrar(@Body() datos: RegistroUsuarioDto) {
    return this.usuariosService.registrar(datos);
  }

  @Post('login')
  login(@Body() datos: LoginUsuarioDto) {
    return this.usuariosService.login(datos);
  }

  @Get(':id')
  obtener(@Param('id') id: number) {
    return this.usuariosService.obtenerUsuario(id);
  }

  @Post(':id/activar-suscripcion')
  activar(@Param('id') id: number) {
    return this.usuariosService.activarSuscripcion(id);
  }

  @Post(':id/desactivar-suscripcion')
  desactivar(@Param('id') id: number) {
    return this.usuariosService.desactivarSuscripcion(id);
  }
}
