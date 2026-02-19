import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Order as OrderType } from '@efjoule/types';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByUser(userId: string): Promise<OrderType[]> {
    const orders = await this.prisma.order.findMany({ where: { userId }, include: { items: true } });
    return orders.map((o) => ({
      id: o.id,
      userId: o.userId,
      items: (o.items || []).map((it) => ({ productId: it.productId, quantity: it.quantity, unitPriceCents: it.unitPriceCents })),
      status: o.status as unknown as import('@efjoule/types').OrderStatus,
      totalCents: o.totalCents,
      createdAt: o.createdAt.toISOString(),
      updatedAt: o.updatedAt.toISOString()
    }));
  }
}
