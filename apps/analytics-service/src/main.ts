import { NestFactory } from '@nestjs/core';
import { AnalyticsServiceModule } from './analytics-service.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AnalyticsServiceModule,{
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'analytics_queue',
      queueOptions: { durable: true },
    },
  });
  await app.listen();
}
bootstrap();
