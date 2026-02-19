import dynamic from 'next/dynamic';
import { Header } from '@efjoule/ui';
import { Product, ProductCategory } from '@efjoule/types';

const ThreeViewer = dynamic(() => import('@efjoule/ui').then((m) => m.ThreeViewer), {
  ssr: false
});

const mockProduct: Product = {
  id: 'p1',
  slug: 'afro-orbit-collar',
  title: 'Afro Orbit Collar',
  description: 'Sculptural collar inspired by orbital geometry',
  category: ProductCategory.Necklace,
  priceCents: 125000,
  collectionId: undefined,
  materials: [],
  gemstones: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl mb-4">{mockProduct.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-80 bg-black rounded">
            <ThreeViewer />
          </div>
          <div>
            <p className="mb-4">{mockProduct.description}</p>
            <p className="text-xl font-semibold">${(mockProduct.priceCents / 100).toFixed(2)}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
