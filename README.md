<div style="text-align: center;">
    <img src="./app/public/lyrebird-logo.svg" width="100" alt="Lyrebird logo" />
</div>

# Lyrebird Client

Lyrebird is simply a content creation and management application for social media platforms and is currently focused on
Twitter only. In short, Lyrebird is just another alternative to [Hypefury](https://hypefury.com) or
[Hootsuite](https://hootsuite.com) but without support for the other social networks. That will come later.

Here's a Notion document that explains the project in more detail to the UI designer who worked on
this: [Lyrebird Notion Document](https://www.notion.so/gyen/Lyrebird-A-Twitter-Content-Management-Software-6808d851058745099b444e52e6aa1471).

## Setup

To set up the project, you need to have [Node.js](https://nodejs.org/en/) (**at least v18.x**) installed on your
machine,
and it's recommended to use NPM (**at least v8.x**) as your package manager; this is to ensure consistency across the
project
and to prevent any issues with using different package managers.

### Install dependencies

Running `npm install` will install dependencies and also run the `prepare` script which will enable hooks with Husky.

### Run the project

- `npm run dev` will run the `dev` script in all packages that have it, in parallel.
- `npm run dev:app` will run the `dev` script in the `app` package.
- `npm run dev:ui` will run the `dev` script in the `ui` package. This will open the Storybook UI in your browser.

Same applies to the `build` script.

### Installing new dependencies

This project is a monorepo set up with [TurboRepo](https://turbo.build/repo). This means that all workspaces are managed by a single `package-lock.json` file at the root of the project.

> Learn more about monorepos [here](https://turbo.build/repo/docs/handbook/what-is-a-monorepo).

Currently there are 4 workspaces:

- `@lyrebird/app` - The main application, built with Vue3 and Nuxt3. Found in `app/`
- `@lyrebird/ui` - The UI library, documented with Storybook. Found in `ui/`.
- `@lyrebird/configs` - Contains shared configuration files for Tailwind, PostCSS, etc. Found in `packages/configs`.
- `@lyrebird/tsconfigs` - Contains shared TypeScript configuration files. Found in `packages/tsconfigs`.

To install a new dependency, run `npm install <npm-dependency-name>` **in the root** of the project. This will install the package in all workspaces and update the `package-lock.json` file. If you want to install a dependency in a specific workspace only, run `npm install <npm-dependency-name> --workspace=<workspace-name>` **in the root** of the project, like:

```bash
npm install lodash --workspace=@lyrebird/app
```

Don't forget to add the `-D` flag if you're installing a dev dependency.

## Code Style

This project uses [Prettier](https://prettier.io/) for code formatting and [ESLint](https://eslint.org/) for linting.
Use these commands to format and lint the code:

- `npm run code-quality:format` will format the codebase using Prettier.
- `npm run code-quality:lint` will lint the codebase using ESLint.
- `npm run code-quality:all` will run both the above commands, in that order.

When you commit code, Husky will run the `code-quality:all` script to ensure that the code is well-formatted and has no linting errors. Husky might allow commits when it encounters warnings so you can ignore them, but it's better to resolve them. We should keep the project as clean as possible.

## Contributing

1. Ensure that all your branches are named in the pattern `<github-username>/<issue-title>`.

2. Never commit directly to the `main` and `staging` branches. Always create a PR and get it reviewed before merging. We
   have a Husky hook that will prevent you from committing directly to these branches.

3. Always create a new branch from `staging` and name it `<github-username>/<issue-title>`. This is to ensure that
   the `main` branch is always stable, free of beta changes and ready for production. The `main` branch will only receive changes from the `staging` branch when the `staging` branch is stable enough.

4. Always create a PR from your feature branch to `staging` and get it reviewed before merging.
