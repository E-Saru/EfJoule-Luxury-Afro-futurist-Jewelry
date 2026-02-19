import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Product as ProductType, Material as MaterialType, Gemstone as GemstoneType } from '@efjoule/types';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  private mapProduct(p: any): ProductType {
    const materials: MaterialType[] = (p.materials || []).map((pm: any) => ({
      id: pm.material.id,
      name: pm.material.name,
      description: pm.material.description ?? undefined,
      createdAt: pm.material.createdAt.toISOString(),
      updatedAt: pm.material.updatedAt.toISOString()
    }));

    const gemstones: GemstoneType[] = (p.gemstones || []).map((pg: any) => ({
      id: pg.gemstone.id,
      type: pg.gemstone.type,
      carat: pg.gemstone.carat,
      createdAt: pg.gemstone.createdAt.toISOString(),
      updatedAt: pg.gemstone.updatedAt.toISOString()
    }));

    return {
      id: p.id,
      slug: p.slug,
      title: p.title,
      description: p.description ?? undefined,
      category: p.category,
      priceCents: p.priceCents,
      collectionId: p.collectionId ?? undefined,
      materials,
      gemstones,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString()
    };
  }

  async findAll(): Promise<ProductType[]> {
    const products = await this.prisma.product.findMany({
      include: { materials: { include: { material: true } }, gemstones: { include: { gemstone: true } } }
    });
    return products.map((p) => this.mapProduct(p));
  }

  async findBySlug(slug: string): Promise<ProductType | null> {
    const p = await this.prisma.product.findUnique({
      where: { slug },
      include: { materials: { include: { material: true } }, gemstones: { include: { gemstone: true } } }
    });
    return p ? this.mapProduct(p) : null;
  }
}
