import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import Loading from './rashi/[name]/loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sobhagya',
  description: 'Your trusted astrology consultation platform',
  icons:{
    icon: '/image 1.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<Loading />}>
          <main>
            {children}
          </main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
