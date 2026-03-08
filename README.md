# Claude Manager

A web dashboard for managing [Claude Code](https://docs.anthropic.com/en/docs/claude-code) agents, skills, commands, and plugins across multiple accounts.

Built with the [T3 Stack](https://create.t3.gg/) -- Next.js 15, tRPC, Prisma, Tailwind CSS, and shadcn/ui.

<!-- ![Claude Manager Screenshot](screenshot.png) -->

## Features

- **Multi-account management** -- Manage Claude Code configurations across multiple accounts from a single dashboard
- **Agent management** -- View, create, and edit custom agents with model selection, tools, and descriptions
- **Skills browser** -- Browse and manage skills installed per account, including plugin-provided skills
- **Command management** -- Organize slash commands at the account and project level
- **MCP server management** -- Discover and view MCP servers configured at the account level and provided by plugins (stdio and http types)
- **Plugin system** -- View installed plugins and their contributed agents, skills, and commands
- **Auto-scanning** -- Automatically scans your Claude Code directories to discover and sync configurations
- **Deploy view** -- Overview of your deployment setup

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **API:** [tRPC](https://trpc.io/) with [React Query](https://tanstack.com/query)
- **Database:** [SQLite](https://www.sqlite.org/) (default) or [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Language:** TypeScript

## Prerequisites

- [Node.js](https://nodejs.org/) 18+

## Quick Start

```bash
git clone https://github.com/sithikaf/claude-manager.git
cd claude-manager
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) -- on first run, a setup wizard will guide you through database configuration.

### Default: SQLite (zero config)

The app uses SQLite by default. No database setup required -- just install and run.

### Optional: PostgreSQL

For production use, you can switch to PostgreSQL through the setup wizard or manually:

#### Via setup wizard

Select "PostgreSQL" on first run and enter your connection string.

#### Via manual configuration

1. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Update `DATABASE_URL` in `.env`:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/claude-manager"
   ```

3. Update `prisma/schema.prisma` -- change `provider = "sqlite"` to `provider = "postgresql"`

4. Push the schema and regenerate the client:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

#### Docker Compose (PostgreSQL)

```bash
docker compose up -d
cp .env.example .env
# Update .env with: DATABASE_URL="postgresql://postgres:password@localhost:5432/claude-manager"
# Update prisma/schema.prisma provider to "postgresql"
npx prisma generate && npx prisma db push
npm run dev
```

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | Database connection string | `file:./data/claude-manager.db` (SQLite) |

The environment schema is validated at build time via `src/env.js`. See that file for details.

## Project Structure

```
claude-manager/
├── prisma/
│   └── schema.prisma        # Database schema
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── agents/           # Agent management
│   │   ├── commands/         # Command management
│   │   ├── deploy/           # Deployment view
│   │   ├── mcp-servers/      # MCP server management
│   │   ├── plugins/          # Plugin browser
│   │   └── skills/           # Skills browser
│   ├── components/           # React components
│   ├── lib/                  # Utilities and scanner logic
│   ├── server/               # tRPC server, routers, db client
│   └── trpc/                 # tRPC client setup
├── docker-compose.yml        # PostgreSQL for local dev
├── start-database.sh         # Alternative DB setup script
└── package.json
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run preview` | Build and start (preview production) |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma db push` | Push schema changes to database |
| `npx prisma migrate dev` | Create and apply migrations |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE)
