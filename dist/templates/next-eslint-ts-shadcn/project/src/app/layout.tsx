import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: '{{name}}',
  description: 'Generated by gonzapp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className='min-h-screen bg-background antialiased' lang='en'>
      <body>
        <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
          <main className='flex min-h-screen flex-col items-center justify-center'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
