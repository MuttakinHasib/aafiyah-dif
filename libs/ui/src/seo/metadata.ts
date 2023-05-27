import { metaKeywords } from './keywords';
import type { Metadata } from 'next';

const baseURL = 'https://aafiyah.muttakinhasib.com';

export const defaultMetadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: 'Aafiyah - Islamic E-commerce Shop',
    template: '%s | Aafiyah',
  },
  description:
    'Aafiyah is your one-stop-shop for Islamic clothing, accessories, books, and more. Find a wide range of high-quality products to fulfill your Islamic lifestyle needs.',
  keywords: metaKeywords.join(', '),
  creator: 'Muttakin Islam Hasib',
  publisher: 'Muttakin Islam Hasib',
  applicationName: 'Aafiyah',
  viewport: 'width=device-width, initial-scale=1.0',
  colorScheme: 'light',
  category: 'Islamic E-commerce',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      url: baseURL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseURL,
    siteName: 'Aafiyah',
    title: 'Aafiyah - Islamic E-commerce Shop',
    description:
      'Aafiyah is your one-stop-shop for Islamic clothing, accessories, books, and more. Find a wide range of high-quality products to fulfill your Islamic lifestyle needs.',
    images: [
      {
        url: `${baseURL}/images/seo_image.png`,
        width: 800,
        height: 600,
        alt: 'Aafiyah - Islamic E-commerce Shop',
      },
    ],
    emails: ['muttakinislamhasib@gmail.com'],
    phoneNumbers: ['+880 1315-873250'],
    countryName: 'Bangladesh',
  },
  // icons: {
  //   // TODO: Add icons
  //   icon: {},
  // },
  twitter: {
    creator: '@muttakinhasib',
    site: '@aafiyah',
    card: 'summary_large_image',
    title: 'Aafiyah - Islamic E-commerce Shop',
    description:
      'Aafiyah is your one-stop-shop for Islamic clothing, accessories, books, and more. Find a wide range of high-quality products to fulfill your Islamic lifestyle needs.',
    images: [
      {
        url: `${baseURL}/images/seo_image.png`,
        width: 800,
        height: 600,
        alt: 'Aafiyah - Islamic E-commerce Shop',
      },
    ],
  },
} as Metadata;
