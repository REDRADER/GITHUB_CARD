const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '', // No port needed if it's standard HTTPS
          pathname: '/**', // Wildcard to allow all paths
        },
      ],
    },
   
  };
  
  export default nextConfig;