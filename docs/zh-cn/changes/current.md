---
title: 最新版（Current）
lang: zh-CN
---

# 更新日志（Current）

本文件的格式基于[如何维护更新日志](https://keepachangelog.com/zh-CN/1.0.0)，
并且本项目遵守[语义化版本](https://semver.org/lang/zh-CN/spec/v2.0.0.html)。

::: tip 何为「不兼容的修改」？

* 原有的配置文件可能无法使用，比如删除或者重命名了某个配置项。
* 可能需要更新编译环境，比如安装新的依赖。

:::


## [未发布]


### 新增


### 移除


### 变动


### 修复

***

## [9.0.2] - 2021-09-25 UTC+0800

### 修复

* 内置变量 `$waf_blocking_log` 的值有时会出错。


***

## [9.0.1] - 2021-09-24 UTC+0800

### 修复

* 未能正确读取 ModSecurity 的规则。

***

## [9.0.0] - 2021-09-23 UTC+0800

### **注意**

如果您想要升级到此版本，请查看文档中的跨版本升级的指南。

### 新增

* 兼容了[ModSecurity](https://github.com/SpiderLabs/ModSecurity) 的规则。

* 增加了两个指令：`waf_modsecurity` 和 `waf_modsecurity_transaction_id`。

* 为指令 `waf_priority` 增加了参数 `MODSECURITY`。

### 移除

* 删除了指令 `waf_mode` 的一些参数：`LIBINJECTION`、`LIBINJECTION-SQLI`、`LIBINJECTION-XSS` 和 `ADV`。

* 删除了指令 `waf_priority` 的参数 `ADV`。

* 删除了依赖 [libinjection](https://github.com/libinjection/libinjection)。

### 修复

* 当验证码通过时不再返回 404 状态码，而是返回 204 状态码。

* 有时不会完整地检查请求体。

***

## [8.0.3] - 2021-08-27 UTC+0800

### 修复

* 内存泄露

* 一个没有初始化的结构体字段，会导致错误日志中出现大量的 `malloc(size) failed (12: Out of memory)`。

***

## [8.0.2] - 2021-08-27 UTC+0800

### 修复

* 开启验证码后 nginx 崩溃（段错误），原因是未能正确合并不同级别的 `waf_captcha` 指令。

* 不能显示验证码页面，原因是未能正确合并不同级别的 `waf_captcha` 指令。

* 如果使用了 `proxy_pass` 指令，Under-Attack-Mode 和验证码均不能正常工作。

***

## [8.0.1] - 2021-08-23 UTC+0800

### 新增

* 当 CC 防护返回 444 状态码时不再生成额外的响应头。

### 修复

* 当 `User-Agent` 为空时会引发段错误。

* 不能正确合并指令 `waf_http_status`。

***

## [8.0.0] - 2021-08-21 UTC+0800

### **注意**

如果您想要升级到此版本，请查看文档中的跨版本升级的指南。

### 新增

* 引入了第三方平台的验证码，支持 hCaptcha、reCAPTCHAv2 和 reCAPTCHAv3，相关的指令为 `waf_captcha`。

* 支持识别友好爬虫，包括 GooleBot、BingBot、BaiduSpider 和 YandexBot，识别成功后自动放行，相关的指令为 `waf_verify_bot`。

* CC 防护支持开启验证码模式，开启后当请求频率超出限制后会启用验证码，如果连续三次验证失败则拉黑 IP，反之则重新统计请求频率。


### 变动

* 指令 `waf_mode` 的语法有所变化，详见文档中的跨版本升级的指南。

* 指令 `waf_cc_deny` 的语法有所变化，详见文档中的跨版本升级的指南。

* 指令 `waf_cache` 的语法有所变化，详见文档中的跨版本升级的指南。

* 支持修改「请求体检查」的优先级。


### 移除

* 移除了指令 `waf_cache` 的两个参数，分别是 `interval` 和 `percent`。

***

## [7.1.0] - 2021-08-16 UTC+0800

### 新增

* 配置项 `waf_cc_deny` 的参数 `rate` 允许更多个格式，如 `500r/s`、`500r/60s`、`500r/m`、`500r/60m`、`500r/h`、`500r/60h` 和 `500r/d`。

***

## [7.0.1] - 2021-08-11 UTC+0800

### 修复

* 不能正确解析 IP 黑白名单中的 `0.0.0.0/0`。

* 兼容不支持 IPV6 的运行环境。

***

## [7.0.0] - 2021-08-04 UTC+0800

### 变动

* 改变了 Under Attack Mode 的实现方式。不再使用重定向实现，而是通过修改响应体实现。

* 删除了配置项 `waf_under_attack` 的参数 `uri`，详情见文档。

* 为配置项 `waf_under_attack` 增加了一个参数 `file`，该参数的值应该是一个 HTML 文件的绝对路径，详情见文档。

* 不允许在 `http` 这一级中使用配置项 `waf_cc_deny`。
