import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-slot',
      'framer-motion',
    ],
  },
  images: {
    minimumCacheTTL: 31536000,
    imageSizes: [
      16, 32, 48, 64, 96, 128, 256, 330, 384, 392, 408, 470, 578, 600,
    ],
    qualities: [40, 60, 70, 75, 80, 90, 100],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nashkiev.ua',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Скрываем информацию о сервере
          {
            key: 'Server',
            value: '',
          },
        ],
      },
      // {
      //   source: '/sw.js',
      //   headers: [
      //     {
      //       key: 'Content-Type',
      //       value: 'application/javascript; charset=utf-8',
      //     },
      //     {
      //       key: 'Cache-Control',
      //       value: 'no-cache, no-store, must-revalidate',
      //     },
      //     {
      //       key: 'Content-Security-Policy',
      //       value: "default-src 'self'; script-src 'self'",
      //     },
      //   ],
      // },
      {
        // Для статических изображений только Cache-Control
        source: '/:all*(svg|jpg|jpeg|png|webp)',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Для оптимизированных изображений Next.js только Cache-Control
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
