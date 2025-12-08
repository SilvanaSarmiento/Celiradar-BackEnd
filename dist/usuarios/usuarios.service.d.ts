import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { RegistroUsuarioDto } from './DTOs/registro-usuario.dto';
import { LoginUsuarioDto } from './DTOs/login-usuario.dto';
export declare class UsuariosService {
    private readonly usuariosRepo;
    constructor(usuariosRepo: Repository<Usuario>);
    registrar(datos: RegistroUsuarioDto): Promise<Usuario>;
    login(datos: LoginUsuarioDto): Promise<Usuario>;
    obtenerUsuario(id: number): Promise<Usuario>;
    activarSuscripcion(id: number): Promise<Usuario>;
    desactivarSuscripcion(id: number): Promise<Usuario>;
}
