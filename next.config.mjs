/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // Batasi ukuran tubuh permintaan (request body) untuk mencegah serangan DoS
      bodySizeLimit: '1mb', 
      allowedOrigins: ['quicknet.id', 'www.quicknet.id'],
      // allowedOrigins: ['quicknet.id', 'www.quicknet.id'], 
    },
  },

  // Konfigurasi ini menambahkan header keamanan
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Content Security Policy (CSP)
          {  
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://www.google.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' blob: data: https://maps.gstatic.com https://maps.googleapis.com https://www.google.com;
              connect-src 'self' http://localhost:3000 https://quicknet.id https://maps.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              frame-src 'self' https://www.google.com https://www.google.co.id;
            `.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
