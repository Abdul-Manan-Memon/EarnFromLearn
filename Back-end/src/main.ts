import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { 
  const app = await NestFactory.create(AppModule);
  const Port = process.env.SERVER_PORT;
  app.enableCors();
  await app.listen(Port);
}
bootstrap();
