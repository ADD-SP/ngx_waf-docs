---
title: 跨版本升级
lang: zh-CN
---

# 跨版本升级

升级模块均需要按照[安装指南](/zh-cn/guide/installation.md)中的说明重新安装。

## 从 `8.x.x` 升级到 `9.x.x`

1. 安装 [libmodsecurity](https://github.com/SpiderLabs/ModSecurity) 的动态链接库和头文件。
2. 在项目根目录下运行命令 `git clone -b v2.3.0 https://github.com/troydhanson/uthash.git lib/uthash`。
3. 指令 `waf_mode` 的一些参数被删除，如果你使用了这些参数请删除。
    * LIBINJECTION
    * LIBINJECTION-SQLI
    * LIBINJECTION-XSS
    * ADV
4. 删除高级规则的文件 `advanced`。
5. 指令 `waf_priority` 的参数 `ADV` 被删除，如果你使用了此参数请删除。
6. 为指令 `waf_priority` 新增了一个参数 `MODSECURITY`，如果你使用了此指令请将改参数填写到合适的位置。

## 从 `7.x.x` 升级到 `8.x.x`

1. 安装 `libcurl` 的动态链接库和头文件。
2. 在项目根目录下运行命令 `git clone https://github.com/DaveGamble/cJSON.git lib/cjson`。
3. 在项目根目录下运行命令 `git clone https://github.com/libinjection/libinjection.git lib/libinjection`。
4. 如果你使用了指令 `waf_mode` 并且使用了该指令的参数 `CC` 或 `CACHE`，请删除这两个参数。这两个参数的功能已经分别移动进了指令
`waf_cc_deny` 和 `waf_cache`。
5. 如果你想开启 CC 防护，请修改指令 `waf_cc_deny` 的参数，例如将 `waf_cc_deny rate=2000r/m duration=1h` 改为 `waf_cc_deny on rate=2000r/m duration=1h`。
6. 如果你想开启缓存，请修改指令 `waf_cache` 的参数，例如将 `waf_cache capacity=50` 改为 `waf_cache on capacity=50`。
7. 如果你在 `http` 块中使用了指令 `waf_cc_deny` 或 `waf_cache`，请将这两个指令移动到更内层。
8. 如果你使用了指令 `waf_cache` 并且使用了该指令的参数 `interval` 或 `percent`，请删除这两个参数，这两个参数已经被移除。
9. 如果你使用了指令 `waf_priority`，请将 `VERIFY-BOT` 和 `CAPTCHA` 添加进去。

## 从 `6.x.x` 升级到 `7.x.x`

1. 如果你在 `http` 块中使用了指令 `waf_cc_deny`，请将这个指令移动到更内层。

## 从 `5.x.x` 升级到 `6.x.x`

1. 在规则目录下新建一个名为 `advanced` 的空文件。
2. 如果使用了配置项 `waf_priority`，可以将其删除或者按照文档中对该配置项的说明进行修改。

