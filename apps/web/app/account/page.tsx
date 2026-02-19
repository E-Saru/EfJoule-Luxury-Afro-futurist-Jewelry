import { Header } from '@efjoule/ui';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl mb-4">Account</h1>
        <p>Orders, saved designs, and profile settings will appear here.</p>
      </main>
    </div>
  );
}
