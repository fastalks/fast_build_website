# SSL 证书说明

## 自签名证书

本目录包含自动生成的自签名 SSL 证书，用于开发和测试环境。

### 证书信息

- **证书文件**: `cert.pem`
- **私钥文件**: `key.pem`
- **有效期**: 365 天
- **证书主体**: CN=localhost, O=AnimeGent, C=CN

### 重新生成证书

如需重新生成证书，运行以下命令：

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout key.pem -out cert.pem \
  -subj "/C=CN/ST=Beijing/L=Beijing/O=AnimeGent/OU=IT/CN=localhost"
```

### 生产环境证书

⚠️ **警告**: 自签名证书仅适用于开发和测试环境！

生产环境请使用受信任的证书颁发机构（CA）签发的证书，例如：

- [Let's Encrypt](https://letsencrypt.org/) - 免费 SSL 证书
- 付费证书服务商（如 DigiCert, GlobalSign 等）

### 使用 Let's Encrypt

对于生产环境，建议使用 Certbot 获取免费的 Let's Encrypt 证书：

```bash
# 安装 certbot
brew install certbot

# 获取证书（需要域名和公网访问）
sudo certbot certonly --standalone -d your-domain.com

# 证书位置
# /etc/letsencrypt/live/your-domain.com/fullchain.pem
# /etc/letsencrypt/live/your-domain.com/privkey.pem
```

然后更新 `nginx.conf` 中的证书路径。

## 浏览器警告

使用自签名证书时，浏览器会显示安全警告。这是正常的，因为证书不是由受信任的 CA 签发的。

在开发环境中，你可以：
- Chrome/Edge: 点击"高级" → "继续访问"
- Firefox: 点击"高级" → "接受风险并继续"
- Safari: 点击"显示详细信息" → "访问此网站"

## 安全注意事项

- ✅ 证书和私钥文件已添加到 `.gitignore`，不会被提交到 Git
- ✅ 私钥文件权限已设置为仅所有者可读
- ⚠️ 不要在生产环境使用自签名证书
- ⚠️ 不要将私钥文件上传到公开位置
