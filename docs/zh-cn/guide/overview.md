---
title: 简介
lang: zh-CN
---

# 简介

方便又高性能的 Nginx 防火墙模块。

## 为什么选择 ngx_waf

* 基础防护：如 IP 或 IP 网段的黑白名单、URI 黑白名单和请求体黑名单等。
* 使用简单：配置文件和规则文件书写简单，可读性强。
* 高性能：使用高效的 IP 检查算法和缓存机制。
* 高级防护：兼容 [ModSecurity](https://github.com/SpiderLabs/ModSecurity)，因此你可以使用[开放式网络应用安全项目（OWASP）® 的核心规则库](https://owasp.org/www-project-modsecurity-core-rule-set/)。
* 友好爬虫验证：支持验证 Google、Bing、Baidu 和 Yandex 的爬虫并自动放行，避免错误拦截。
* 验证码：支持三种验证码：hCaptcha、reCAPTCHAv2 和 reCAPTCHAv3。

## 功能

* 兼容 [ModSecurity](https://github.com/SpiderLabs/ModSecurity)。此功能仅限最新的 Current 版本。
* SQL 注入防护（Powered By [libinjection](https://github.com/libinjection/libinjection)）。
* XSS 攻击防护（Powered By [libinjection](https://github.com/libinjection/libinjection)）。
* 支持 IPV4 和 IPV6。
* 支持开启验证码（CAPTCHA)，支持 [hCaptcha](https://www.hcaptcha.com/)、[reCAPTCHAv2](https://developers.google.com/recaptcha) 和 [reCAPTCHAv3](https://developers.google.com/recaptcha)。
* 支持识别友好爬虫（如 BaiduSpider）并自动放行（基于 User-Agent 和 IP 的识别）。此功能仅限最新的 Current 版本。
* CC 防御，超出限制后自动拉黑对应 IP 一段时间或者使用验证码做人机识别。
* IP 黑白名单，同时支持类似 `192.168.0.0/16` 和 `fe80::/10`，即支持点分十进制和冒号十六进制表示法和网段划分。
* POST 黑名单。
* URL 黑白名单
* 查询字符串（Query String）黑名单。
* UserAgent 黑名单。
* Cookie 黑名单。
* Referer 黑白名单。

## 联系方式

* Telegram 频道: [https://t.me/ngx_waf](https://t.me/ngx_waf)
* Telegram 群组（英文）: [https://t.me/group_ngx_waf](https://t.me/group_ngx_waf)
* Telegram 群主（中文）：[https://t.me/group_ngx_waf_cn](https://t.me/group_ngx_waf_cn)

## 性能测试

[性能测试](test.md#性能测试)

## 闲谈

[nginx 防火墙模块开发总结](https://www.addesp.com/archives/2876)

欢迎访问我的博客：[https://www.addesp.com/](https://www.addesp.com/)。

## 感谢

* [ModSecurity](https://github.com/SpiderLabs/ModSecurity)：开源且跨平台的 WAF 引擎。
* [uthash](https://github.com/troydhanson/uthash)：C 语言的哈希表、数组、链表等容器库。
* [libinjection](https://github.com/libinjection/libinjection)：SQL 注入检测库。
* [libsodium](https://github.com/jedisct1/libsodium)：C 语言密码函数库。
* [lastversion](https://github.com/dvershinin/lastversion)：一个轻巧的命令行工具，帮助你下载或安装一个项目的特定版本。
* [ngx_lua_waf](https://github.com/loveshell/ngx_lua_waf)：一个基于 lua-nginx-module (openresty) 的 web 应用防火墙。 
* [nginx-book](https://github.com/taobao/nginx-book)：Nginx开发从入门到精通 
* [nginx-development-guide](https://github.com/baishancloud/nginx-development-guide)：Nginx 开发指南。

