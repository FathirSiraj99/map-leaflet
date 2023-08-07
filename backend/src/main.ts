import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.enableCors();
  await app.listen(process.env.PORT,'192.168.18.210',()=>{
=======
  app.enableCors({
    origin: "*"
  });
  await app.listen(process.env.PORT,'192.168.56.1',()=>{
>>>>>>> 8a812454e79a8a4fa91f59a80b825cef33e5e24d
    console.log('successfull connect')
  })
}
bootstrap();


