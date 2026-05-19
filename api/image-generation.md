# 图片生成接口

使用 `gpt-image-2` 等图片模型时，请调用 OpenAI 兼容的图片生成接口：

```text
POST https://linkle.space/v1/images/generations
```

不要把图片模型配置成 Codex CLI、Claude Code 等编码客户端的主模型。那些客户端通常会走文本或 Responses 协议，例如 `/v1/responses`；图片模型如果被送到错误端点，上游可能返回 404。

## 最小请求

```bash
curl https://linkle.space/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxx" \
  -d '{
    "model": "gpt-image-2",
    "prompt": "A clean product mockup on a white background",
    "size": "1024x1024"
  }'
```

## 返回格式

上游返回图片 URL 或 base64 时，Linkle 会按 OpenAI 图片接口格式转发：

```json
{
  "created": 1779155132,
  "data": [
    {
      "url": "https://..."
    }
  ]
}
```

不同上游也可能返回 `b64_json`。客户端应同时兼容 `url` 和 `b64_json` 两种图片结果。

## 后台配置检查

如果 `gpt-image-2` 请求失败，先检查这几项：

1. 客户端请求路径应为 `/v1/images/generations`，不是 `/v1/responses`。
2. 模型应绑定到图片生成端点，不要绑定到只支持文本或 Responses 的端点。
3. 渠道上游地址只填基础地址，例如 `https://new.your-agent.cc`，不要填到 `/v1/responses`。
4. 如果上游不支持 `/v1/responses`，关闭图片转 Responses 的策略，让图片请求保持 `/v1/images/generations`。
5. Token 必须有 `gpt-image-2` 所在分组的权限。

## 404 判断

看到 404 时，先区分是本站入口不存在，还是上游返回 404：

```text
POST /v1/responses + model=gpt-image-2
```

通常表示客户端把图片模型当成 Responses 模型使用。应改成：

```text
POST /v1/images/generations + model=gpt-image-2
```

如果 Linkle 日志里显示 `channel error (channel #..., status code: 404)`，说明请求已经进入 Linkle，但上游端点返回 404。此时应检查上游是否支持当前路径。
