# Claude Code 配置

将 Claude Code 接入 Linkle 中转站，统一管理 API 调用。

## 方式一：环境变量

```bash
export ANTHROPIC_BASE_URL="https://linkle.space"
export ANTHROPIC_AUTH_TOKEN="sk-your-linkle-key"
export ANTHROPIC_MODEL="claude-sonnet-4-20250514"
```

配置后直接启动：

```bash
claude
```

## 方式二：settings.json（推荐）

编辑 `~/.claude/settings.json`：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://linkle.space",
    "ANTHROPIC_AUTH_TOKEN": "sk-your-linkle-key",
    "ANTHROPIC_MODEL": "claude-sonnet-4-20250514"
  }
}
```

重启 Claude Code 生效。

## 模型映射

Linkle 支持多模型，可根据需要切换：

| 环境变量 | 用途 |
|----------|------|
| `ANTHROPIC_MODEL` | 默认模型 |
| `ANTHROPIC_DEFAULT_OPUS_MODEL` | Opus 系列模型 |
| `ANTHROPIC_DEFAULT_SONNET_MODEL` | Sonnet 系列模型 |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` | Haiku 系列模型 |
| `ANTHROPIC_SMALL_FAST_MODEL` | 轻量快速模型 |

```bash
export ANTHROPIC_DEFAULT_SONNET_MODEL="claude-sonnet-4-20250514"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="claude-haiku-4-5-20251001"
```

## 验证连接

```bash
curl -s https://linkle.space/api/status | head -c 200
```

返回 `{"data":{...}}` 即表示连通。

## 常见问题

**Q: 提示「Could not authenticate」？**
确保 `ANTHROPIC_AUTH_TOKEN` 的值是完整的 Linkle API Key（以 `sk-` 开头）。

**Q: 模型不可用？**
登录 Linkle 控制台 → 令牌管理，确认 Token 已勾选目标模型。

**Q: 需要网络代理？**
Linkle 直连访问，无需额外代理。如果已有代理设置，确保 `linkle.space` 直连：

```bash
export NO_PROXY="linkle.space,$NO_PROXY"
```
