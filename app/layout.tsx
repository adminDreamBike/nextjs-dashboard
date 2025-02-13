import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

export const metadata: Metadata = {
  title: {
    template: '% | Acme Dashboard',
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js Course Dasboard, built with App router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
