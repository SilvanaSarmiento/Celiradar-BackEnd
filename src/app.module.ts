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
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT', '3306')),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: config.get<string>('NODE_ENV') !== 'production',
        // extra: { ssl: { rejectUnauthorized: false } }, // activar solo si Clever Cloud pide SSL
      }),
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
