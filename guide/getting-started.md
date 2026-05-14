# 快速开始

Linkle 提供统一的 API 入口。完成下面三步后，你就可以在 Claude Code、Codex CLI 或 SDK 中使用 Linkle。

## 访问地址

```
https://linkle.space
```

## 获取 API Key

1. 登录 Linkle 控制台
2. 进入「令牌管理」创建 Token
3. 确认 Token 已启用你需要的模型，并且额度可用

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

- [Claude Code 配置](/clients/claude-code)
- [Codex CLI 配置](/clients/codex)
- [Claude API / SDK 配置](/clients/claude-api)
