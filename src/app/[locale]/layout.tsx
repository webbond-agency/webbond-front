import type { Metadata } from 'next';
import { Montserrat, Inter, Manrope } from 'next/font/google';
import './globals.css';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { FramerMotionProvider } from '@/components/ui/framer-motion-provider';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import ScrollProvider from '@/utils/scrollProvider';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
    : undefined,
  title: {
    default: 'WebBond — Digital Agency in Copenhagen',
    template: '%s | WebBond',
  },
  description:
    'WebBond is your partner in digital growth. We create high-performance websites, SEO strategies, and brand identities that convert visitors into customers.',
  generator: 'Next.js',
  applicationName: 'WebBond — Digital Agency',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'web development',
    'web bond',
    'digital agency copenhagen',
    'website design',
    'SEO optimization',
    'branding',
    'custom software',
    'marketing strategy',
    'landing pages',
    'ecommerce solutions',
  ],
  authors: [
    {
      name: 'WebBond',
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
  ],
  creator: 'WebBond',
  publisher: 'WebBond',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'WebBond — Digital Agency in Copenhagen',
    description:
      'We combine creativity, code, and strategy to make your business stronger and more successful. High-speed websites and professional SEO.',
    images: [
      {
        url: process.env.NEXT_PUBLIC_BASE_URL
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/Opengraph.webp`
          : '/Opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'WebBond — Digital Agency',
      },
    ],
    type: 'website',
    siteName: 'WebBond',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    apple: '/apple-icon',
    icon: '/icon',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link
          rel="preload"
          as="fetch"
          href="https://prod.spline.design/S6FngPEV2SNfSBPp/scene.splinecode"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        <ScrollProvider />
        <NextIntlClientProvider>
          <FramerMotionProvider>
            <Header />
            <main className="overflow-x-clip">{children}</main>
            <Footer />
          </FramerMotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
