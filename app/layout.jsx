import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Estudio Jurídico Mendiara | Professional Legal Services',
  description:
    'Servicios legales expertos en derecho de familia, derecho civil, derecho laboral y más. Soluciones legales personalizadas en las que podés confiar.',
  generator: 'maurogarro.dev',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
