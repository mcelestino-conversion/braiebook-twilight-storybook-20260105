# the twilight storybook

an interactive, atmospheric storybook web app inspired by the twilight zone, featuring eerie effects, animated transitions, and immersive storytelling experiences.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `public/` - Static assets

## Features

- ambient sound layer
- animated intro narration
- choice-based story navigation
- dark/noir aesthetic
- dynamic transitions
- random episode generator
- retro tv frame mode

## Architecture Decisions

- Performance: Using Next.js Image component, dynamic imports, and caching strategies

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com).

## Source of Truth

See `/dudex/canon.json` for the canonical build specification.
