import { UsuariosService } from './usuarios.service';
import { RegistroUsuarioDto } from './DTOs/registro-usuario.dto';
import { LoginUsuarioDto } from './DTOs/login-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    registrar(datos: RegistroUsuarioDto): Promise<import("./usuario.entity").Usuario>;
    login(datos: LoginUsuarioDto): Promise<import("./usuario.entity").Usuario>;
    obtener(id: number): Promise<import("./usuario.entity").Usuario>;
    activar(id: number): Promise<import("./usuario.entity").Usuario>;
    desactivar(id: number): Promise<import("./usuario.entity").Usuario>;
}
