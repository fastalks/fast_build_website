#!/bin/bash

# =============================================
# 一键在 Ubuntu 上安装 Docker (官方源)
# 支持: Ubuntu 20.04, 22.04, 24.04
# 作者: AI Assistant
# =============================================

set -e  # 遇到错误立即退出

echo "🐳 开始安装 Docker..."

# 1. 卸载旧版本
echo "[1/7] 卸载旧版本 Docker..."
sudo apt-get remove -y docker docker-engine docker.io containerd runc || true

# 2. 安装依赖工具
echo "[2/7] 安装必要依赖..."
sudo apt-get update
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# 3. 创建 keyrings 目录并添加 Docker GPG 密钥
echo "[3/7] 添加 Docker 官方 GPG 密钥..."
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 4. 设置 Docker APT 源
echo "[4/7] 设置 Docker 软件源..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. 更新源并安装 Docker
echo "[5/7] 更新软件源并安装 Docker..."
sudo apt-get update
sudo apt-get install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-compose-plugin

# 6. 验证安装
echo "[6/7] 验证 Docker 安装..."
sudo docker run --rm hello-world

# 7. 可选：将当前用户加入 docker 组（免 sudo）
read -p "是否将当前用户加入 docker 组以避免使用 sudo？(y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "正在将用户 $USER 加入 docker 组..."
    sudo usermod -aG docker "$USER"
    echo "✅ 操作完成！请 **重新登录** 或运行 'newgrp docker' 使权限生效。"
else
    echo "跳过用户组设置。使用时仍需加 sudo。"
fi

# 启用开机自启
sudo systemctl enable docker

echo ""
echo "🎉 Docker 安装完成！"
echo "👉 提示：首次运行容器建议测试：docker run hello-world"
echo "👉 Docker Compose V2 已安装，使用命令：docker compose ..."