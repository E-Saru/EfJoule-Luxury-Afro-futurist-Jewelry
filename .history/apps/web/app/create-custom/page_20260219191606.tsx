import { Header } from '@efjoule/ui';

export default function CreateCustom() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl mb-4">Design a Custom Piece</h1>
        <p className="mb-6">Begin by choosing materials, motifs, and gemstones.</p>
        <div className="bg-[#0f0f0f] p-6 rounded">Configurator UI placeholder</div>
      </main>
    </div>
  );
}
