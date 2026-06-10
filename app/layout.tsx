import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ScrollProvider } from '@/components/providers/ScrollProvider';
import ScrollCanvas from '@/components/background/ScrollCanvas';
import Nav from '@/components/ui/Nav';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Aryan Mohan — Applied AI Engineer',
  description:
    'Applied AI Engineer specializing in LLM orchestration, scalable data pipelines, and constraint-based prompting.',
  authors: [{ name: 'Aryan Mohan' }],
  keywords: [
    'Applied AI Engineer',
    'LLM',
    'RAG',
    'Generative AI',
    'PyTorch',
    'Python',
    'Data Engineering',
  ],
  openGraph: {
    title: 'Aryan Mohan — Applied AI Engineer',
    description:
      'LLM orchestration, scalable data pipelines, constraint-based prompting.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body>
        <ScrollProvider>
          {/*
            Background stack — uses positive z-index so it always renders
            above <html>'s background and behind <main>.
              z-0  → ScrollCanvas (animated motifs)
              z-[1] → bg-grid (subtle dotted lattice)
              z-10  → Nav (sticky top bar)
              z-20  → main content
          */}
          <ScrollCanvas />
          <div
            aria-hidden
            className="bg-grid pointer-events-none fixed inset-0 z-[1]"
          />
          <Nav />
          <main className="relative z-20">{children}</main>
        </ScrollProvider>
      </body>
    </html>
  );
}
