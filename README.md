# KidsDaycare Website

A modern, responsive website for a home daycare provider, built with Next.js and Tailwind CSS.

## Project Structure

- **Phase 1:** Static Informational Site (Current)
- **Phase 2:** Dynamic Web Application (Planned)

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

## Building for Production

To create a static export of the site:

```bash
npm run build
```

The static assets will be generated in the `out` directory.

## Deployment

### GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

1. Push the code to a GitHub repository.
2. Go to **Settings > Pages** in your repository.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The workflow defined in `.github/workflows/deploy.yml` will automatically build and deploy the site on every push to the `main` branch.

## Features

- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop.
- **Modern Aesthetics:** Clean, friendly, and professional look using Tailwind CSS.
- **Fast Performance:** Static site generation for optimal speed and SEO.
- **Easy Navigation:** Intuitive menu and clear call-to-actions.
