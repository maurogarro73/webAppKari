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
  title: 'Estudio Jurídico Mendiara',
  description: 'Servicios legales expertos en derecho',
  generator: 'maurogarro.dev',
  metadataBase: new URL('https://estudiojuridicomendiara.com.ar'),
  icons: {
    icon: '/logo.png', // 📁 ubicá el archivo en /public
  },
  openGraph: {
    title: 'Estudio Jurídico Mendiara',
    description: 'Servicios legales expertos en derecho',
    url: 'https://estudiojuridicomendiara.com.ar',
    siteName: 'Estudio Jurídico Mendiara',
    images: [
      {
        url: '/logo.png', // 📁 guardá esta imagen en /public
        width: 1200,
        height: 630,
        alt: 'Estudio Jurídico Mendiara',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Jurídico Mendiara',
    description: 'Asesoramiento legal integral y profesional.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`font-sans ${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
