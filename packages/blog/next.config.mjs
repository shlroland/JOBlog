/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("@roland/env"))

/** @type {import("next").NextConfig} */
const config = {
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@roland/server",
    "@roland/auth",
    "@roland/db",
    "@roland/utils",
  ],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
      },
    ],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    })
    return config
  },
}

export default config
