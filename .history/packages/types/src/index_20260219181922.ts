export type UUID = string;

export enum OrderStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  Shipped = 'SHIPPED',
  Cancelled = 'CANCELLED'
}

export enum ProductCategory {
  Necklace = 'NECKLACE',
  Ring = 'RING',
  Bracelet = 'BRACELET',
  Earring = 'EARRING'
}

export enum GemstoneType {
  Diamond = 'DIAMOND',
  Ruby = 'RUBY',
  Sapphire = 'SAPPHIRE',
  Emerald = 'EMERALD'
}

export interface User {
  id: UUID;
  email: string;
  name?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Material {
  id: UUID;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Gemstone {
  id: UUID;
  type: GemstoneType;
  carat: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: UUID;
  slug: string;
  title: string;
  description?: string;
  category: ProductCategory;
  priceCents: number;
  collectionId?: UUID;
  materials: Material[];
  gemstones: Gemstone[];
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: UUID;
  title: string;
  slug: string;
  description?: string;
  productIds: UUID[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: UUID;
  quantity: number;
  unitPriceCents: number;
}

export interface Order {
  id: UUID;
  userId: UUID;
  items: OrderItem[];
  status: OrderStatus;
  totalCents: number;
  createdAt: string;
  updatedAt: string;
}

export interface CustomDesign {
  id: UUID;
  userId: UUID;
  name: string;
  specs: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}
