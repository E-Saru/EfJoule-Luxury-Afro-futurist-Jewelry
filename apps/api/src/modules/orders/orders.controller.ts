import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get('user/:userId')
  async byUser(@Param('userId') userId: string) {
    return this.service.findByUser(userId);
  }
}
