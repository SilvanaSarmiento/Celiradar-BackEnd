import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetasModule } from './receta/recetas.module';
import { ConsejosModule } from './consejo/consejos.module';
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
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT ?? '3306'),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
       }),
    
  
    UsuariosModule,
    RecetasModule,
    ConsejosModule,
    LugaresModule,
    ComentariosModule,
    CategoriasModule,
    FavoritosModule,
    ImagenesModule, 
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
