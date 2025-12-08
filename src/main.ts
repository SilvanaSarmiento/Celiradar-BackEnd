import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin:["https://celiradar-backend.onrender.com", 
          "http://localhost:3001" ],
          METHODS: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          credentials:'false'

  });

  const config = app.get(ConfigService);
  const frontend = config.get<string>('https://celiradar-backend.onrender.com') || 'http://localhost:5173';
  app.enableCors({
    origin: frontend,
    credentials: true,
  });
  await app.listen(config.get<number>('API_PORT') || 3001);
}
bootstrap();

