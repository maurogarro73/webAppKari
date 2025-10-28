import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Estudio Jurídico Mendiara',
    template: '%s | Estudio Jurídico Mendiara',
  },
  description:
    'Asesoramiento legal integral en derecho de familia, civil, laboral e inmobiliario. Atención profesional en Santa Rosa, La Pampa.',
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
    icon: '/logo-512.png',
    shortcut: '/favicon.ico',
    apple: '/logo-512.png',
  },
  openGraph: {
    title: 'Estudio Jurídico Mendiara',
    description:
      'Estudio jurídico especializado en derecho de familia, civil y laboral. Atención personalizada en Santa Rosa, La Pampa.',
    url: 'https://estudiojuridicomendiara.com.ar',
    siteName: 'Estudio Jurídico Mendiara',
    images: [
      {
        url: '/logo.png', // 👉 usá una imagen 1200x630 optimizada (no el logo)
        width: 1200,
        height: 630,
        alt: 'Estudio Jurídico Mendiara - Asesoramiento Legal',
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
        {/* Google Ads Tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17674436925" />
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17674436925');
          `}
        </Script>
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
              priceRange: '$$',
              sameAs: [
                'https://www.instagram.com/abogada_alvarezmendiarakarina',
                'https://www.linkedin.com/in/karinaluciaalvarezmendiara',
              ],
              hasMap: 'https://www.google.com/maps?q=Bartolome+Mitre+350,+Santa+Rosa,+La+Pampa',
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
