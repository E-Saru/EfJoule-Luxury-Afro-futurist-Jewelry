import { Button } from '../../../packages/ui/src/Button';
import { Header } from '../../../packages/ui/src/Header';
import { Product } from '@efjoule/types';

const featured: Product[] = [
  {
    id: '0001',
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

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <section className="py-12">
          <h1 className="text-4xl font-display mb-4">EfJoule — Where heritage meets the future</h1>
          <p className="mb-6 text-lg">Editorial drops · Bespoke design · Craftsmanship reimagined</p>
          <Button>Explore Collections</Button>
        </section>

        <section className="py-12">
          <h2 className="text-2xl mb-4">Featured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <article key={p.id} className="bg-[#0f0f0f] p-4 rounded-lg">
                <h3 className="text-xl">{p.title}</h3>
                <p className="text-sm">{p.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
