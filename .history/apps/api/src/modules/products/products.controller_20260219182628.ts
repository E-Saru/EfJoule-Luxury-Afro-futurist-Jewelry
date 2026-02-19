import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  async list() {
    return this.service.findAll();
  }

  @Get(':slug')
  async find(@Param('slug') slug: string) {
    return this.service.findBySlug(slug);
  }
}
