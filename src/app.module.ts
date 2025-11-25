import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './usuarios/usuarios.module';
import { LugaresModule } from './lugares/lugares.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { ImagenesModule } from './imagenes/imagenes.module'; 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root1234!',
      database: 'celiradar',
      autoLoadEntities: true,
      synchronize: true,
    }),

    // 👉 IMPORTAR MÓDULOS DEL PROYECTO
    UsuariosModule,
    LugaresModule,
    ComentariosModule,
    CategoriasModule,
    FavoritosModule,
    ImagenesModule, // 👈 AGREGADO AQUÍ
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
