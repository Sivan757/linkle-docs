# 快速开始

Linkle 是 AI API 网关，提供统一的 OpenAI 兼容 API 入口。

## 访问地址

```
https://linkle.space
```

## 获取 API Key

1. 登录管理后台
2. 进入「令牌管理」创建 Token
3. 配置模型权限和额度

## 使用示例

```bash
curl https://linkle.space/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxx" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello"}
    ]
  }'
```

## 支持的模型

通过 `/v1/models` 接口查看可用模型列表：

```bash
curl https://linkle.space/v1/models \
  -H "Authorization: Bearer sk-xxx"
```

## 下一步

- [渠道配置](/guide/channels) — 了解如何配置上游供应商
- [API 参考](/api/overview) — 完整的 API 文档
- [部署运维](/deployment/overview) — 自行部署指南
