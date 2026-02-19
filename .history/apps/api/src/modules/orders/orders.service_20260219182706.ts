import { Injectable } from '@nestjs/common';
import { Order, OrderStatus } from '@efjoule/types';
import { randomUUID } from 'crypto';

@Injectable()
export class OrdersService {
  async findByUser(userId: string): Promise<Order[]> {
    return [
      {
        id: randomUUID(),
        userId,
        items: [],
        status: OrderStatus.Pending,
        totalCents: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
  }
}
