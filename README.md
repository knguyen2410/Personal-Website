# Khoa Nguyen Homepage

Personal homepage for Research Engineer applications, built with Vite, React, and TypeScript.

## Edit Profile Content

Most public-facing content lives in `src/content/profile.ts`.

Before sharing the site broadly:

- Keep project, research, experience, education, and skill entries current in `src/content/profile.ts`.
- Replace `public/resume.pdf` when the CV changes.
- Update profile links for GitHub, LinkedIn, or any additional profiles.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This repo is intended to be published with GitHub Pages at `https://knguyen2410.github.io/Personal-Website/`. The included workflow deploys the built `dist` directory through GitHub Pages when changes land on `main`.
