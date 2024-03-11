# GoFunder Fundraising Platform with Next 14, React JS, CSS 3 and TypeScript

The GoFunder app is a server-side-rendered application using Next 14 with React JS.

## Features

-   ⚡ [Next.js](https://nextjs.org/) with App Router support
-   🔥 Type checking [TypeScript](https://www.typescriptlang.org/)
-   💎 Styling with CSS 3 and CSS modules
-   ✅ Strict Mode for TypeScript and React 18
-   🔒 Authentication with [Stytch](https://clerk.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate): Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
-   📦 Type-safe ORM with Prisma and PostgreSQL
-   ✅ EditorConfig
-   💽 Global Database with [Turso](https://turso.tech/?utm_source=nextjsstarterbp)
-   🌐 Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/) and [Crowdin](https://l.crowdin.com/next-js)
-   ♻️ Type-safe environment variables with T3 Env
-   ⌨️ Form handling with React Hook Form
-   🔴 Validation library with Zod
-   📏 Linter with [ESLint](https://eslint.org/) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Airbnb configuration)
-   💖 Code Formatter with [Prettier](https://prettier.io/)
-   🦊 Husky for Git Hooks
-   🚫 Lint-staged for running linters on Git staged files
-   🚓 Lint git commit with Commitlint
-   📓 Write standard compliant commit messages with Commitizen
-   🦺 Unit Testing with Jest and React Testing Library
-   🧪 Integration and E2E Testing with Playwright
-   👷 Run tests on pull request with GitHub Actions
-   🎉 Storybook for UI development
-   🚨 Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
-   ☂️ Code coverage with [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
-   📝 Logging with Pino.js and Log Management with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
-   🖥️ Monitoring as Code with [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
-   🎁 Automatic changelog generation with Semantic Release
-   🔍 Visual testing with Percy (Optional)
-   💡 Absolute Imports using `@` prefix
-   🗂 VSCode configuration: Debug, Settings, Tasks and Extensions
-   🤖 SEO metadata, JSON-LD and Open Graph tags
-   🗺️ Sitemap.xml and robots.txt with next-sitemap
-   ⌘ Database exploration with Drizzle Studio and CLI migration tool with Drizzle Kit
-   ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
-   🖱️ One click deployment with Netlify (or manual deployment to any hosting services)
-   🌈 Include a FREE minimalist theme
-   💯 Maximize lighthouse score

## API

The API is built using the Prisma ORM with Postgresql as the database. Requests are handled using the built-in Nuxt 3 server and is a Rest Api performing CRUD (Create, Read, Update, Delete). The data models are built with Prisma and the data is related via one-to-one, one-to-many, and many-to-many.

## Styling

The API is built using the Prisma ORM with Postgresql as the database. Requests are handled using the built-in Nuxt 3 server and is a Rest Api performing CRUD (Create, Read, Update, Delete). The data models are built with Prisma and the data is related via one-to-one, one-to-many, and many-to-many.

## Testing

The API is built using the Prisma ORM with Postgresql as the database. Requests are handled using the built-in Nuxt 3 server and is a Rest Api performing CRUD (Create, Read, Update, Delete). The data models are built with Prisma and the data is related via one-to-one, one-to-many, and many-to-many.

## Code S

The API is built using the Prisma ORM with Postgresql as the database. Requests are handled using the built-in Nuxt 3 server and is a Rest Api performing CRUD (Create, Read, Update, Delete). The data models are built with Prisma and the data is related via one-to-one, one-to-many, and many-to-many.

## Project structure

.
├── README.md # README file
├── .github # GitHub folder
├── .husky # Husky configuration
├── .storybook # Storybook folder
├── .vscode # VSCode configuration
├── migrations # Database migrations
├── public # Public assets folder
├── scripts # Scripts folder
├── src
│ ├── app # Next JS App (App Router)
│ ├── components # React components
│ ├── libs # 3rd party libraries configuration
│ ├── locales # Locales folder (i18n messages)
│ ├── models # Database models
│ ├── styles # Styles folder
│ ├── templates # Templates folder
│ ├── types # Type definitions
│ ├── utils # Utilities folder
│ └── validations # Validation schemas
├── tests
│ ├── e2e # E2E tests, also includes Monitoring as Code
│ └── integration # Integration tests
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
