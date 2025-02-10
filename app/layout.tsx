import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ensemble Pour Demain - Association Caritative',
  description: 'Ensemble Pour Demain est une association caritative dédiée à la construction d\'un avenir meilleur pour tous à travers des projets humanitaires et sociaux.',
  keywords: 'association caritative, aide humanitaire, dons, bénévolat, projets sociaux',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}