#!/bin/bash

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}AnimeGent 部署脚本${NC}"
echo -e "${GREEN}========================================${NC}"

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo -e "${RED}错误: Docker 未安装${NC}"
    exit 1
fi

# 检查 Docker Compose 是否安装
if ! command -v docker compose &> /dev/null; then
    echo -e "${RED}错误: Docker Compose 未安装${NC}"
    exit 1
fi

# 停止并删除旧容器
echo -e "${YELLOW}停止旧容器...${NC}"
docker compose down

# 构建镜像
echo -e "${YELLOW}构建 Docker 镜像...${NC}"
docker compose build --no-cache

# 启动服务
echo -e "${YELLOW}启动服务...${NC}"
docker compose up -d

# 等待服务启动
echo -e "${YELLOW}等待服务启动...${NC}"
sleep 10

# 检查服务状态
if docker compose ps | grep -q "Up"; then
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}部署成功!${NC}"
    echo -e "${GREEN}访问地址: http://localhost${NC}"
    echo -e "${GREEN}========================================${NC}"
    
    # 显示日志
    echo -e "${YELLOW}最近的日志:${NC}"
    docker compose logs --tail=20
else
    echo -e "${RED}========================================${NC}"
    echo -e "${RED}部署失败!${NC}"
    echo -e "${RED}========================================${NC}"
    docker compose logs
    exit 1
fi
