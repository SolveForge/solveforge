import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollProvider from '@/components/ScrollProvider'

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

export const metadata: Metadata = {
  title: "SolveForge - AI-Powered Fitness",
  description: "Transform your fitness journey with AI-powered personalized workouts and nutrition guidance.",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml", sizes: "32x32" }],
    shortcut: ["/logo.svg"],
    apple: [{ url: "/logo.svg", sizes: "32x32" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  )
}
