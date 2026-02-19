import { Injectable } from '@nestjs/common';
import { Product } from '@efjoule/types';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
  async findAll(): Promise<Product[]> {
    return [
      {
        id: randomUUID(),
        slug: 'afro-orbit-collar',
        title: 'Afro Orbit Collar',
        description: 'A sculptural collar inspired by orbital geometry.',
        category: 'NECKLACE' as const,
        priceCents: 125000,
        collectionId: undefined,
        materials: [],
        gemstones: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
  }

  async findBySlug(slug: string): Promise<Product | null> {
    const products = await this.findAll();
    return products.find((p) => p.slug === slug) ?? null;
  }
}
