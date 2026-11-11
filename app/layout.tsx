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
  title: 'Aryan Mohan — AI Engineer | Generative AI, LLM Agents & RAG',
  description:
    'AI Engineer building production generative AI applications, LLM agents and RAG architectures on Google Cloud (Gemini on Vertex AI, Vertex AI Vector Search, LangChain, Cloud Run).',
  authors: [{ name: 'Aryan Mohan' }],
  keywords: [
    'AI Engineer',
    'Generative AI',
    'LLM Agents',
    'RAG',
    'Gemini',
    'Vertex AI',
    'Google Cloud',
    'LangChain',
    'LangGraph',
    'Multi-Agent Workflows',
    'LLM-as-a-Judge',
    'Next.js',
    'Python',
  ],
  openGraph: {
    title: 'Aryan Mohan — AI Engineer | Generative AI, LLM Agents & RAG',
    description:
      'Production generative AI, LLM agents and RAG on Google Cloud: Gemini on Vertex AI, Vector Search, Cloud Run.',
    url: 'https://aryanmohan5.github.io/aryanmohan/',
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
