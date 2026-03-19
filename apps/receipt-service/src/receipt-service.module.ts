import { Module } from '@nestjs/common';
import { ReceiptsController } from './receipt-service.controller';
import { ReceiptsService } from './receipt-service.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReceiptsEntity } from './database/entities/Receipt.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forFeature([ReceiptsEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities:true,
      synchronize: true
    }),  

    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'notification_queue',
          queueOptions: { durable: true },
        },
      },
      {
        name: 'ANALYTICS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'analytics_queue',
          queueOptions: { durable: true },
        },
      },
    ]),

  ],
  controllers: [ReceiptsController],
  providers: [ReceiptsService],
})
export class ReceiptServiceModule {}
