import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Linkle 文档',
  description: 'Linkle 用户教程，帮助用户获取密钥并配置 Claude Code、Codex CLI、Claude API / SDK',
  lang: 'zh-CN',
  base: '/docs/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'keywords', content: 'Linkle 教程,Claude Code 配置,Codex 中转,Anthropic SDK 代理,API Key 使用指南' }],
    ['meta', { name: 'author', content: 'Linkle' }],
    ['meta', { property: 'og:title', content: 'Linkle 用户教程' }],
    ['meta', { property: 'og:description', content: '获取 Linkle API Key，并配置 Claude Code、Codex CLI、Anthropic SDK 等客户端' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'canonical', href: 'https://linkle.space/docs' }],
  ],

  sitemap: {
    hostname: 'https://linkle.space',
  },

  themeConfig: {
    nav: [
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '客户端配置', link: '/clients/overview' },
      { text: 'API 调用', link: '/api/image-generation' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
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
          text: 'API 调用',
          items: [
            { text: '图片生成', link: '/api/image-generation' },
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
