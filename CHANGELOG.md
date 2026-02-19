## [0.1.0] - 2026-02-19
### Added
- Initial monorepo foundation scaffolding: root package.json, turbo.json
- Shared config package (`packages/config`) with ESLint, Prettier, and base TS config
- Shared types package (`packages/types`) with domain interfaces and enums

### Changed
- N/A

### Fixed
- N/A

### Removed
- N/A

## [0.2.0] - 2026-02-19
### Added
- Prisma schema (`prisma/schema.prisma`) with models: User, Product, Collection, Order, CustomDesign, Material, Gemstone, join models and enums
- `.env.example` with required environment variables (no secrets)

### Changed
- N/A

### Fixed
- N/A

### Removed
- N/A

## [0.3.0] - 2026-02-19
### Added
- Scaffolding for NestJS backend at `apps/api`: bootstrap, Prisma service, and modules: auth, users, products, collections, orders, custom-designs
- Controllers, services, DTOs, and simple typed mock implementations for each module
- `apps/api/package.json` and `apps/api/tsconfig.json`

### Changed
- N/A

### Fixed
- N/A

### Removed
- N/A

## [0.3.1] - 2026-02-19
### Added
- Prisma integration in backend services: `UsersService`, `ProductsService`, `CollectionsService`, `OrdersService`, `CustomDesignsService` now use `PrismaService` and map results to shared types
- `apps/api` scripts: `prisma:generate`, `prisma:migrate:dev`, and `prepare`
- `docker/Dockerfile.api` multi-stage build for API

### Changed
- Replaced mock service data with Prisma-backed implementations where appropriate

### Fixed
- N/A

### Removed
- N/A

## [0.4.0] - 2026-02-19
### Added
- Frontend scaffold `apps/web` (Next.js App Router) with Tailwind, providers, and pages: home, collections, product, create-custom, account, checkout
- `packages/ui` shared component library with `Button`, `Header`, and `ThreeViewer` (Three.js viewer, lazy-loaded client-side)
- Providers at `apps/web/src/providers/providers.tsx`: `CartProvider`, `AuthProvider`, `ThemeProvider` with strict TypeScript interfaces

### Changed
- N/A

### Fixed
- N/A

### Removed
- N/A

## [0.5.0] - 2026-02-19
### Added
- `docker/docker-compose.dev.yml` for local development: `web`, `api`, and `postgres` with named volumes and hot-reload mounts
- `docker/docker-compose.prod.yml` for production with `nginx` reverse proxy and production volumes
- `docker/Dockerfile.web` multi-stage build for Next.js web app
- `docker/nginx.conf` reverse proxy configuration mapping `/` → `web` and `/api` → `api`
- GitHub Actions CI workflow at `.github/workflows/ci.yml` implementing install, typecheck, lint, build (web & api), and `prisma validate`

### Changed
- N/A

### Fixed
- N/A

### Removed
- N/A

## [0.6.0] - 2026-02-19
### Added
- Phase 6 verification & fixes: workspace-wide typecheck, lint, and build validation
- All verification commands passing: `pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm build`, `prisma validate`

### Changed
- Fixed ProductCategory enum usage in mock product data (`app/page.tsx`, `app/collections/page.tsx`, `app/product/[slug]/page.tsx`)
- Added `'use client'` directive to `packages/ui/src/ThreeViewer.tsx` for Next.js client-side rendering
- Fixed CSS import path in `apps/web/app/layout.tsx` to point to `../styles/globals.css`
- Removed deprecated `experimental.appDir: true` from `apps/web/next.config.js` (default in Next.js 14)
- Updated `apps/web/tsconfig.json` path mappings to resolve `@efjoule/*` packages

### Fixed
- TypeScript enum type mismatches in frontend mock data
- Next.js build errors (missing CSS, unresolved component directives, deprecated config)
- Prisma schema validation (all relations valid)

### Removed
- N/A
