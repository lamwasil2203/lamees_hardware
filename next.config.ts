import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*.mp4",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Content-Type", value: "video/mp4" },
        ],
      },
    ];
  },
};

export default nextConfig;
