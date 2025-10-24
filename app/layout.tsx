import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Estudio Jurídico Mendiara',
    template: '%s | Estudio Jurídico Mendiara',
  },
  description:
    'Servicios legales expertos en derecho de familia, civil y laboral. Asesoramiento jurídico personalizado en Santa Rosa, La Pampa.',
  generator: 'maurogarro.dev',
  keywords: [
    'abogada',
    'abogado',
    'derecho de familia',
    'estudio jurídico',
    'La Pampa',
    'asesoría legal',
    'derecho civil',
    'derecho laboral',
    'abogada Mendiara',
  ],
  alternates: {
    canonical: 'https://estudiojuridicomendiara.com.ar',
  },
  metadataBase: new URL('https://estudiojuridicomendiara.com.ar'),
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Estudio Jurídico Mendiara',
    description:
      'Soluciones legales profesionales en las que podés confiar. Especialistas en derecho de familia, civil y laboral.',
    url: 'https://estudiojuridicomendiara.com.ar',
    siteName: 'Estudio Jurídico Mendiara',
    images: [
      {
        url: '/logo.png', // 👉 usá una imagen 1200x630 optimizada (no el logo)
        width: 1200,
        height: 630,
        alt: 'Estudio Jurídico Mendiara - Servicios legales profesionales',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Jurídico Mendiara',
    description: 'Asesoramiento legal integral y profesional. Derecho de familia, civil y laboral en Santa Rosa, La Pampa.',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Estudio Jurídico Mendiara',
              url: 'https://estudiojuridicomendiara.com.ar',
              logo: 'https://estudiojuridicomendiara.com.ar/logo.png',
              image: 'https://estudiojuridicomendiara.com.ar/logo.png',
              description:
                'Servicios legales expertos en derecho de familia, civil y laboral. Soluciones legales en las que podés confiar.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bartolomé Mitre 350',
                addressLocality: 'Santa Rosa',
                addressRegion: 'La Pampa',
                postalCode: '6300',
                addressCountry: 'AR',
              },
              areaServed: 'Argentina',
              telephone: '+54 9 2954 605557',
              openingHours: 'Mo-Fr 09:00-18:00',
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
