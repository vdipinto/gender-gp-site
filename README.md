# 🐳 WordPress Docker Boilerplate

A modern **WordPress development environment** powered by **Docker**, complete with Redis caching, Mailpit for local emails, Adminer for database access, and a modern frontend workflow powered by **Vite**, **SCSS**, and **ESLint 9**.

---

## 🚀 Features

- **Dockerized WordPress** (PHP 8.3, MariaDB, Redis, Mailpit, Adminer)
- **WP-CLI** support for local commands
- **Automatic plugin installation** and environment setup
- **Redis Object Cache** preconfigured
- **Mailpit** for testing outgoing emails
- **Adminer** for database management
- **Frontend Tooling** (Vite + SCSS + ESLint + Prettier + Stylelint)
- **Full editing-ready theme structure** with `theme.json` support

---

## 🧱 Stack

| Service | Description | Port |
|----------|--------------|------|
| **WordPress (php8.3-apache)** | Main CMS container | `8080` or `.env WEB_PORT` |
| **MariaDB** | Database | `3306` |
| **Redis** | Object caching | internal |
| **Mailpit** | Email testing | `8026` (UI), `1026` (SMTP) |
| **Adminer** | Database admin | `8082` |

---

## 🛠️ Quick Start

```bash
# Clone this repository
git clone git@github.com:vdipinto/wp-docker-boilerplate.git
cd wp-docker-boilerplate

# Copy environment file
cp .env.example .env

# Start the stack
docker compose up -d --build

# Bootstrap WordPress and install default plugins
./scripts/post-up.sh

# Visit
# -> http://localhost:8080 (or your custom WEB_PORT)
# Admin login: admin / admin
```

---

## 🧰 Frontend Tooling

```bash
cd frontend-tooling

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint and format
npm run lint
npm run format
```

SCSS, JS, and other frontend assets can live in your custom theme folder (e.g., `wp-content/themes/my-theme/`).

---

## 🧩 WP-CLI Usage

You can run WP-CLI commands inside Docker:

```bash
docker compose run --rm wpcli plugin list
docker compose run --rm wpcli redis enable --host=redis --port=6379
docker compose run --rm wpcli option get siteurl
```

---

## 🧠 Notes

- Edit `.env` to configure your ports, DB credentials, or debugging mode.
- Redis is enabled via the `redis-cache` plugin.
- All WordPress data persists in named Docker volumes (`db_data`, `wp_data`).
- The `frontend-tooling` folder is ignored by Docker and used only for asset building.

---

## 🧑‍💻 License

MIT — Feel free to use, modify, and adapt for your own projects.

---

© 2025 [Vito Di Pinto](https://vitodipinto.dev)
