# 🧰 Developer Notes

Quick reference for working with the WordPress Docker Boilerplate.

---

## 🐳 Docker Commands

### Start containers
```bash
docker compose up -d --build
```

### Stop containers
```bash
docker compose down
```

### View logs (live)
```bash
docker compose logs -f
```

### Check running containers
```bash
docker compose ps
```

---

## ⚙️ WP-CLI Commands

### Common tasks
```bash
docker compose run --rm wpcli plugin list
docker compose run --rm wpcli theme activate your-theme
docker compose run --rm wpcli user list
docker compose run --rm wpcli cache flush
```

### Redis
```bash
docker compose run --rm wpcli redis status
docker compose run --rm wpcli redis flushall
```

### Debug URL setup
```bash
docker compose run --rm wpcli option get siteurl
docker compose run --rm wpcli eval 'echo home_url();'
```

---

## 🎨 Frontend Tooling

All frontend development happens inside the `frontend-tooling` directory.

```bash
cd frontend-tooling
npm install
npm run dev     # start local dev server with hot reload
npm run build   # build production assets
```

Linting and formatting are automated via Husky + lint-staged.

---

## 🧩 File Locations

| Type | Path |
|------|------|
| WordPress config | `config/wp-config.php` |
| Themes | `wp-content/themes/` |
| Plugins | `wp-content/plugins/` |
| Uploads | `wp-content/uploads/` |
| Frontend tooling | `frontend-tooling/` |
| Scripts | `scripts/` |

---

## 🧱 Local Services

| Service | URL |
|----------|------|
| WordPress | http://localhost:8085 |
| Adminer | http://localhost:8082 |
| Mailpit | http://localhost:8026 |

---

## 🧑‍💻 Tips

- Never commit `.env` or `wp-content/uploads/`.
- Use `post-up.sh` for initial site setup after a fresh clone.
- Run `docker compose build --no-cache` if base images update.

