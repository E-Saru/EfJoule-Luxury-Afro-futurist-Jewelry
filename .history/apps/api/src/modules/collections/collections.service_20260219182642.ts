import { Injectable } from '@nestjs/common';
import { Collection } from '@efjoule/types';
import { randomUUID } from 'crypto';

@Injectable()
export class CollectionsService {
  async findAll(): Promise<Collection[]> {
    return [
      {
        id: randomUUID(),
        title: 'Celestial Weaves',
        slug: 'celestial-weaves',
        description: 'A collection that fuses celestial motifs with woven textures.',
        productIds: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
  }
}
