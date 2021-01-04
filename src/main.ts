import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,   //이상한걸 보내면 Request 자체를 막아버림
    transform: true,    //유저들이 보낸것을 우리가 원하는 실제 타입으로 변환
  }));
  await app.listen(3000);
}
bootstrap();
