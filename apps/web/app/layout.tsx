import { Toaster } from 'react-hot-toast';
import { headers } from 'next/headers';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/global.css';
import Providers from './providers';
import { useMeQuery } from '@aafiyah/graphql';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@aafiyah/client';
import { Header, defaultMetadata } from '@aafiyah/ui';

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
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(
    useMeQuery.getKey(),
    useMeQuery.fetcher({}, { cookie: headersInstance.get('cookie') || '' })
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Hydrate state={dehydratedState}>
            <Header />
            {children}
            <Toaster />
          </Hydrate>
        </Providers>
      </body>
    </html>
  );
}
