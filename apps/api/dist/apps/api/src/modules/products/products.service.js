var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    mapProduct(p) {
        const materials = (p.materials || []).map((pm) => ({
            id: pm.material.id,
            name: pm.material.name,
            description: pm.material.description ?? undefined,
            createdAt: pm.material.createdAt.toISOString(),
            updatedAt: pm.material.updatedAt.toISOString()
        }));
        const gemstones = (p.gemstones || []).map((pg) => ({
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
    async findAll() {
        const products = await this.prisma.product.findMany({
            include: { materials: { include: { material: true } }, gemstones: { include: { gemstone: true } } }
        });
        return products.map((p) => this.mapProduct(p));
    }
    async findBySlug(slug) {
        const p = await this.prisma.product.findUnique({
            where: { slug },
            include: { materials: { include: { material: true } }, gemstones: { include: { gemstone: true } } }
        });
        return p ? this.mapProduct(p) : null;
    }
};
ProductsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ProductsService);
export { ProductsService };
