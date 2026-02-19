import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Collection as CollectionType } from '@efjoule/types';

@Injectable()
export class CollectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<CollectionType[]> {
    const cols = await this.prisma.collection.findMany({ include: { products: true } });
    return cols.map((c) => ({
      id: c.id,
      title: c.title,
      slug: c.slug,
      description: c.description ?? undefined,
      productIds: (c.products || []).map((p) => p.id),
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString()
    }));
  }
}
