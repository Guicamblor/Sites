import type { NextConfig } from 'next';

// No GitHub Pages o site fica em /nome-do-repositorio; o workflow preenche BASE_PATH.
const basePath = process.env.BASE_PATH || '';

const nextConfig: NextConfig = {
  // Gera um site estático na pasta "out", que pode ser hospedado em qualquer lugar.
  output: 'export',
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true }
};

export default nextConfig;
