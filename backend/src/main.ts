import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*"
  });
  await app.listen(process.env.PORT,'192.168.56.1',()=>{
    console.log('successfull connect')
  })
}
bootstrap();


