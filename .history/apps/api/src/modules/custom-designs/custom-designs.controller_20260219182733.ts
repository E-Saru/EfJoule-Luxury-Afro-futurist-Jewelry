import { Controller, Get, Param } from '@nestjs/common';
import { CustomDesignsService } from './custom-designs.service';

@Controller('custom-designs')
export class CustomDesignsController {
  constructor(private readonly service: CustomDesignsService) {}

  @Get('user/:userId')
  async byUser(@Param('userId') userId: string) {
    return this.service.findByUser(userId);
  }
}
