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
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Language:** TypeScript

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [PostgreSQL](https://www.postgresql.org/) (or [Docker](https://www.docker.com/) to run it)

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/sithikaf/claude-manager.git
cd claude-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the database

You have three options for running PostgreSQL:

#### Option A: Docker Compose (recommended)

```bash
docker compose up -d
```

This starts a PostgreSQL 16 container on port 5432 with the default credentials from `.env.example`.

#### Option B: Use the included script

```bash
cp .env.example .env
./start-database.sh
```

The script will start a PostgreSQL container using Docker or Podman, and optionally generate a random password for you.

#### Option C: Use your own PostgreSQL instance

If you already have PostgreSQL running (locally or hosted), just update the `DATABASE_URL` in your `.env` file:

```bash
cp .env.example .env
# Edit .env with your connection string:
# DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/claude-manager"
```

This works with any PostgreSQL provider -- local installs, cloud-hosted databases (Supabase, Neon, Railway, etc.), or remote servers.

### 4. Configure environment

If you haven't already:

```bash
cp .env.example .env
```

Edit `.env` and update `DATABASE_URL` if your database credentials differ from the defaults.

### 5. Push the database schema

```bash
npx prisma db push
```

### 6. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:password@localhost:5432/claude-manager` |

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
