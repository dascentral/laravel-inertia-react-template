# Laravel + Inertia.js + React Template

This repository contains a template for a brand new [Laravel 10](https://laravel.com/docs/10.x) application that leverages the [Laravel Breeze](https://laravel.com/docs/master/starter-kits#laravel-breeze) starter kit.

## Getting Started

### Install Node.js Dependencies

```bash
yarn install
```

### Install PHP Depdencies

```bash
composer install
```

### Configure the Laravel Environment

```bash
cp .env.example .env
```

### Generate an Application Key

```bash
php artisan key:generate
```

### Create a Local Database

With your application now properly configured, you will need to create a new MySQL database. This template assumes the use of a database named `laravel_inertia_react_template`.

### Migrate & Seed the Database

```bash
php artisan migrate:fresh --seed
```

### Start the Develoment Server

```bash
yarn dev
```

If using [Laravel Herd](https://herd.laravel.com/) or [Laravel Valet](https://laravel.com/docs/master/valet), your site should now be live: http://laravel-inertia-react-template.test.

## Technical Stack

In addition to Laravel, this application makes use of the following technologies.

-   [Inertia.js](https://inertiajs.com)
-   [React](https://react.dev)
-   [Tailwind CSS](https://tailwindcss.com/docs/guides/laravel)

### Composer Packages (PHP)

I typically add the following PHP packages to any Laravel application.

#### Core Dependencies — First-Party

-   [Laravel Horizon](https://laravel.com/docs/10.x/horizon)
-   [Laravel Telescope](https://laravel.com/docs/10.x/telescope)

#### Core Dependencies — Third-Party

-   [predis/predis](https://github.com/predis/predis)
-   [spatie/laravel-backup](https://spatie.be/docs/laravel-backup)
-   [spatie/laravel-data](https://spatie.be/docs/laravel-data)
-   [spatie/laravel-ray](https://spatie.be/docs/ray/v1/installation-in-your-project/laravel)
-   [spatie/laravel-view-models](https://github.com/spatie/laravel-view-models)

#### Development Dependencies

-   [nunomaduro/larastan](https://github.com/nunomaduro/larastan)
-   [pestphp/pest](https://pestphp.com/)
-   [pestphp/pest-plugin-faker](https://pestphp.com/docs/plugins#faker)
-   [pestphp/pest-plugin-laravel](https://pestphp.com/docs/plugins#laravel)

### Node.js Dependencies

I typically add the following NPM packages to any Laravel application.

#### Tailwind CSS Plugins

-   [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
-   [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) — Installed via the Laravel Breeze starter kit
-   [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)

#### ESLint

I use [ESLint](https://eslint.org/) to find and fix problems with JavaScript code. I add the following configs & plugins.

-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
-   [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
-   [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
-   [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
-   [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)

#### Prettier

I use [Prettier](https://prettier.io/docs/en/index.html) to ensure consistent code formatting. I add the [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) plugin to automatically sort classes based upon Tailwind's [recommended class order](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted).

#### Stylelint

I use [Stylelint](https://stylelint.io/) to lint CSS, avoid errors, and enforce conventions. I use [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) to enforce modern convensions found in the [CSS specifications](https://www.w3.org/Style/CSS/current-work).

## Application Customizations

*None just yet.*

## Script

Are you starting from scratch? Want to see the commands that got us here?

```bash
# Install a new Laravel application in a Git repository with Pest PHP & Laravel Breeze.
# Instruct Laravel Breeze to install the "React with Inertia" stack.
laravel new laravel-inertia-react-template --git --pest --breeze --stack=react
cd laravel-inertia-react-template

# Install first-party composer packages
composer require laravel/horizon
composer require laravel/telescope

# Install third-party composer packages
composer require predis/predis
composer require spatie/laravel-backup
composer require spatie/laravel-data
composer require spatie/laravel-ray
composer require spatie/laravel-view-models
composer require nunomaduro/larastan:^2.0 --dev
composer require pestphp/pest-plugin-faker --dev
composer require pestphp/pest-plugin-laravel --dev

# Install Tailwind CSS plugins
yarn add -D @tailwindcss/aspect-ratio
yarn add -D @tailwindcss/typography

# Install ESLint & plugins
yarn add -D eslint
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-prettier
yarn add -D eslint-plugin-tailwindcss
yarn add -D eslint-plugin-react

# Install Prettier & plugins
yarn add -D prettier
yarn add -D prettier-plugin-tailwindcss

# Install Stylelint
yarn add -D stylelint
yarn add -D stylelint-config-standard

# Install Vite plugins
yarn add -D @vitejs/plugin-react
yarn add -D vite-plugin-eslint

# Install Laravel Horizon
php artisan horizon:install

# Install Laravel Telescope
php artisan telescope:install

# Migrate the database
php artisan migrate
```
