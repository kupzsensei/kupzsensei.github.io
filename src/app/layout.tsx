import type { Metadata } from 'next';
import { Orbitron, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import BootProvider from '@/components/providers/BootProvider';
import ReducedMotionProvider from '@/components/providers/ReducedMotionProvider';
import {
  Navigation,
  ScrollProgress,
  CustomCursor,
  NoiseOverlay,
  ScanLines,
  GridBackground,
} from '@/components/layout';

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PORTFOLIO // Cyberpunk Developer',
  description:
    'Full-stack software engineer portfolio — built with neon, noise, and neural precision.',
  keywords: ['software engineer', 'portfolio', 'developer', 'full-stack'],
  openGraph: {
    title: 'PORTFOLIO // Cyberpunk Developer',
    description: 'Full-stack software engineer portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${jetbrainsMono.variable}`}>
      <body className="font-mono bg-base text-foreground antialiased cursor-none md:cursor-none">
        <ReducedMotionProvider>
          <BootProvider>
            <a href="#main-content" className="skip-to-content">
              Skip to content
            </a>
            <GridBackground />
            <Navigation />
            <CustomCursor />
            <main id="main-content">{children}</main>
            <ScrollProgress />
            <ScanLines />
            <NoiseOverlay />
          </BootProvider>
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
