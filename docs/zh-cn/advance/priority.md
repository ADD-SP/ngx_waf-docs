---
title: 规则优先级
lang: zh-CN
---

# 规则优先级

本模块着诸多检测项目，那么一定要规定各个检测项目的检测优先级，避免出现不合逻辑的检测结果。

下面将按照优先级从高到底地列出所有的检测项目。

1. IP 白名单检测
2. IP 黑名单检测
3. 友好爬虫验证 <Badge text="仅限最新的 Current 版本" type="tip"/>
4. CC 防御检测
5. 验证码（CAPTCHA） <Badge text="仅限最新的 Current 版本" type="tip"/>
6. Under-Attack 模式
7. Url 白名单检测
8. Url 黑名单检测
9. Get 参数黑名单检测
10. User-Agent 黑名单检测
11. Referer 白名单检测
12. Referer 黑名单检测
13. Cookie 黑名单检测
14. 高级规则
15. Post 请求体黑名单
16. ModSecurity 的规则 <Badge text="仅限最新的 Current 版本" type="tip"/>


::: tip 修改优先级

您可以通过配置文件修改优先级，但是 POST 请求体检测的优先级不允许修改，它的优先级永远是最低的。详见 [waf_priority](directive.md#waf-priority)。

:::


::: tip 最新的 Current 版本中的变化

允许通过指令 [waf_priority](directive.md#waf-priority) 修改 POST 检查优先级。

:::
