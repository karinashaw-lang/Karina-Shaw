import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Video uploads go straight through a Server Action for now (dev-only
      // local disk storage, see src/lib/video-storage.ts). Real blob storage
      // would move this to signed direct-to-storage uploads instead.
      bodySizeLimit: "300mb",
    },
  },
};

export default nextConfig;
