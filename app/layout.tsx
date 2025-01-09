'use client';

import localFont from "next/font/local";
import "./globals.css";
import ScrollProvider from '@/components/ScrollProvider'
import LoadingScreen from '@/components/LoadingScreen';
import { UserProvider } from '@/contexts/UserContext';
import { Toaster } from 'sonner';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LoadingScreen />
        <ScrollProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ScrollProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
