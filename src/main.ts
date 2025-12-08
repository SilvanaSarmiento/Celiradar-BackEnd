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

 await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

