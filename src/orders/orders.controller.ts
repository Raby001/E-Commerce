import { Body, Controller, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService){}

    @Post()
    createOrder(@Body() data: any){
        return this.orderService.createOrder(data);
    }
}
