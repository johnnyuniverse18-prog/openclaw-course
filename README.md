# OpenClaw Academy Starter

A paid tutorial website starter built with Next.js, Clerk, Stripe, and markdown lesson pages.

## What is included

- Landing page
- Pricing page
- Login flow with Clerk
- Protected dashboard
- Stripe Checkout route
- Stripe webhook route
- Markdown lesson system
- Starter curriculum for an OpenClaw training product

## 1. Install dependencies

```bash
npm install
```

## 2. Create environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

You will need:

- Clerk publishable key
- Clerk secret key
- Stripe secret key
- Stripe webhook secret
- Stripe Price ID
- Public app URL

## 3. Set up Clerk

Create a Clerk app and enable the sign-in methods you want.

Set these values in `.env.local`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/login
```

## 4. Set up Stripe

Create a one-time price in Stripe and copy its price ID:

```bash
NEXT_PUBLIC_STRIPE_PRICE_ID=price_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

The checkout route uses one one-time payment plan by default.

## 5. Run locally

```bash
npm run dev
```

## 6. Stripe webhook for local testing

Use the Stripe CLI to forward events:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Then copy the webhook secret into `.env.local`.

## 7. Deploy on Vercel

- Push this project to GitHub
- Import the repo into Vercel
- Add the same environment variables in Vercel
- In Stripe, set your production webhook endpoint to:

```bash
https://your-domain.com/api/webhooks/stripe
```

## Access logic

After a successful Stripe checkout, the webhook updates the user's Clerk `publicMetadata.plan` to `pro`.

That metadata is used to:

- unlock the dashboard state
- unlock paid lessons
- keep the first lesson free for lead generation

## Content workflow

Add or edit lessons inside:

```bash
/content/courses
```

Each lesson uses frontmatter:

```md
---
title: "Lesson title"
excerpt: "Short summary"
order: 1
---
```

## Suggested next upgrades

- Add video embeds to lesson pages
- Create `/public/downloads` and link PDFs in the dashboard
- Add testimonials and FAQ sections on the homepage
- Add an email capture lead magnet
- Add a higher-tier plan with templates or coaching
# openclaw-course
# openclaw-course
