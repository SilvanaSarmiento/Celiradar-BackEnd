import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // HABILITAR CORS para permitir peticiones del frontend
  app.enableCors({
    origin: 'http://localhost:5173', // puerto de Vite
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });

  // CAMBIAMOS EL PUERTO porque el 5000 está ocupado
  const PORT = 3001;

  await app.listen(PORT);
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
}
bootstrap();
