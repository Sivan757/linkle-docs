# Claude API / SDK 配置

将 Anthropic SDK 或直接 API 调用接入 Linkle 中转。

## Anthropic SDK

### Python

```python
from anthropic import Anthropic

client = Anthropic(
    base_url="https://linkle.space/v1",
    api_key="sk-your-linkle-key",
)

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello"}],
)
print(message.content)
```

### TypeScript / Node.js

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  baseURL: "https://linkle.space/v1",
  apiKey: "sk-your-linkle-key",
});

const message = await client.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Hello" }],
});
console.log(message.content);
```

## 环境变量方式

不修改代码，通过环境变量全局配置：

```bash
export ANTHROPIC_BASE_URL="https://linkle.space/v1"
export ANTHROPIC_API_KEY="sk-your-linkle-key"
```

::: warning 注意
`ANTHROPIC_BASE_URL` 末尾的 `/v1` 不能省略。SDK 会在此基础上拼接 `/messages`。
:::

## 直接 API 调用

```bash
curl https://linkle.space/v1/messages \
  -H "x-api-key: sk-your-linkle-key" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Hello"}
    ]
  }'
```

## 模型名映射

Linkle 支持透传 Anthropic 模型名，也兼容 OpenAI 格式：

```python
# 原生格式
model="claude-sonnet-4-20250514"

# OpenAI 兼容格式
model="gpt-4o"
```

通过 `/v1/models` 查看可用模型列表：

```bash
curl https://linkle.space/v1/models \
  -H "Authorization: Bearer sk-your-linkle-key"
```

## 流式响应

```python
with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "写一首诗"}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

## 常见问题

**Q: Python SDK 报 `status_code: 404`？**
检查 `base_url` 是否以 `/v1` 结尾。SDK 自动追加 `/messages`，完整路径为 `base_url/messages`。

**Q: Node.js SDK `baseURL` vs Python `base_url`？**
Node.js SDK 使用 `baseURL`（大写 URL），Python SDK 使用 `base_url`（小写）。

**Q: 如何同时配置 HTTP 代理？**
```python
import httpx
client = Anthropic(
    base_url="https://linkle.space/v1",
    api_key="sk-your-linkle-key",
    http_client=httpx.Client(proxy="http://127.0.0.1:7890"),
)
```
