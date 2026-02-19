import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User as UserType } from '@efjoule/types';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserType[]> {
    const users = await this.prisma.user.findMany();
    return users.map((u) => ({
      id: u.id,
      email: u.email,
      name: u.name ?? undefined,
      createdAt: u.createdAt.toISOString(),
      updatedAt: u.updatedAt.toISOString()
    }));
  }

  async create(data: { email: string; name?: string }): Promise<UserType> {
    const u = await this.prisma.user.create({ data: { email: data.email, name: data.name } });
    return {
      id: u.id,
      email: u.email,
      name: u.name ?? undefined,
      createdAt: u.createdAt.toISOString(),
      updatedAt: u.updatedAt.toISOString()
    };
  }
}
