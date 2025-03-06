import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/global.scss';
import Menu from '@/components/Menu';
import Layout from '@/components/core/Layout';

const geistSans = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Created by Human Intelligence :D',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-theme="theme1"
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Layout>
          {children}
          <Menu />
        </Layout>
      </body>
    </html>
  );
}
