import { Module } from '@nestjs/common';
import { CustomDesignsController } from './custom-designs.controller';
import { CustomDesignsService } from './custom-designs.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [CustomDesignsController],
  providers: [CustomDesignsService, PrismaService]
})
export class CustomDesignsModule {}
