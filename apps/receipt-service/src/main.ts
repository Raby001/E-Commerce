import { NestFactory } from '@nestjs/core';
import { ReceiptServiceModule } from './receipt-service.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(ReceiptServiceModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted: true,
    transform: true
  }))
  app.useGlobalInterceptors(new LoggingInterceptor)
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
