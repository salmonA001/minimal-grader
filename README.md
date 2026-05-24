# Grader Samsen

**Live site:** [https://salmonA001.github.io/minimal-grader/](https://salmonA001.github.io/minimal-grader/)

Online judge for Samsen School — classrooms, contests, and coding practice. UI inspired by Linear, Vercel, and Notion.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **Framer Motion** — page transitions
- **Zustand** — auth, theme, code drafts (persisted)
- **Monaco Editor** — code submission
- **shadcn-style UI** — Button, Card, Badge, Input
- **React Hook Form** + **Sonner**
- **Recharts** — admin analytics
- **Mock judge** — replace with Judge0 or Docker sandbox

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) locally, or use the [live demo](https://salmonA001.github.io/minimal-grader/).

- **Landing:** `/`
- **Student dashboard:** `/app` (or sign in at `/login`)
- **Teacher admin:** `/login` → “Demo as teacher” → `/admin`

## Project structure

```
src/
├── components/     # UI, CodeEditor, VerdictBadge
├── layouts/        # DashboardLayout (sidebar)
├── pages/          # Landing, auth, dashboard/*, admin/*
├── hooks/          # useContestTimer
├── lib/            # utils, mock-data
├── services/       # judge.ts (mock → Judge0/Docker)
├── store/          # useAppStore
├── types/          # User, Problem, Submission, Verdict, …
└── utils/          # verdict helpers
```

## Features (UI + mock data)

**Students:** classes, problems, Monaco submit, verdict/testcases, submissions, leaderboard, contest timer, profile/XP, dark mode, AI hints (mock).

**Teachers:** problem/testcase managers, user import/export, contest creator, analytics, anti-cheat placeholders.

## Backend (next steps)

1. **Auth:** Firebase or Supabase (`Users` table: id, name, email, role).
2. **Judge:** `services/judge.ts` → Judge0 API or Express + Redis queue + Docker workers.
3. **Realtime:** WebSocket for leaderboard/contest updates.

## Design tokens

- Background `#ffffff`, foreground `#111111`, border `#e5e7eb`
- Font: **JetBrains Mono** (site-wide)
