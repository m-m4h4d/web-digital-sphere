/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // Room for the 10MB PDF the quote form accepts, plus the other fields.
      bodySizeLimit: "11mb",
    },
  },
  // Import .svg files as React components (e.g. <SEO height={60} />).
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));
    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      use: [
        {
          loader: "@svgr/webpack",
          // Keep viewBox so icons scale when given only a height.
          options: { svgoConfig: { plugins: [{ name: "preset-default", params: { overrides: { removeViewBox: false } } }] } },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
