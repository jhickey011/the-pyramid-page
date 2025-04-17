import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Pyramid Page',
  description: 'Exploring the women’s football pyramid in England',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
