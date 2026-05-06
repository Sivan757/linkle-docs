# 部署概览

Linkle 支持 Docker 部署，推荐使用 Docker Compose。

## 架构

```
Cloudflare DNS → 1Panel OpenResty (443) → linkle (127.0.0.1:3001)
```

## 环境要求

| 组件 | 要求 |
|------|------|
| 容器引擎 | Docker / Docker Compose |
| 数据库 | PostgreSQL（推荐）或 MySQL ≥ 5.7.8 或 SQLite |
| 缓存 | Redis（可选） |

## 部署步骤

1. [Docker 部署](/deployment/docker)
2. [环境变量配置](/deployment/env)
3. [日常运维](/deployment/operations)
4. [版本升级](/deployment/upgrade)
