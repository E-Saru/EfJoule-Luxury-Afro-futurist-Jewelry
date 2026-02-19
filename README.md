# EfJoule — Luxury Afro-futurist Jewelry Platform

A production-ready, full-stack monorepo for EfJoule: a luxury jewelry e-commerce platform celebrating Afro-futurist design, heritage craftsmanship, and cutting-edge technology.

## Overview

EfJoule is built as a **modern monorepo** with a comprehensive tech stack designed for scalability, maintainability, and developer experience.

### Tech Stack

- **Monorepo**: [Turborepo](https://turbo.build) + [pnpm](https://pnpm.io) workspaces
- **Frontend**: [Next.js](https://nextjs.org) 14 (App Router) + [TypeScript](https://www.typescriptlang.org) + [Tailwind CSS](https://tailwindcss.com) + [Framer Motion](https://www.framer.com/motion) + [Three.js](https://threejs.org)
- **Backend**: [NestJS](https://nestjs.com) 10 + [Prisma](https://www.prisma.io) 5 ORM + [PostgreSQL](https://www.postgresql.org)
- **Containerization**: [Docker](https://www.docker.com) + [Docker Compose](https://docs.docker.com/compose)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Code Quality**: [ESLint](https://eslint.org) + [Prettier](https://prettier.io) + TypeScript Strict Mode

## Project Structure

```
EfJoule-Luxury-Afro-futurist-Jewelry/
├── apps/
│   ├── api/                          # NestJS backend
│   │   ├── src/
│   │   │   ├── main.ts              # NestJS bootstrap
│   │   │   ├── app.module.ts        # Root module
│   │   │   ├── prisma/              # Prisma service
│   │   │   └── modules/             # Feature modules
│   │   │       ├── auth/
│   │   │       ├── users/
│   │   │       ├── products/
│   │   │       ├── collections/
│   │   │       ├── orders/
│   │   │       └── custom-designs/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── web/                          # Next.js frontend
│       ├── app/                      # App Router pages
│       │   ├── layout.tsx
│       │   ├── page.tsx             # Home
│       │   ├── collections/page.tsx # Collections catalog
│       │   ├── product/[slug]/page.tsx # Product detail
│       │   ├── create-custom/page.tsx  # Custom design form
│       │   ├── account/page.tsx     # User account
│       │   └── checkout/page.tsx    # Checkout flow
│       ├── src/
│       │   ├── providers/           # React providers
│       │   └── styles/              # Tailwind & globals
│       ├── next.config.js
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   ├── config/                       # Shared config
│   │   ├── .eslintrc.cjs
│   │   ├── tsconfig.base.json
│   │   └── .prettierrc
│   │
│   ├── types/                        # Shared domain types
│   │   └── src/index.ts             # Types, interfaces, enums
│   │
│   └── ui/                           # Shared React components
│       ├── src/
│       │   ├── Button.tsx
│       │   ├── Header.tsx
│       │   ├── ThreeViewer.tsx      # 3D viewer with Three.js
│       │   └── index.tsx
│       └── package.json
│
├── prisma/
│   ├── schema.prisma                 # Database schema
│   └── migrations/                   # Database migrations
│
├── docker/
│   ├── Dockerfile.api                # NestJS container
│   ├── Dockerfile.web                # Next.js container
│   ├── docker-compose.dev.yml        # Local dev environment
│   ├── docker-compose.prod.yml       # Production environment
│   └── nginx.conf                    # Reverse proxy config
│
├── .github/
│   └── workflows/
│       └── ci.yml                    # GitHub Actions CI pipeline
│
├── .env.example                      # Environment variables template
├── .eslintrc.cjs                     # Root ESLint config
├── .prettierrc                       # Prettier config
├── CHANGELOG.md                      # Version history
├── package.json                      # Root package
├── pnpm-workspace.yaml               # pnpm workspaces config
├── turbo.json                        # Turborepo pipeline config
└── README.md                         # This file
```

## Getting Started

### Prerequisites

- **Node.js**: v20+ (managed by [nvm](https://github.com/nvm-sh/nvm) or similar)
- **pnpm**: v8+ (install via `npm install -g pnpm`)
- **Docker**: v24+ and Docker Compose v2+ (for containerized local dev)
- **PostgreSQL**: v14+ (via Docker Compose or local setup)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd EfJoule-Luxury-Afro-futurist-Jewelry
   ```

2. **Enable pnpm with corepack** (recommended):
   ```bash
   corepack enable
   corepack prepare pnpm@latest --activate
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database and API credentials
   ```

5. **Generate Prisma Client**:
   ```bash
   pnpm prisma generate
   ```

### Development

#### Local Dev (without Docker)

1. **Start PostgreSQL**:
   ```bash
   docker run --name efjoule-db -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres:15
   ```

2. **Run database migrations**:
   ```bash
   pnpm prisma migrate dev --name init
   ```

3. **Start dev servers** (in separate terminals or use `&`):
   ```bash
   # Backend
   cd apps/api
   pnpm dev

   # Frontend
   cd apps/web
   pnpm dev
   ```

   - Backend: http://localhost:3000
   - Frontend: http://localhost:3001

#### Local Dev (with Docker Compose)

```bash
docker-compose -f docker/docker-compose.dev.yml up
```

Services:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001
- **PostgreSQL**: `localhost:5432`

#### Common Commands

```bash
# Typecheck all packages
pnpm -w run typecheck

# Lint all packages
pnpm -w run lint

# Format code
pnpm -w run format

# Build all packages
pnpm -w run build

# Build specific package
pnpm -w --filter @efjoule/web build

# Run tests (when implemented)
pnpm -w run test

# Prisma operations
pnpm prisma studio          # Open Prisma Studio
pnpm prisma migrate dev     # Create migration
pnpm prisma validate        # Validate schema
```

## API Architecture

### NestJS Modules

The backend is organized by feature with the following modules:

- **AuthModule**: Login, JWT tokens, session management
- **UsersModule**: User CRUD, profile management
- **ProductsModule**: Product catalog, filtering, search
- **CollectionsModule**: Curated product collections
- **OrdersModule**: Orders, checkout, payment processing
- **CustomDesignsModule**: Custom design submissions

All modules integrate with PostgreSQL via **Prisma ORM** for type-safe data access.

### Database Schema

Key models:
- `User`: Customer profiles
- `Product`: Jewelry catalog with materials/gemstones
- `Collection`: Curated product groups
- `Order` & `OrderItem`: Purchase history
- `CustomDesign`: User-submitted design requests
- `Material`, `Gemstone`: Product component catalogs

See [prisma/schema.prisma](prisma/schema.prisma) for full schema definition.

## Frontend Architecture

### Pages

- **Home** (`/`): Hero, featured products, brand story
- **Collections** (`/collections`): Filtered product catalog
- **Product Detail** (`/product/[slug]`): Product page with 3D viewer (Three.js)
- **Custom Design** (`/create-custom`): Design submission form
- **Account** (`/account`): User profile and order history
- **Checkout** (`/checkout`): Cart review and payment

### Providers

Global state management via React Context (`src/providers/providers.tsx`):
- **CartProvider**: Shopping cart state
- **AuthProvider**: User authentication & session
- **ThemeProvider**: Light/dark mode theming

### Components

Shared UI components in `packages/ui/`:
- `Button`: CTA and form buttons
- `Header`: Navigation bar
- `ThreeViewer`: Interactive 3D viewer (client-only, with Suspense)

## Build & Deployment

### Build

```bash
# Build all packages
pnpm -w run build

# Output:
# - apps/web/.next/          # Next.js static export
# - apps/api/dist/           # NestJS compiled JS
# - packages/ui/dist/        # Component library
```

### Docker Deployment

#### Production Build

```bash
# Build images
docker-compose -f docker/docker-compose.prod.yml build

# Run services
docker-compose -f docker/docker-compose.prod.yml up -d
```

#### Multi-Stage Builds

- **web**: Node.js → pnpm install → `next build` → lightweight production image
- **api**: Node.js → compile TypeScript → lightweight production image

#### Reverse Proxy

Nginx routes requests:
- `/` → Next.js frontend
- `/api` → NestJS backend

See [docker/nginx.conf](docker/nginx.conf) for configuration.

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`):

1. **Install**: `pnpm install`
2. **Typecheck**: `pnpm typecheck` (all packages)
3. **Lint**: `pnpm lint` (ESLint)
4. **Build**: `pnpm build` (web & api)
5. **Validate**: `prisma validate` (database schema)

Automatically runs on:
- Push to main branch
- Pull requests

## Code Quality

### TypeScript Strict Mode

All code adheres to TypeScript strict mode:
- No `any` types
- Explicit return types
- Strict null checks

```bash
# Type checking
pnpm -w run typecheck
```

### ESLint & Prettier

- ESLint configuration in `packages/config/.eslintrc.cjs`
- Prettier formatting in `.prettierrc`
- Pre-commit hooks (recommended with Husky)

```bash
# Format code
pnpm -w run format

# Lint with warnings
pnpm -w run lint
```

## Environment Variables

Create `.env.local` (based on `.env.example`):

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/efjoule"

# API
API_PORT=3001
API_BASE_URL="http://localhost:3001"

# Frontend
NEXT_PUBLIC_API_BASE_URL="http://localhost:3001"

# JWT (when implemented)
JWT_SECRET="your-secret-key"
JWT_EXPIRATION="7d"
```

## Troubleshooting

### Build Errors

- **TypeScript errors**: Run `pnpm typecheck` for full output
- **Import resolution**: Check `tsconfig.json` path mappings
- **Prisma issues**: Run `pnpm prisma validate` to check schema

### Runtime Issues

- **Port conflicts**: Ensure 3000, 3001, 5432 are available
- **Database connection**: Verify `DATABASE_URL` in `.env.local`
- **Docker issues**: Run `docker-compose logs <service>` for error details

### Workspace Issues

- **pnpm install fails**: Delete `pnpm-lock.yaml` and reinstall
- **Turbo cache issues**: Run `turbo prune --docker --scope=@efjoule/web` to reset cache

## Testing (Future)

Testing framework recommendations (not yet implemented):
- **Unit Tests**: Jest (backend) + Vitest (frontend)
- **E2E Tests**: Playwright
- **API Tests**: Supertest

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make changes and commit: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

### Code Guidelines

- Follow TypeScript strict mode
- Use meaningful variable/function names
- Write descriptive commit messages
- Run `pnpm lint` and `pnpm typecheck` before pushing
- Update `CHANGELOG.md` with notable changes

## License

Proprietary © 2026 EfJoule. All rights reserved.

## Support

For issues, feature requests, or questions:
1. Check existing [GitHub Issues](https://github.com/efjoule/issues)
2. Create a new issue with detailed description
3. Contact the development team

---

**Status**: Production Ready v0.6.0  
**Last Updated**: February 19, 2026