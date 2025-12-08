"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const recetas_module_1 = require("./receta/recetas.module");
const consejos_module_1 = require("./consejo/consejos.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const lugares_module_1 = require("./lugares/lugares.module");
const comentarios_module_1 = require("./comentarios/comentarios.module");
const categorias_module_1 = require("./categorias/categorias.module");
const favoritos_module_1 = require("./favoritos/favoritos.module");
const imagenes_module_1 = require("./imagenes/imagenes.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                       host: config.get<string>('DB_HOST'),
                       port: parseInt(config.get<string>('DB_PORT', '3306')),
                       username: config.get<string>('DB_USERNAME'),
                       password: config.get<string>('DB_PASSWORD'),
                       database: config.get<string>('DB_NAME'),
                       autoLoadEntities: true,
                       entities: [__dirname + '/**/*.entity{.ts,.js}'],
                       synchronize: config.get<string>('NODE_ENV') !== 'production',
            }),
            usuarios_module_1.UsuariosModule,
            recetas_module_1.RecetasModule,
            consejos_module_1.ConsejosModule,
            lugares_module_1.LugaresModule,
            comentarios_module_1.ComentariosModule,
            categorias_module_1.CategoriasModule,
            favoritos_module_1.FavoritosModule,
            imagenes_module_1.ImagenesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map