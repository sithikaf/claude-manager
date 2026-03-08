# Contributing to Claude Manager

Thanks for your interest in contributing! This is a solo-maintainer project, so here's how things work.

## Reporting Issues

### Bug Reports

- Use the [bug report template](https://github.com/sithikaf/claude-manager/issues/new?template=bug_report.md)
- Include steps to reproduce, expected vs actual behavior, and your environment (OS, Node.js version, browser)
- Screenshots are welcome

### Feature Requests

- Use the [feature request template](https://github.com/sithikaf/claude-manager/issues/new?template=feature_request.md)
- Describe the problem you're trying to solve, not just the solution you want

## Pull Requests

PRs are reviewed by the maintainer. Before submitting:

1. Open an issue first to discuss the change
2. Fork the repo and create a branch from `main`
3. Follow the existing code style and conventions
4. Test your changes locally
5. Keep PRs focused -- one feature or fix per PR

## Development Setup

```bash
git clone https://github.com/YOUR_USERNAME/claude-manager.git
cd claude-manager
npm install
cp .env.example .env
docker compose up -d
npx prisma db push
npm run dev
```

## Code Style

- TypeScript throughout
- Functional React components with hooks
- tRPC for API routes (no REST endpoints)
- Prisma for database access
- Tailwind CSS for styling (no CSS modules or styled-components)
- shadcn/ui components where applicable

## Questions?

Open a [discussion](https://github.com/sithikaf/claude-manager/discussions) or file an issue.
