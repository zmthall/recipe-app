# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

```
recipe-app
├─ README.md
├─ app
│  ├─ app.vue
│  ├─ composables
│  │  └─ recipes.ts
│  ├─ layouts
│  │  └─ default.vue
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ login.vue
│  │  │  └─ register.vue
│  │  ├─ index.vue
│  │  └─ recipes
│  │     ├─ [...slug].vue
│  │     ├─ import.vue
│  │     └─ index.vue
│  └─ stores
│     ├─ authStore.ts
│     └─ uiStore.ts
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ robots.txt
├─ server
│  ├─ api
│  │  └─ scape.ts
│  └─ tsconfig.json
├─ tailwind.config.js
└─ tsconfig.json

```
```
recipe-app
├─ README.md
├─ app
│  ├─ app.vue
│  ├─ composables
│  │  └─ recipes.ts
│  ├─ layouts
│  │  └─ default.vue
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ login.vue
│  │  │  └─ register.vue
│  │  ├─ index.vue
│  │  └─ recipes
│  │     ├─ [...slug].vue
│  │     ├─ import.vue
│  │     └─ index.vue
│  └─ stores
│     ├─ authStore.ts
│     └─ uiStore.ts
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ robots.txt
├─ server
│  ├─ api
│  │  └─ scrape.ts
│  └─ tsconfig.json
├─ tailwind.config.js
└─ tsconfig.json

```
```
recipe-app
├─ README.md
├─ app
│  ├─ app.vue
│  ├─ composables
│  │  └─ recipes.ts
│  ├─ layouts
│  │  └─ default.vue
│  ├─ models
│  │  └─ types.ts
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ login.vue
│  │  │  └─ register.vue
│  │  ├─ index.vue
│  │  └─ recipes
│  │     ├─ [...slug].vue
│  │     ├─ import.vue
│  │     └─ index.vue
│  └─ stores
│     ├─ authStore.ts
│     └─ uiStore.ts
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ robots.txt
├─ server
│  ├─ api
│  │  └─ scrape-json-ld.ts
│  └─ tsconfig.json
├─ tailwind.config.js
└─ tsconfig.json

```
```
recipe-app
├─ README.md
├─ app
│  ├─ app.vue
│  ├─ components
│  │  ├─ auth
│  │  │  └─ background.vue
│  │  └─ ui
│  │     ├─ TheFooter.vue
│  │     └─ TheHeader.vue
│  ├─ composables
│  │  ├─ firebaseAuth.ts
│  │  ├─ firebaseDb.ts
│  │  └─ recipes.ts
│  ├─ layouts
│  │  ├─ auth.vue
│  │  └─ default.vue
│  ├─ middleware
│  │  └─ restricted.ts
│  ├─ models
│  │  └─ types
│  │     ├─ cookbook.ts
│  │     ├─ header.ts
│  │     ├─ index.ts
│  │     ├─ recipe.ts
│  │     └─ user.ts
│  ├─ pages
│  │  ├─ about.vue
│  │  ├─ contact.vue
│  │  ├─ cook-books
│  │  │  ├─ [...slug].vue
│  │  │  └─ index.vue
│  │  ├─ dashboard.vue
│  │  ├─ grocery-list
│  │  │  └─ index.vue
│  │  ├─ index.vue
│  │  ├─ login.vue
│  │  ├─ meal-planner
│  │  │  └─ index.vue
│  │  ├─ policy
│  │  │  ├─ accessibility.vue
│  │  │  ├─ privacy.vue
│  │  │  ├─ terms.vue
│  │  │  └─ usage.vue
│  │  ├─ recipes
│  │  │  ├─ [...slug].vue
│  │  │  ├─ import.vue
│  │  │  └─ index.vue
│  │  └─ register.vue
│  ├─ plugins
│  │  └─ auth.client.ts
│  └─ stores
│     ├─ authStore.ts
│     └─ uiStore.ts
├─ nuxt.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  ├─ auth-page.jpg
│  │  ├─ favicon.png
│  │  ├─ food-and-tech.jpg
│  │  ├─ food-table.jpg
│  │  ├─ login-logo.png
│  │  ├─ logo.png
│  │  └─ register-logo.png
│  └─ robots.txt
├─ server
│  ├─ api
│  │  └─ scrape-json-ld.ts
│  └─ tsconfig.json
├─ tailwind.config.js
└─ tsconfig.json

```