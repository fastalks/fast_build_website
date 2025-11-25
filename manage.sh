#!/bin/bash

case "$1" in
  start)
    echo "启动服务..."
    docker compose up -d
    ;;
  stop)
    echo "停止服务..."
    docker compose down
    ;;
  restart)
    echo "重启服务..."
    docker compose restart
    ;;
  logs)
    docker compose logs -f
    ;;
  status)
    docker compose ps
    ;;
  build)
    echo "重新构建..."
    docker compose build --no-cache
    ;;
  *)
    echo "用法: $0 {start|stop|restart|logs|status|build}"
    exit 1
    ;;
esac
