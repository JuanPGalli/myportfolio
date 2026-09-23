# Juan Pablo Galli — Portfolio

**Live site:** [juanpablogalli.com](https://juanpablogalli.com/)

<img src="https://juanpablogalli.com/Logo.png" alt="Juan Pablo Galli logo" width="110">

Personal portfolio of **Juan Pablo Galli**, Full Stack Developer (React · Node.js · Express · PostgreSQL) and Certified Public Accountant transitioning from 16+ years in banking, auditing and corporate finance into FinTech-focused software development.

Built as a single-page React app, fully responsive and available in **English, Spanish and Portuguese**.

## Features

- **EN / ES / PT-BR language switcher** — each language represented by a country flag (USA, Argentina, Brazil) instead of generic icons, backed by a `LanguageContext` + `react-scroll` for anchored navigation with active-link highlighting.
- **Animated hero headline** — custom `useTypingText` hook (no external typing library) that respects `prefers-reduced-motion`.
- **Projects carousel** — built with `react-slick`, showcasing live deployed projects with tech stack and live-demo links.
- **Contact form** — native HTML validation, submits to [Getform](https://getform.io/) via `REACT_APP_GET_FORM_IO`.
- **WhatsApp CTA** — floating button with a pre-filled, localized message per language.
- **Social sidebar** — LinkedIn, GitHub and downloadable résumé (PDF).
- **Accessibility** — visible focus states, `aria-label`s on icon-only controls, reduced-motion support.
- **Analytics** — Google Analytics (GA4) via `gtag.js`.

## Tech Stack

| Layer | Tools |
|---|---|
| Core | React 18, Create React App (`react-scripts`) |
| Styling | Tailwind CSS |
| Routing/Scroll | `react-scroll` |
| Carousel | `react-slick` / `slick-carousel` |
| Icons & Flags | `react-icons`, `country-flag-icons` |
| Forms | Getform (no backend needed) |
| Deploy | Vercel |
| Analytics | Google Analytics 4 |

## Getting Started

```bash
git clone https://github.com/JuanPGalli/myportfolio.git
cd myportfolio
npm install
```

Create a `.env` file in the project root (never committed — see `.gitignore`):

```bash
REACT_APP_LINKEDIN_PROFILE=https://www.linkedin.com/in/juan-pablo-galli-rodriguez
REACT_APP_GITHUB_PROFILE=https://github.com/JuanPGalli
REACT_APP_GET_FORM_IO=https://getform.io/f/your-form-id
# optional — defaults to the number set in WhatsAppButton.jsx
REACT_APP_WHATSAPP_NUMBER=5521995282826
```

Run it locally:

```bash
npm start        # http://localhost:3000
npm run build     # production build in /build
```

## Project Structure

```
src/
├── assets/            # images, icons, résumé PDF
├── components/        # Navbar, Home, About, Skills, Work, Contact, Footer, ...
├── context/            # LanguageContext.jsx + translations.js (i18n dictionary)
├── hooks/               # useTypingText
└── App.js
```

## SEO

The `public/` folder ships a `robots.txt` and `sitemap.xml`. If you deploy this under your own domain, update every URL in `sitemap.xml` and the `og:*` / canonical tags in `public/index.html` to match, then resubmit the sitemap in [Google Search Console](https://search.google.com/search-console).

## License

Personal project — feel free to fork it for inspiration, but please don't reuse the content or résumé as your own.

## Contact

Juan Pablo Galli — [LinkedIn](https://www.linkedin.com/in/juan-pablo-galli-rodriguez) · [GitHub](https://github.com/JuanPGalli)
