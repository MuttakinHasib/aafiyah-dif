import { metaKeywords } from './keywords';
import type { Metadata } from 'next';

export const defaultMetadata = {
  title: 'Aafiyah - Islamic E-commerce Shop',
  description:
    'Aafiyah is your one-stop-shop for Islamic clothing, accessories, books, and more. Find a wide range of high-quality products to fulfill your Islamic lifestyle needs.',
  keywords: metaKeywords.join(', '),
  creator: 'Muttakin Islam Hasib',
  publisher: 'Muttakin Islam Hasib',
  applicationName: 'Aafiyah',
  viewport: 'width=device-width, initial-scale=1.0',
  colorScheme: 'light',
  robots: {
    follow: true,
  },
  authors: [
    {
      name: 'Muttakin Islam Hasib',
      url: 'https://muttakinhasib.com',
    },
  ],
  themeColor: '#ffffff',
  appLinks: {
    web: {
      url: 'https://aafiyah.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aafiyah.com',
    siteName: 'Aafiyah',
    title: 'Aafiyah - Islamic E-commerce Shop',
    description:
      'Aafiyah is your one-stop-shop for Islamic clothing, accessories, books, and more. Find a wide range of high-quality products to fulfill your Islamic lifestyle needs.',
    images: [
      {
        url: 'https://aafiyah.com/images/seo_image.png',
        width: 800,
        height: 600,
        alt: 'Aafiyah - Islamic E-commerce Shop',
      },
    ],
    emails: ['muttakinislamhasib@gmail.com'],
    phoneNumbers: ['+880 1315-873250'],
    countryName: 'Bangladesh',
  },
  twitter: {
    creator: '@muttakinhasib',
    site: '@aafiyah',
    card: 'summary_large_image',
    title: 'Aafiyah - Islamic E-commerce Shop',
    description:
      'Aafiyah is your one-stop-shop for Islamic clothing, accessories, books, and more. Find a wide range of high-quality products to fulfill your Islamic lifestyle needs.',
    images: [
      {
        url: 'https://aafiyah.com/images/seo_image.png',
        width: 800,
        height: 600,
        alt: 'Aafiyah - Islamic E-commerce Shop',
      },
    ],
  },
} as Metadata;
