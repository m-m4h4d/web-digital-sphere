# Web Digital Sphere

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This project uses the Next.js [App Router](https://nextjs.org/docs/app).

- `src/app/` – routes. Each folder with a `page.js` is a URL (`/`, `/about`, `/blogs`, `/blogs/[slug]`, `/career`, `/contact`, `/portfolio`, `/web-development/business-website`). `layout.js` wraps every page with the NavBar and Footer.
- `src/views/` – the page content rendered by each route.
- `src/components/` – shared UI sections (NavBar, Footer, carousels, FAQ, ...).
- `src/data/` – site content: contact details, blog posts, job openings, portfolio projects and the country list. The contact, blog, careers and portfolio files hold **placeholder content** to replace before launch.
- `src/assets/` – images and SVGs, exported from `src/assets/index.js`. SVGs are imported as React components via SVGR (see `next.config.mjs`).

## Forms

The Contact page and the "Get A Free Quote" modal submit through Server Actions in `src/lib/actions.js`, which validate the input and email it via [Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_TO_EMAIL` to receive submissions. Without them, submissions are printed to the terminal in development and rejected in production.

The quote form accepts a PDF up to 10MB. Note that Vercel limits serverless request bodies to 4.5MB, so larger PDFs will fail there.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to load Roboto, which is passed to MUI through the theme in `src/theme.js`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
