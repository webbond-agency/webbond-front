import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WebBond',
    short_name: 'WebBond',
    description: 'IT Agency WebBond',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#254f43',
    icons: [
      {
        src: '/icon', // будет рендериться через app/icon.tsx
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/apple-icon', // рендерится через app/apple-icon.tsx
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
