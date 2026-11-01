import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Gera um site estático na pasta "out", que pode ser hospedado em qualquer lugar.
  output: 'export',
  images: { unoptimized: true }
};

export default nextConfig;
