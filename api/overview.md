# API 概览

Linkle 提供 OpenAI 兼容的 API 接口。

## 基础 URL

```
https://linkle.space/v1
```

## 认证

所有 API 请求通过 HTTP Header `Authorization: Bearer <token>` 认证。

## 支持的接口

| 接口 | 路径 | 说明 |
|------|------|------|
| Chat Completions | `POST /v1/chat/completions` | 对话补全 |
| Embeddings | `POST /v1/embeddings` | 文本向量化 |
| Images | `POST /v1/images/generations` | 图片生成 |
| Audio Transcriptions | `POST /v1/audio/transcriptions` | 语音转文字 |
| Audio Speech | `POST /v1/audio/speech` | 文字转语音 |
| Models | `GET /v1/models` | 模型列表 |

## 速率限制

基于用户和模型维度的速率限制，具体限制取决于你的 Token 配置。

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 认证失败 |
| 429 | 速率限制 |
| 500 | 服务器内部错误 |
