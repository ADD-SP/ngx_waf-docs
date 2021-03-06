module.exports = {
    base: process.env.docsBaseUrl == undefined ? "/" : process.env.docsBaseUrl,
    plugins: ['fulltext-search'],
    head: [
        ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/ADD-SP/ngx_waf@master/assets/logo.png' }],
        ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet, noimageindex, noodp, notranslate, max-video-preview:-1'}]
    ],
    locales: {
        '/': {
            lang: "en",
            title: "ngx_waf",
            description: "A web application firewall module for nginx without complex configuration.'"
        },
        '/zh-cn/': {
            lang: "zh-CN",
            title: "ngx_waf",
            description: "使用简单的 nginx 防火墙模块"
        }
    },
    themeConfig: {
        repo: "https://github.com/ADD-SP/ngx_waf/",
        repoLabel: "Github",
        docsRepo: "https://github.com/ADD-SP/ngx_waf-docs/",
        docsDir: "docs",
        editLinks: true,
        smoothScroll: true,
        locales: {
            '/': {
                selectText: "Languages",
                label: "English",
                lastUpdated: "Last Updated",
                editLinkText: "Help us improve this page!",
                nav: [
                    { text: 'Best Practices', link: '/practice/overview.html' },
                    { text: 'Cross-version Upgrades', link: '/advance/upgrade.md' },
                    { text: 'CHANGES', link: '/changes/overview.html' }
                ],
                sidebar: [
                    {
                        title: "Quick Start",
                        path: "/guide/overview.html",
                        children: [
                            "/guide/overview.md",
                            "/guide/version.md",
                            "/guide/compatibility.md",
                            "/guide/installation.md",
                            "/guide/configuration.md",
                            "/guide/test.md",
                            "/guide/faq.md"
                        ]
                    },
                    {
                        title: "Advanced Guide",
                        path: "/advance/directive.html",
                        children: [
                            "/advance/directive.md",
                            "/advance/rule.md",
                            "/advance/priority.md",
                            "/advance/variable.md",
                            "/advance/log.md",
                            "/advance/upgrade.md",
                            "/advance/issue.md",
                        ]
                    },
                    {
                        title: "Roadmap (Advice Needed)",
                        path: "/roadmap/overview.html",
                        children: [
                        ]
                    }
                ]
            },
            '/zh-cn/': {
                selectText: "选择语言",
                label: "简体中文",
                lastUpdated: "最后一次更新",
                editLinkText: "帮助我们改善此页面！",
                nav: [
                    { text: '最佳实践', link: '/zh-cn/practice/overview.html' },
                    { text: '跨版本升级', link: '/zh-cn/advance/upgrade.md' },
                    { text: '更新日志', link: '/zh-cn/changes/overview.html' }
                ],
                sidebar: [
                    {
                        title: "快速上手",
                        path: "/zh-cn/guide/overview.html",
                        children: [
                            "/zh-cn/guide/overview.md",
                            "/zh-cn/guide/version.md",
                            "/zh-cn/guide/compatibility.md",
                            "/zh-cn/guide/installation.md",
                            "/zh-cn/guide/configuration.md",
                            "/zh-cn/guide/test.md",
                            "/zh-cn/guide/faq.md"
                        ]
                    },
                    {
                        title: "进阶指南",
                        path: "/zh-cn/advance/directive.html",
                        children: [
                            "/zh-cn/advance/directive.md",
                            "/zh-cn/advance/rule.md",
                            "/zh-cn/advance/priority.md",
                            "/zh-cn/advance/variable.md",
                            "/zh-cn/advance/log.md",
                            "/zh-cn/advance/upgrade.md",
                            "/zh-cn/advance/issue.md",
                        ]
                    },
                    {
                        title: "开发计划（建议征集）",
                        path: "/zh-cn/roadmap/overview.html",
                        children: [
                        ]
                    }
                ]
            }
        }
    }
}