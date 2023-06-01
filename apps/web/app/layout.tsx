import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import {  defaultMetadata } from 'ui';
import '../styles/global.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
