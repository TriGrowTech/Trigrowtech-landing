import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

export const metadata: Metadata = {
  title: 'TriGrowTech',
  description: 'India-based software company building custom solutions and SaaS products that scale.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="noise">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
