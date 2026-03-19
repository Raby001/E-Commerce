import { Controller, Get } from '@nestjs/common';
import { NotificationServiceService } from './notification-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationServiceController {
  @EventPattern('receipt_created')
  handleNotification(@Payload() data: any) {
    console.log('Notification received:', data);
  }
}
