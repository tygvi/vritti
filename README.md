# Vritti — वृत्ति

**Scholarships, matched to you.**

Vritti is a scholarship search engine for Indian students. Discover central,
state and private scholarships, filter by what you actually qualify for, and
keep every deadline in one place.

## Status

Early: the landing page and scholarship explorer are built and functional.
The waitlist form is front-end only and needs a real endpoint before launch.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel (planned)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | Lint with ESLint |

## Project structure

```
src/
  app/
    layout.tsx      # metadata, fonts, global shell
    page.tsx        # landing page
    globals.css     # Tailwind theme tokens (sand, ink, saffron, teal)
  components/
    ScholarshipExplorer.tsx  # client-side search + filter over mock data
    WaitlistForm.tsx         # email capture (front-end only for now)
  lib/
    scholarships.ts          # mock scholarship data
```

## Roadmap

- [ ] Wire the waitlist to a real endpoint
- [ ] Replace mock listings with verified scholarship data
- [ ] Profile onboarding (course, category, income, state)
- [ ] Deadline reminders
- [ ] Application checklist per scholarship

## Naming

*Vritti* (वृत्ति) is the Hindi/Sanskrit word for a stipend or scholarship.
