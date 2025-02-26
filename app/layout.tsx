import './globals.css';
import { Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'grass',
  description: 'A Three.js grass simulation'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
