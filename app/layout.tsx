import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
