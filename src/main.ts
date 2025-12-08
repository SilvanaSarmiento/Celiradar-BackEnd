import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const frontend = config.get<string>('FRONTEND_URL') || 'http://localhost:5173';
  app.enableCors({
    origin: frontend,
    credentials: true,
  });
  await app.listen(config.get<number>('API_PORT') || 3001);
}
bootstrap();

