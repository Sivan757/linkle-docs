import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Linkle 文档',
  description: 'Linkle AI API 网关 — 统一中转站，支持 Claude Code、Codex、Claude API 的配置与使用指南',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'keywords', content: 'Linkle,AI API 网关,中转站,Claude Code 配置,Codex 中转,Anthropic SDK 代理,API 中转,LLM 代理' }],
    ['meta', { name: 'author', content: 'Linkle' }],
    ['meta', { property: 'og:title', content: 'Linkle 文档 — AI API 网关中转站' }],
    ['meta', { property: 'og:description', content: '统一的 AI API 中转入口，支持 Claude Code、Codex CLI、Anthropic SDK 等客户端配置' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://linkle.space' }],
  ],

  sitemap: {
    hostname: 'https://linkle.space',
  },

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '客户端', link: '/clients/overview' },
      { text: 'API', link: '/api/overview' },
      { text: '部署', link: '/deployment/overview' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '渠道配置', link: '/guide/channels' },
            { text: '计费', link: '/guide/billing' },
            { text: '认证', link: '/guide/auth' },
          ],
        },
      ],
      '/clients/': [
        {
          text: '客户端配置',
          items: [
            { text: '概览', link: '/clients/overview' },
            { text: 'Claude Code', link: '/clients/claude-code' },
            { text: 'Codex CLI', link: '/clients/codex' },
            { text: 'Claude API / SDK', link: '/clients/claude-api' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/overview' },
            { text: 'Chat Completions', link: '/api/chat' },
            { text: 'Embeddings', link: '/api/embeddings' },
            { text: 'Images', link: '/api/images' },
            { text: 'Audio', link: '/api/audio' },
          ],
        },
      ],
      '/deployment/': [
        {
          text: '部署运维',
          items: [
            { text: '概览', link: '/deployment/overview' },
            { text: 'Docker 部署', link: '/deployment/docker' },
            { text: '环境变量', link: '/deployment/env' },
            { text: '运维手册', link: '/deployment/operations' },
            { text: '升级', link: '/deployment/upgrade' },
          ],
        },
      ],
    },

    socialLinks: [],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'linkle.space',
    },
  },
})
