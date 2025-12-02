import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Estudio Jurídico Mendiara | Derecho de Familia, Civil y Laboral',
    template: '%s | Estudio Jurídico Mendiara',
  },
  description:
    'Estudio Jurídico Mendiara en Santa Rosa, La Pampa. Especialistas en derecho de familia, civil, laboral e inmobiliario con atención personalizada y cercana.',
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
    'Santa Rosa',
    'Estudio Jurídico Mendiara',
    'abogada en La Pampa',
  ],
  alternates: {
    canonical: 'https://estudiojuridicomendiara.com.ar',
  },
  metadataBase: new URL('https://estudiojuridicomendiara.com.ar'),
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/logo-512.png', type: 'image/png', sizes: '512x512' }],
    shortcut: '/favicon.ico',
    apple: '/logo-512.png',
  },
  openGraph: {
    title: 'Estudio Jurídico Mendiara | Derecho de Familia, Civil y Laboral',
    description:
      'Estudio jurídico especializado en derecho de familia, civil, laboral e inmobiliario. Atención personalizada en Santa Rosa, La Pampa.',
    url: 'https://estudiojuridicomendiara.com.ar',
    siteName: 'Estudio Jurídico Mendiara',
    images: [
      {
        url: 'https://estudiojuridicomendiara.com.ar/logo-512.png',
        width: 512,
        height: 512,
        alt: 'Estudio Jurídico Mendiara - Asesoramiento Legal',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio Jurídico Mendiara | Derecho de Familia, Civil y Laboral',
    description:
      'Asesoramiento legal integral y profesional. Derecho de familia, civil, laboral e inmobiliario en Santa Rosa, La Pampa.',
    images: ['https://estudiojuridicomendiara.com.ar/logo-512.png'],
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
              '@id': 'https://estudiojuridicomendiara.com.ar/#organization',
              name: 'Estudio Jurídico Mendiara',
              url: 'https://estudiojuridicomendiara.com.ar',
              logo: 'https://estudiojuridicomendiara.com.ar/logo-512.png',
              image: 'https://estudiojuridicomendiara.com.ar/logo-512.png',
              description:
                'Servicios legales expertos en derecho de familia, civil, laboral e inmobiliario en Santa Rosa, La Pampa. Soluciones legales confiables y cercanas.',
              telephone: '+54 9 2954 605557',
              email: 'estudiojuridicomendiara@gmail.com',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bartolomé Mitre 350',
                addressLocality: 'Santa Rosa',
                addressRegion: 'La Pampa',
                postalCode: '6300',
                addressCountry: 'AR',
              },
              areaServed: ['Argentina', 'La Pampa', 'Santa Rosa'],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -36.6208,
                longitude: -64.2906,
              },
              knowsAbout: ['derecho de familia', 'derecho civil', 'derecho laboral', 'derecho inmobiliario'],
              founder: {
                '@type': 'Person',
                name: 'Karina Lucía Álvarez Mendiara',
                jobTitle: 'Abogada',
                sameAs: [
                  'https://www.instagram.com/abogada_alvarezmendiarakarina',
                  'https://www.linkedin.com/in/karinaluciaalvarezmendiara',
                ],
              },
              sameAs: [
                'https://www.instagram.com/abogada_alvarezmendiarakarina',
                'https://www.linkedin.com/in/karinaluciaalvarezmendiara',
              ],
              hasMap: 'https://www.google.com/maps?q=Bartolome+Mitre+350,+Santa+Rosa,+La+Pampa',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://estudiojuridicomendiara.com.ar',
              name: 'Estudio Jurídico Mendiara',
              inLanguage: 'es-AR',
              publisher: {
                '@type': 'Organization',
                name: 'Estudio Jurídico Mendiara',
                url: 'https://estudiojuridicomendiara.com.ar',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://estudiojuridicomendiara.com.ar/logo-512.png',
                },
              },
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
