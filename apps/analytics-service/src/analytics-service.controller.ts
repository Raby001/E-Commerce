import { Controller, Get } from '@nestjs/common';
import { AnalyticsServiceService } from './analytics-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AnalyticsServiceController {
  @EventPattern('receipt_created')
  handleAnalytics(@Payload() data: any) {
    console.log('Analytics received:', data);
  }
}
