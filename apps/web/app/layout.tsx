import { Toaster } from 'react-hot-toast';
import { headers } from 'next/headers';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header, defaultMetadata } from 'ui';
import '../styles/global.css';
import Providers from './providers';
import getQueryClient from './utils/getQueryClient';
import { useProfileQuery } from '@aafiyah/graphql';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersInstance = headers();
  await getQueryClient().prefetchQuery(
    useProfileQuery.getKey(),
    useProfileQuery.fetcher({}, { cookie: headersInstance.get('cookie') || '' })
  );
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
