import { appConfig } from '@/app.config';
import { NotoSansJP } from '@/components/font/fonts';
import { cn } from '@/lib/utils';
import { ResultStateProvider } from '@/providers/result-state';
import { TouchStateProvider } from '@/providers/touch-state';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  description: '『ジョジョの奇妙な冒険』モチーフにした、タイピングゲーム',
  title: {
    template: `%s | ${appConfig.title}`,
    default: appConfig.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ja'>
      <TouchStateProvider>
        <ResultStateProvider>
          <body className={cn(NotoSansJP.className, 'h-dvh')}>{children}</body>
        </ResultStateProvider>
      </TouchStateProvider>
    </html>
  );
}
