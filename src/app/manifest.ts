import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Contactly',
    short_name: 'Contactly',
    description: 'Just another demo application',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#0c53c1',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
