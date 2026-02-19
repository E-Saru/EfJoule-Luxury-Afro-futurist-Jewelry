import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@efjoule/types';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    // lightweight mock data; in production this would query Prisma
    return [
      {
        id: randomUUID(),
        email: 'collector@efjoule.art',
        name: 'A. Collector',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
  }

  async create(data: { email: string; name?: string }): Promise<User> {
    const user: User = {
      id: randomUUID(),
      email: data.email,
      name: data.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    return user;
  }
}
