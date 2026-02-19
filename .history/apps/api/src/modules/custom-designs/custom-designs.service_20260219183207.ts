import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomDesign as CustomDesignType } from '@efjoule/types';

@Injectable()
export class CustomDesignsService {
  constructor(private readonly prisma: PrismaService) {}

  async findByUser(userId: string): Promise<CustomDesignType[]> {
    const designs = await this.prisma.customDesign.findMany({ where: { userId } });
    return designs.map((d) => ({
      id: d.id,
      userId: d.userId,
      name: d.name,
      specs: d.specs as Record<string, string>,
      createdAt: d.createdAt.toISOString(),
      updatedAt: d.updatedAt.toISOString()
    }));
  }
}
