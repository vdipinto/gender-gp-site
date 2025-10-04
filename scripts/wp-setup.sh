#!/usr/bin/env bash
set -euo pipefail
docker compose run --rm wpcli option update blogdescription "Local development"
docker compose run --rm wpcli theme install twentytwentyfive --activate
