import { Header } from '@efjoule/ui';
import { Product } from '@efjoule/types';

const mockProducts: Product[] = [
  {
    id: 'p1',
    slug: 'afro-orbit-collar',
    title: 'Afro Orbit Collar',
    description: 'Sculptural collar inspired by orbital geometry',
    category: 'NECKLACE',
    priceCents: 125000,
    collectionId: undefined,
    materials: [],
    gemstones: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl mb-6">Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((p) => (
            <article key={p.id} className="bg-[#0f0f0f] p-4 rounded-lg">
              <h3 className="text-xl">{p.title}</h3>
              <p className="text-sm">{p.description}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
