import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Linkle',
  description: 'AI API 网关文档',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
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
