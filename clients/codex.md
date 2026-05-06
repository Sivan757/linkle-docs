# Codex CLI 配置

将 OpenAI Codex CLI 通过 Linkle 中转，使用任意上游模型。

## 配置文件

Codex CLI 配置位于 `~/.codex/config.toml`。

## 基础配置

```toml
model           = "gpt-5.4"
model_provider  = "linkle"

[model_providers.linkle]
name     = "Linkle"
base_url = "https://linkle.space/v1"
wire_api = "responses"
env_key  = "LINKLE_API_KEY"
```

设置环境变量：

```bash
export LINKLE_API_KEY="sk-your-linkle-key"
```

如果使用 Chat Completions 协议而非 Responses API：

```toml
[model_providers.linkle]
name     = "Linkle"
base_url = "https://linkle.space/v1"
wire_api = "chat"
env_key  = "LINKLE_API_KEY"
```

## 多模型配置

为不同模型创建独立的 provider：

```toml
model          = "claude-sonnet-4-20250514"
model_provider = "linkle-claude"

[model_providers.linkle-claude]
name     = "Linkle Claude"
base_url = "https://linkle.space/v1"
wire_api = "responses"
env_key  = "LINKLE_API_KEY"

[model_providers.linkle-gpt]
name     = "Linkle GPT"
base_url = "https://linkle.space/v1"
wire_api = "responses"
env_key  = "LINKLE_API_KEY"
```

## 多 Profile 切换

```toml
profile = "linkle"

[profiles.linkle]
model_provider = "linkle"
model          = "gpt-5.4"

[profiles.linkle-claude]
model_provider = "linkle-claude"
model          = "claude-sonnet-4-20250514"
```

运行时选择 profile：

```bash
codex -p linkle-claude
```

## 验证配置

```bash
codex exec "hello" -p linkle --no-sandbox
```

成功执行即配置正确。

## 常见问题

**Q: `base_url` 要加 `/v1` 吗？**
需要。Codex 不会自动追加 `/v1`，必须显式写在 `base_url` 末尾。

**Q: `wire_api` 选 `chat` 还是 `responses`？**
Codex v0.80.0+ 默认使用 Responses API（`wire_api = "responses"`）。如果上游模型只支持 Chat Completions，改用 `"chat"`。

**Q: 如何确认用的是 Linkle 而不是直连？**
在 Linkle 控制台查看日志，有请求记录即表示已通过中转。
