import React from 'react';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-molten text-black font-semibold rounded shadow-sm hover:opacity-90">
      {children}
    </button>
  );
}
