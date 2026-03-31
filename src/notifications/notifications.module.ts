import { forwardRef, Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { OrdersModule } from 'src/orders/orders.module';
import { CoreModule } from 'src/core/core.module';

@Module({
  providers: [NotificationsService],
  controllers: [NotificationsController],
  exports: [NotificationsService],
  imports: [CoreModule]
})
export class NotificationsModule {}
