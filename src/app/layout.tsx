import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discussion Board',
  description: 'To discuss random topics and stuffs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <SessionProvider>
            <NextUIProvider>
              <Header />
              {children}
            </NextUIProvider>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
