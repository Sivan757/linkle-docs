# Codex CLI 配置

将 OpenAI Codex CLI 通过 Linkle 中转，使用支持 Codex 工作流的文本或推理模型。

::: warning 不要把图片模型配置成 Codex 主模型
`gpt-image-2` 是图片生成模型，不适合作为 Codex CLI 的主模型。Codex 使用 `wire_api = "responses"` 时会请求 `/v1/responses`；如果把 `model = "gpt-image-2"` 配在这里，实际链路会变成 `POST /v1/responses`，上游只支持图片接口时会返回 404。

需要生图时，请使用 [图片生成接口](/api/image-generation)，请求 `POST /v1/images/generations`。
:::

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

不要使用下面这种写法接入 Linkle API Key：

```toml
requires_openai_auth = true
```

`requires_openai_auth` 表示使用 OpenAI 账号认证，不适用于 Linkle Token。Linkle 中转应使用 `env_key` 指向你的 Bearer Token 环境变量。

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

**Q: 为什么 `gpt-image-2` 在 Codex 配置里会 404？**
Codex 配置里的 `wire_api = "responses"` 会让请求进入 `/v1/responses`。`gpt-image-2` 的图片生成应走 `/v1/images/generations`；如果上游没有开放 `/v1/responses`，Linkle 会记录上游 404，并对外返回不可用错误。

**Q: 我想同时使用 Codex 和生图，应该怎么配？**
Codex 主模型使用 `gpt-5.4`、`gpt-5.5`、`claude-sonnet-4-20250514` 这类文本/推理模型。图片生成在业务代码或脚本里单独调用 `/v1/images/generations`，不要把图片模型放进 Codex 的 `model` 字段。

**Q: 如何确认用的是 Linkle 而不是直连？**
在 Linkle 控制台查看日志，有请求记录即表示已通过中转。
