#!/bin/bash
set -euo pipefail

DOMAIN="${1:-}"
EMAIL="${2:-}"

if [[ -z "$DOMAIN" || -z "$EMAIL" ]]; then
  echo "用法: $0 <域名> <管理员邮箱>"
  exit 1
fi

echo "[1/6] 检查 Docker..."
if ! command -v docker >/dev/null 2>&1; then
  chmod +x ./install-docker.sh
  sudo ./install-docker.sh
fi

echo "[2/6] 安装 Certbot..."
if ! command -v certbot >/dev/null 2>&1; then
  sudo apt-get update
  sudo apt-get install -y certbot
fi

echo "[3/6] 申请证书..."
sudo systemctl stop nginx 2>/dev/null || true
sudo docker compose down 2>/dev/null || true
sudo certbot certonly --standalone \
  --non-interactive --agree-tos \
  --preferred-challenges http \
  -d "$DOMAIN" -m "$EMAIL"

echo "[4/6] 同步证书到 nginx/ssl..."
sudo mkdir -p nginx/ssl
sudo cp "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" nginx/ssl/cert.pem
sudo cp "/etc/letsencrypt/live/$DOMAIN/privkey.pem" nginx/ssl/key.pem
sudo chown "$(id -u):$(id -g)" nginx/ssl/cert.pem nginx/ssl/key.pem
sudo chmod 600 nginx/ssl/key.pem

echo "[5/6] 启动服务..."
sudo docker compose up -d --build

echo "[6/6] 配置自动续期..."
( sudo crontab -l 2>/dev/null; \
  echo "0 3 * * * certbot renew --quiet && docker compose restart nginx" ) \
  | sudo crontab -

echo "完成: 访问 https://$DOMAIN"