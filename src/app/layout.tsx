import Menu from '@/components/Menu';
import Layout from '@/components/core/Layout';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Contactly',
  description: 'Just another demo application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <Layout>
          {children}
          <Menu />
        </Layout>
      </body>
    </html>
  );
}
