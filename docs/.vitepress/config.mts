import { defineConfig, type DefaultTheme } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

const mainRepo = 'https://github.com/ADD-SP/ngx_waf'
const docsRepo = 'https://github.com/ADD-SP/ngx_waf-docs'
const editLinkPattern = `${docsRepo}/edit/master/docs/:path`

const enNav: DefaultTheme.NavItem[] = [
  { text: 'Best Practices', link: '/practice/overview' },
  { text: 'Cross-version Upgrades', link: '/advance/upgrade' },
  { text: 'CHANGES', link: '/changes/overview' }
]

const enSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Quick Start',
    link: '/guide/overview',
    items: [
      { text: 'Overview', link: '/guide/overview' },
      { text: 'Version Description', link: '/guide/version' },
      { text: 'Compatibility Statement', link: '/guide/compatibility' },
      { text: 'Installation Guide', link: '/guide/installation' },
      { text: 'Configuration Guide', link: '/guide/configuration' },
      { text: 'Test', link: '/guide/test' },
      { text: 'FAQ', link: '/guide/faq' }
    ]
  },
  {
    text: 'Advanced Guide',
    link: '/advance/directive',
    items: [
      { text: 'Directive', link: '/advance/directive' },
      { text: 'Rule Description', link: '/advance/rule' },
      { text: 'Rule Priority', link: '/advance/priority' },
      { text: 'Embedded Variables', link: '/advance/variable' },
      { text: 'Log', link: '/advance/log' },
      { text: 'Cross-version Upgrades', link: '/advance/upgrade' },
      { text: 'Known Issues', link: '/advance/issue' }
    ]
  },
  {
    text: 'Roadmap (Advice Needed)',
    link: '/roadmap/overview'
  }
]

const zhNav: DefaultTheme.NavItem[] = [
  { text: '最佳实践', link: '/zh-cn/practice/overview' },
  { text: '跨版本升级', link: '/zh-cn/advance/upgrade' },
  { text: '更新日志', link: '/zh-cn/changes/overview' }
]

const zhSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '快速上手',
    link: '/zh-cn/guide/overview',
    items: [
      { text: '简介', link: '/zh-cn/guide/overview' },
      { text: '版本说明', link: '/zh-cn/guide/version' },
      { text: '兼容性说明', link: '/zh-cn/guide/compatibility' },
      { text: '安装', link: '/zh-cn/guide/installation' },
      { text: '配置', link: '/zh-cn/guide/configuration' },
      { text: '测试', link: '/zh-cn/guide/test' },
      { text: '常见问题与解答', link: '/zh-cn/guide/faq' }
    ]
  },
  {
    text: '进阶指南',
    link: '/zh-cn/advance/directive',
    items: [
      { text: '配置语法', link: '/zh-cn/advance/directive' },
      { text: '规则说明', link: '/zh-cn/advance/rule' },
      { text: '规则优先级', link: '/zh-cn/advance/priority' },
      { text: '内置变量', link: '/zh-cn/advance/variable' },
      { text: '日志', link: '/zh-cn/advance/log' },
      { text: '跨版本升级', link: '/zh-cn/advance/upgrade' },
      { text: '已知问题', link: '/zh-cn/advance/issue' }
    ]
  },
  {
    text: '开发计划（建议征集）',
    link: '/zh-cn/roadmap/overview'
  }
]

export default defineConfig({
  base: process.env.docsBaseUrl ?? '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.jsdelivr.net/gh/ADD-SP/ngx_waf@master/assets/logo.png'
      }
    ],
    [
      'meta',
      {
        name: 'robots',
        content:
          'noindex, nofollow, noarchive, nosnippet, noimageindex, noodp, notranslate, max-video-preview:-1'
      }
    ]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'ngx_waf',
      description: "A web application firewall module for nginx without complex configuration.'",
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        langMenuLabel: 'Languages',
        lastUpdated: { text: 'Last Updated' },
        editLink: {
          pattern: editLinkPattern,
          text: 'Help us improve this page!'
        }
      }
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'ngx_waf',
      description: '使用简单的 nginx 防火墙模块',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        langMenuLabel: '选择语言',
        lastUpdated: { text: '最后一次更新' },
        editLink: {
          pattern: editLinkPattern,
          text: '帮助我们改善此页面！'
        }
      }
    }
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', link: `${mainRepo}/` }],
    footer: {
      message: 'BSD 3-Clause License',
      copyright: 'Copyright © 2020, ADD-SP'
    },
    // `lastUpdated` must be enabled here as well: the git timestamps are only
    // collected when the top level theme config turns the feature on.
    lastUpdated: { text: 'Last Updated' },
    editLink: {
      pattern: editLinkPattern,
      text: 'Help us improve this page!'
    }
  },
  vite: {
    plugins: [
      pagefindPlugin({
        excludeSelector: ['img', 'a.header-anchor'],
        // NOTE: functions passed to the plugin are serialized with
        // `Function.prototype.toString` and evaluated in the browser, so they
        // must not reference anything from this module's scope. Pagefind 1.5+
        // segments CJK queries by itself, so no `customSearchQuery` is needed.
        filter: (item) => !item.route.includes('404'),
        locales: {
          root: {
            btnPlaceholder: 'Search',
            placeholder: 'Search docs...',
            emptyText: 'No results',
            heading: 'Total: {{searchResult}} results'
          },
          'zh-cn': {
            btnPlaceholder: '搜索',
            placeholder: '搜索文档',
            emptyText: '没有找到结果',
            heading: '共 {{searchResult}} 条结果'
          }
        },
        // The plugin defaults to `npx pagefind ...`, which does not exist in a
        // Bun-only environment (`bun run` puts node_modules/.bin on PATH, so
        // the locally installed binary can be used directly).
        indexingCommand:
          'pagefind --site "docs/.vitepress/dist" --exclude-selectors "div.aside, a.header-anchor, img"'
      })
    ]
  }
})
