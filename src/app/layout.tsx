import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jason Wang 王俊凱 — Full-Stack Engineer & AI Builder',
  description:
    'Jason Wang 王俊凱，全端工程師與 AI 開發者。擅長 Go、TypeScript、Python、Flutter，專精高併發後端、RAG 智慧問答、多雲架構部署。3~4 年經驗，電機 × 軟體跨域背景。',
  keywords: [
    'Jason Wang', '王俊凱', 'Full-Stack Engineer', 'AI Builder',
    'Go', 'Golang', 'TypeScript', 'Python', 'Flutter', 'React',
    'LangChain', 'RAG', 'AWS', 'GCP', 'Azure', 'Kubernetes', 'PostgreSQL',
  ],
  authors: [{ name: 'Jason Wang 王俊凱' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Jason Wang 王俊凱 — Full-Stack Engineer & AI Builder',
    description:
      '全端工程師與 AI 開發者。擅長 Go、TypeScript、Python、Flutter，專精高併發後端、RAG 智慧問答、多雲架構部署。',
    locale: 'zh_TW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Wang 王俊凱 — Full-Stack Engineer & AI Builder',
    description:
      '全端工程師與 AI 開發者。擅長 Go、TypeScript、Python、Flutter，專精高併發後端、RAG 智慧問答、多雲架構部署。',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Wang',
  alternateName: '王俊凱',
  jobTitle: 'Full-Stack Engineer & AI Builder',
  email: 'jason75395100@gmail.com',
  sameAs: ['https://github.com/JasonWang1124'],
  knowsAbout: ['Go', 'TypeScript', 'Python', 'Flutter', 'React', 'AWS', 'Kubernetes', 'LangChain', 'RAG', 'PostgreSQL'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: '國立高雄應用科技大學' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" dir="ltr" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
