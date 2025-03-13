# astro-league-tracker.github.io

An app to track your progress towards observer awards in the [astronomical league](https://www.astroleague.org/).

Built with Nuxt. Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

## Project Overview

The app is intended to be hosted as a static site using github pages, but content is stored in a Sqlite database in order to create relationships between projects. The Observer program requires a number of other programs to be completed, for example.

Since this is a static site, the database is not available in production, nor are any server routes. Any frontend routes starting with `/admin` are also removed in production. These pages are intended to make adding content easier.

The sqlite database is checked in to the code and will be used to generate a JSON file which production will use to display content.

Progress is displayed in the form of checkboxes next to project links and their state is saved in the browser's local storage.

## Setup

tools:

- [pnpm](https://pnpm.io/) is needed for package management and running scripts.
- [sqlite3](https://sqlite.org/) is recommended to interact with the database.
- [brew](https://brew.sh/) can be used to install the above on MacOS.

This project was built using Node v22 which can also be installed with brew or you can use [nvm](https://github.com/nvm-sh/nvm).

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Most of the time, you shouldn't need to run the following since it is handled by a github action. However, this can be helpful to help debug.
See `.github/workflows/deploy.yaml`

Build the application for production:

```bash
pnpm nuxt build --preset github_pages
```

Locally preview production build:

```bash
pnpm preview
```

## Formatting and Linting

eslint and prettier are used to ensure code style and best practices. There aren't currently pre-commit hooks or github actions set up to enforce this, so the scripts may need to be run in the mean time.

Just lint:

```bash
pnpm lint
```

Automatically fix and format:

```bash
pnpm lint:fix
```
