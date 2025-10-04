#!/usr/bin/env bash
set -euo pipefail

WP_URL="${WP_HOME:-http://localhost:8080}"
TITLE="${WP_TITLE:-Gender GP Website}"
ADMIN_USER="${WP_ADMIN_USER:-admin}"
ADMIN_PASS="${WP_ADMIN_PASSWORD:-admin}"
ADMIN_EMAIL="${WP_ADMIN_EMAIL:-admin@gender-gp.local}"
LOCALE="${WP_LOCALE:-en_GB}"

echo "Waiting for WordPress at ${WP_URL}..."
until curl -fsS "${WP_URL}" >/dev/null 2>&1; do sleep 2; done

# Install if needed
docker compose run --rm wpcli core is-installed || docker compose run --rm wpcli core install \
  --url="${WP_URL}" \
  --title="${TITLE}" \
  --admin_user="${ADMIN_USER}" \
  --admin_password="${ADMIN_PASS}" \
  --admin_email="${ADMIN_EMAIL}" \
  --skip-email \
  --locale="${LOCALE}"

# Dev plugins
docker compose run --rm wpcli plugin install \
  query-monitor \
  redis-cache \
  wp-mail-smtp \
  user-switching \
  health-check \
  wp-crontrol \
  enable-media-replace \
  regenerate-thumbnails \
  safe-svg \
  redirection \
  --activate

# Enable object cache
docker compose run --rm wpcli redis enable || true

# Permalinks
docker compose run --rm wpcli rewrite structure '/%postname%/' --hard
docker compose run --rm wpcli rewrite flush --hard

echo "Admin → ${WP_URL}/wp-admin  (user: ${ADMIN_USER} / pass: ${ADMIN_PASS})"
