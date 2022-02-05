---
title: 规则优先级
lang: zh-CN
---

# 规则优先级

本模块着诸多检测项目，那么一定要规定各个检测项目的检测优先级，避免出现不合逻辑的检测结果。

下面将按照优先级从高到底地列出所有的检测项目。

## LTS 版本

1. IP 白名单
2. IP 黑名单
3. CC 防御
4. Under-Attack
5. Url 白名单
6. Url 黑名单
7. Query-String 黑名单
8. User-Agent 黑名单
9. Referer 白名单
10. Referer 黑名单
11. Cookie 黑名单
12. Request-Body 黑名单

::: tip 修改优先级

您可以通过配置文件修改优先级，但是 Request-Body 请求体检测的优先级不允许修改，它的优先级永远是最低的。详见 [waf_priority](directive.md#waf-priority)。

:::


## `Current` 版本

1. IP 白名单
2. 系统保护（SysGuard）
3. IP 黑名单
4. 友好爬虫验证
5. 验证码（CAPTCHA）
6. Under-Attack 模式
7. Url 白名单
8. Query-String 白名单
9. User-Agent 白名单
10. Referer 白名单
11. Cookie 白名单
12. Request-Header 白名单
13. Request-Body 白名单
14. CC 防护
15. Url 黑名单
16. Query-String 黑名单
17. User-Agent 黑名单
18. Referer 黑名单
19. Cookie 黑名单
20. Request-Header 黑名单
21. Request-Body 黑名单
22. ModSecurity 的规则


::: tip 最新的 Current 版本中的变化

允许通过指令 [waf_priority](directive.md#waf-priority) 修改 Request-Body 黑白名单优先级。

:::
