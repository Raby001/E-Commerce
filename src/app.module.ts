import { Module } from '@nestjs/common';
import { ReceiptModule } from './receipts/receipts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
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
    ReceiptModule,
    NotificationsModule,
    OrdersModule,
    CoreModule,  

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
