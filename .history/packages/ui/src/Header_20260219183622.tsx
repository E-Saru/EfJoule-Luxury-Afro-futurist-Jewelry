import React from 'react';

export function Header() {
  return (
    <header className="w-full py-4 border-b border-[#151515]">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-display">EfJoule</div>
        <nav className="space-x-4">
          <a href="/collections" className="text-sm opacity-90">
            Collections
          </a>
          <a href="/create-custom" className="text-sm opacity-90">
            Create
          </a>
          <a href="/account" className="text-sm opacity-90">
            Account
          </a>
        </nav>
      </div>
    </header>
  );
}
