# Astro + WordPress Blog (React)

This is a minimal Astro project wired up with the official React integration and a global design token system shared between Astro and React.

## Prerequisites

- Node.js 18+
- A local WordPress site (e.g., Flywheel Local) with the REST API enabled

## Setup

```bash
npm install
```

Create a `.env` file and set the WordPress base URL:

```bash
cp .env.example .env
```

```bash
WORDPRESS_BASE_URL=http://my-site.local
```

Start the dev server:

```bash
npm run dev
```

## Verify WordPress REST API

Ensure the REST API is reachable:

```bash
curl "$WORDPRESS_BASE_URL/wp-json/wp/v2/posts?per_page=1"
```

## Routes

- `/` - landing page
- `/blog` - list of posts
- `/blog/[slug]` - single post detail

## Notes

- If `WORDPRESS_BASE_URL` is missing or unreachable, the blog routes will show a friendly message.
- Posts are rendered using Astro’s HTML rendering via `set:html`.
