import type { NextConfig } from 'next';
import path from 'path';
// import ungpluginIcons from 'unplugin-icons/webpack';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `
    	@use 'mixins';
			@use 'utils' as *;
    	@use 'scss-variables' as *;
    `,
  },
  // reactStrictMode: true,
  // webpack(config) {
  //   config.plugins.push(
  //     ungpluginIcons({
  //       compiler: 'jsx',
  //       jsx: 'react',
  //       autoInstall: true,
  //     })
  //   );
  //   return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
};

export default nextConfig;
