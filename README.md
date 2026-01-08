## Features

- 🚀 **Frontend Frameworks**: 
  - **React** (Base, Hooks, Next.js components)
  - **Vue 3** (Composition API, Vite)
  - **Svelte 4** (Vite setup)
- ⚙️ **Backend Frameworks**: 
  - **Express** (Structured routes, Middleware)
  - **Fastify** (App factory pattern)
  - **NestJS** (Modular architecture, Decorators)
- 💾 **Databases & ORMs**:
  - **PostgreSQL** & **MySQL** with **Prisma**, **Drizzle**, or **Sequelize**
  - **MongoDB** with **Mongoose** or native driver
- 🔐 **Authentication**: 
  - **Clerk** & **Privy** (Frontend)
  - **JWT** (Backend custom middleware)
- 🛠️ **Advanced Modules**:
  - **State Management**: Zustand, Redux Toolkit
  - **Routing**: React Router, Svelte Navigator
  - **API Clients**: TanStack Query, Axios, SWR
  - **UI Libraries**: shadcn/ui, daisyUI, Chakra UI
- 📦 **Package Managers**: npm, yarn, pnpm, bun
- 🎯 **TypeScript**: Full first-class support for all templates

## Quick Start

```bash
# Clone the repo
git clone https://github.com/your-repo/trix.git
cd trix

# Install and build
npm install
npm run build

# Link locally to test
npm link

# Use it!
trix my-awesome-project
```

## Usage

```bash
# Create a new project
trix my-app

# Or follow the prompts for a full custom setup
trix
```

## Examples

### The "Modern Pro" Stack
- **Command**: `trix my-pro-app`
- **Goal**: Full-stack React app with auth and database.
- **Selections**: Frontend → React → Tailwind → Clerk → shadcn → TanStack Query → React Router.

### The "Fast backend" Stack
- **Command**: `trix my-fast-api`
- **Goal**: Blazing fast API with type-safe database access.
- **Selections**: Backend → Node.js → Fastify → PostgreSQL → Prisma → JWT Auth.


## License

MIT

# Contributing to Trix

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Link for local testing:
   ```bash
   npm link
   ```

## Project Structure

- `src/core/` - Core CLI logic
- `src/prompts/` - User interaction prompts
- `src/templates/` - Project templates
- `src/generators/` - Code generation logic
- `src/installers/` - Package manager installers
- `src/utils/` - Utility functions
- `tests/` - Test files

## Running Tests

```bash
npm test
```

## Submitting Changes

1. Create a feature branch
2. Make your changes
3. Add tests
4. Update documentation
5. Submit a pull request
