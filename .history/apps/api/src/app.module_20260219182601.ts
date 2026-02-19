import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { CollectionsModule } from './modules/collections/collections.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomDesignsModule } from './modules/custom-designs/custom-designs.module';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule, CollectionsModule, OrdersModule, CustomDesignsModule],
  providers: [PrismaService]
})
export class AppModule {}
