// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // ⭐ required for static hosting
  images: {
    unoptimized: true, // ⭐ disables Next Image optimization (S3 safe)
  },
  trailingSlash: true, // ⭐ S3 friendly URLs
};

export default nextConfig;
