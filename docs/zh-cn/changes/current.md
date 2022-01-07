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

## [10.1.1] - 2022-01-07 UTC+0800

### 新增

* 支持 PCRE2。

### 修复

* 内存泄漏。

* 验证码和 Under Attack Mode（五秒盾）有时会无限刷新。

***

## [10.1.0] - 2021-12-14 UTC+0800

### 新增

* 指令 `waf` 可以设置为 `bypass` 模式，即仅检测并记录日志，但不会拦截任何请求。

* 指令 `waf_verify_bot` 新增了参数 `SogouSpider`，用于验证是否为搜狗爬虫。


### 修复

* 内存回收机制并未正常运行，这虽然不会造成内存泄漏，但会导致内存占用居高不下，并引发性能问题。

* 友好爬虫验证功能会错误地打印拦截日志。

***

## [10.0.1] - 2021-12-05 UTC+0800

### 新增

* 添加了两个彩蛋，你可以在文档中找到相关的线索。这两个彩蛋不会自动触发，所以不会影响正常使用。


### 修复

* 指令 `waf_mode` 中所有与请求方法对应的参数均失效。 


***

## [10.0.0] - 2021-11-30 UTC+0800

### 新增

* 新指令 `waf_zone`，用来声明一块共享内存，这块内存将被用于其他的指令，比如 `waf_cc_deny`。

* 新指令 `waf_action`，用于设置拦截请求后的动作，比如返回特定的状态码或者使用验证码对客户端做人机认证。

* 新指令 `waf_block_page`，用于设置拦截页面，当请求被拦截后将指定的 HTML 文件返回。

* 新内置变量 `$waf_rate`，用来表示一个统计周期内当前 IP 的访问次数。统计周期由指令 `waf_cc_deny` 的参数 `rate` 决定，如果 IP 已经被拉黑，则由参数 `duration` 决定。

* 指令 `waf_captcha` 增加了一个参数 `max_fails`，用来设置验证码最大试错次数和超出后的拉黑时间。

* 指令 `waf_captcha` 增加了一个参数 `zone`，用来指定一块共享内存，当且仅当设置了参数 `max_fails` 时才需要设置。

* 指令 `waf_captcha` 增加了一个参数 `sitekey`，当且仅当省略了参数 `file` 时才需要设置。

* 当你重载 nginx 时，模块会尽可能地保留共享内存中的信息，使其不被清空，比如 CC 防护的拉黑列表。


### 移除

* 移除了指令 `waf_http_status`，相关的功能合并到指令 `waf_action`。

* 移除了指令 `waf_cc_deny` 的参数 `size`，现在使用 `zone` 代替。


### 变动

* 允许省略指令 `waf_under_attack` 的参数 `file`，省略此参数时将使用一个内置的文件，它来自 `assets/under_attack.html`。

* 允许省略指令 `waf_captcha` 的参数 `file`，省略此参数时将根据参数 `prov` 的值使用一个内置的文件，这些文件来自目录 `assets/`。

* 更多的调试日志。


***

## [9.0.6] - 2021-10-10 UTC+0800

### 修复

* 当指令 `try_files` 生效时无法完成 CAPTCHA 的验证。

***

## [9.0.5] - 2021-10-09 UTC+0800

### 新的测试套件

偶然间看到了一个测试套件：[test-nginx](https://github.com/openresty/test-nginx)。
看完之后感觉很好便拿来测试，编了不少测试用例，果不其然发现了一大堆 Bug，不愧是我。

### 变动

* 删除了无用的调试日志。

* 更多的调试日志。

### 修复

* 有时连接会被过早地关闭。

* 启用 CAPTCHA 后请求体的检测结果可能会出错。

* CAPTCHA 可能会因为 HTTP 缓存而失败。

* 重载 nginx 时存在内存泄露。

* 未能正确合并上层配置块的 `waf_cache` 指令。

* 未能正确合并上层配置块的 `waf_cc_deny` 指令。

* 未能正确继承上层配置块的 Referer 黑名单。

* 未能正确识别一些错误的配置。

* 修复了一条默认的 URL 黑名单规则。

* 修复了下列文件，使得验证码完成后可以自动刷新网页。
    * `assets/hCaptcha.html`
    * `assets/reCAPTCHAv2_Checkbox.html`
    * `assets/reCAPTCHAv2_Invisible.html`
    * `assets/reCAPTCHAv3.html`

***

## [9.0.4] - 2021-09-29 UTC+0800

### 修复

* 当指令 `rewrite` 造成内部重定向时会错误地跳过所有检测。

***

## [9.0.3] - 2021-09-28 UTC+0800

### 变动

* 更多的调试日志。

### 修复

* 验证码页面不能正常显示。

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
