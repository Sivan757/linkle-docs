# 客户端配置

Linkle 可作为 Claude Code、Codex CLI、Anthropic SDK 等工具的统一 API 入口。

## 支持的客户端

| 客户端 | 配置方式 | 指南 |
|--------|----------|------|
| Claude Code | 环境变量 / settings.json | [Claude Code](/clients/claude-code) |
| Codex CLI | config.toml | [Codex CLI](/clients/codex) |
| Claude API / SDK | ANTHROPIC_BASE_URL | [Claude API](/clients/claude-api) |

图片生成不属于编码客户端主模型配置。需要调用 `gpt-image-2` 时，请使用 [图片生成接口](/api/image-generation)。

## 前提条件

1. 已获取 Linkle API Key（登录 Linkle 控制台 → 令牌管理 → 创建 Token）
2. Token 已配置目标模型权限
3. 网络可访问 `https://linkle.space`

## 通用模式

所有客户端配置都遵循同一模式：**将默认 API 地址替换为 Linkle 地址，使用 Linkle Key 认证**。

```bash
# 原始地址
https://api.openai.com/v1

# 替换为 Linkle
https://linkle.space/v1
```
