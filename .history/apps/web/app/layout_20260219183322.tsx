import './globals.css';
import Providers from '../src/providers/providers';

export const metadata = {
  title: 'EfJoule — Luxury Afro-futurist Jewelry',
  description: 'EfJoule platform: Afro-futurist luxury jewelry'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
