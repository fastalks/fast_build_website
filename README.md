# Fast Build Website

一套帮助你快速部署前后端网站的自动化脚本，覆盖 Docker 安装、Let's Encrypt SSL 申请、容器构建与上线全流程。

## 目录

- [快速开始](#快速开始)
- [脚本说明](#脚本说明)
- [服务拓扑](#服务拓扑)
- [环境变量](#环境变量)
- [数据持久化](#数据持久化)
- [SSL 与安全](#ssl-与安全)
- [开发模式](#开发模式)
- [常见问题](#常见问题)

## 快速开始

```bash
# 赋予执行权限
chmod +x fast_build.sh deploy.sh manage.sh install-docker.sh

# 一键完成 Docker 安装、证书签发与部署
./fast_build.sh example.com admin@example.com

# 或仅构建/重启已有服务
./deploy.sh
```

> `fast_build.sh` 会在目标主机上申请 Let's Encrypt 证书、同步到 `nginx/ssl/`，并自动配置续期计划任务。
> 在执行前，请确保目标域名已正确解析到当前服务器公网 IP，否则证书签发会失败。

## 脚本说明

| 脚本 | 作用 |
| --- | --- |
| `fast_build.sh` | 聚合安装 Docker、获取证书、启动容器，并配置证书续期 |
| `install-docker.sh` | 在 Debian/Ubuntu 系统上安装 Docker 与 Docker Compose |
| `deploy.sh` | 构建并以 `docker compose up -d --build` 方式启动全部服务 |
| `manage.sh` | `start`/`stop`/`restart`/`logs`/`status`/`build` 的运维快捷指令 |

所有脚本只依赖仓库内文件，不包含个人凭据或隐私数据。

## 服务拓扑

`docker-compose.yml` 定义了以下服务：

- `backend`：Python API 服务，对外暴露 `8000` 端口，可选对接 `tgi-server`
- `frontend`：Next.js SSR 应用，通过内部网络由 Nginx 转发
- `nginx`：反向代理 + 静态资源服务，同时挂载 `nginx/nginx.conf` 与 `nginx/ssl`
- `postgres`：主数据库，使用 `postgres:15-alpine`，默认开启 5432 映射
- `redis`：缓存与消息队列，默认开启持久化 `appendonly`

如使用 `tgi-server`，请在 Compose 中补充对应服务或移除 `depends_on` 配置。
容器间互通可直接使用服务名作为主机名，例如 `postgres:5432`、`redis:6379`。

## 环境变量

应用需要一个 `.env` 文件来提供数据库凭据（`docker compose` 会自动加载同目录 `.env`）。示例：

```env
POSTGRES_DB=app_db
POSTGRES_USER=app_user
POSTGRES_PASSWORD=change_me
POSTGRES_NON_ROOT_USER=app_user
POSTGRES_NON_ROOT_PASSWORD=change_me
```

> 请务必修改默认密码，避免在公共仓库或日志中泄露。

## 数据持久化

- PostgreSQL 数据写入 `data/postgres/`
- Redis AOF 日志保存在 `data/redis/`
- Nginx 证书位于 `nginx/ssl/`

部署前可预先创建这些目录并为 Docker 赋予写权限：

```bash
mkdir -p data/postgres data/redis nginx/ssl
chmod 700 data/postgres
chmod 700 data/redis
```

## SSL 与安全

- 证书默认签发到 `/etc/letsencrypt/live/<域名>/`
- `fast_build.sh` 会复制为 `nginx/ssl/cert.pem` 与 `nginx/ssl/key.pem`
- 自动续期计划任务：每日 03:00 执行 `certbot renew`，续期成功后重启 `nginx`
- 如需自定义证书，可直接将证书文件放入 `nginx/ssl/` 并更新 `nginx.conf`

## 开发模式

```bash
cd frontend
npm install
npm run dev  # http://localhost:3000
```

后端开发可在 `backend` 目录运行本地 Python 环境；生产镜像的依赖记录在 `backend/requirements.txt`。

## 常见问题

- **无法访问 443 端口**：确认安全组/防火墙放行，并确保证书签发成功。
- **证书续期失败**：检查计划任务日志，或执行 `sudo certbot renew --dry-run` 验证。
- **Docker 服务未安装**：可以单独运行 `sudo ./install-docker.sh`，或重新执行 `fast_build.sh`。

## License

MIT
