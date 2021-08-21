---
title: 配置语法
lang: zh-CN
---

# 配置语法

## `waf`

* 配置语法: waf \<*on* | *off*\>
* 默认配置：waf *off*
* 配置段: http, server, location

是否启用本模块。

## `waf_rule_path`

* 配置语法: waf_rule_path <\*dir*\>
* 默认配置：——
* 配置段: http, server, location

规则文件所在目录，且必须以`/`结尾。

## `waf_mode`

* 配置语法: waf_mode \<*mode_type*\> ...
* 默认配置：——
* 配置段: http, server, location

指定防火墙的工作模式，至少指定一个模式，最多指定八个模式。

`mode_type`具有下列取值（不区分大小写）:
* GET: 当`Http.Method=GET`时启动检查。
* HEAD: 当`Http.Method=HEAD`时启动检查。
* POST: 当`Http.Method=POST`时启动检查。
* PUT: 当`Http.Method=PUT`时启动检查。
* DELETE: 当`Http.Method=DELETE`时启动检查。
* MKCOL: 当`Http.Method=MKCOL`时启动检查。
* COPY: 当`Http.Method=COPY`时启动检查。
* MOVE: 当`Http.Method=MOVE`时启动检查。
* OPTIONS: 当`Http.Method=OPTIONS`时启动检查。
* PROPFIN: 当`Http.Method=PROPFIN`时启动检查。
* PROPPATCH: 当`Http.Method=PROPPATCH`时启动检查。
* LOCK: 当`Http.Method=LOCK`时启动检查。
* UNLOCK: 当`Http.Method=UNLOCK`时启动检查。
* PATCH: 当`Http.Method=PATCH`时启动检查。
* TRAC: 当`Http.Method=TRAC`时启动检查。
* CMN-METH：等价于 `HEAD GET POST`。
* ALL-METH：任意的 HTTP 请求方法都会启动检查。
* IP: 启用 IP 地址的检查规则。
* URL: 启用 url 的检查规则。
* RBODY: 启用 POST 请求体的检查规则。
* ARGS: 启用 args 的检查规则。
* UA: 启用 user-agent 的检查规则。
* COOKIE: 启用 cookie 的检查规则。
* REFERER: 启用 referer 的检查规则。
* CC: 启用 CC 防御。**当你启用了此模式，你必须设置 [waf_cc_deny](#waf-cc-deny)。**
* ADV：启用高级规则。
* LIB-INJECTION-SQLI：使用 [libinjection](https://github.com/libinjection/libinjection) 检测 SQL 注入。
* LIB-INJECTION-XSS：使用 [libinjection](https://github.com/libinjection/libinjection) 检测 XSS 攻击。
* LIB-INJECTION：等价于 `LIB-INJECTION-SQLI LIB-INJECTION-XSS`。
* CACHE：启用缓存。启用此模式后会缓存检查的结果，下次检查相同的目标时就不需要重复检查了。不过不会缓存 POST 体的检查结果。比如一个 URL 经过检查后并没有在黑名单中，那么下次检查相同的 URL 时就无需再次检查 URL 黑名单了。**当你启用了此模式，你必须设置 [waf_cache](#waf-cache)**。
* STD：标准工作模式，等价于 `HEAD GET POST IP URL RBODY ARGS UA CC CACHE LIB-INJECTION-SQLI`。
* STATIC：适用于静态站点的工作模式，等价于 `HEAD GET IP URL UA CC CACHE`。
* DYNAMIC：适用于动态站点的工作模式，等价于 `HEAD GET POST IP URL ARGS UA RBODY COOKIE CC CACHE LIB-INJECTION-SQLI`。
* FULL: 启用所有的模式。

您可以通过在某个 `mode_type` 前增加 `!` 前缀来关闭该模式，下面是一个例子。
表示使用标准的工作模式，但是不检查 User-Agent。

```nginx
waf_mode STD !UA;
```

::: warning 注意

如果同时启用两个及以上的存在冲突的模式，则靠右的模式会覆盖它左边的模式。下面的例子表示检查 User-Agent。

```nginx
waf_mode !UA STD;
```

:::

::: tip 注意

`CC`是独立于其它模式的模式，其生效与否不受到其它模式的影响。典型情况如`URL`模式会受到`GET`模式的影响，因为如果不使用`GET`模式，那么在收到`GET`请求时就不会启动检查，自然也就不会检查 URL，但是`CC`模式不会受到类似的影响。

:::


::: tip 最新的 Current 版本中的变化

参数 `CC` 和 `CACHE` 被删除。

* STD：标准工作模式，等价于 `HEAD GET POST IP URL RBODY ARGS UA LIB-INJECTION-SQLI`。
* STATIC：适用于静态站点的工作模式，等价于 `HEAD GET IP URL UA`。
* DYNAMIC：适用于动态站点的工作模式，等价于 `HEAD GET POST IP URL ARGS UA RBODY COOKIE LIB-INJECTION-SQLI`。

:::


## `waf_cc_deny`

* 配置语法: waf_cc_deny \<rate=*n*r/m\> \[duration=*1h*\] \[size=*20m*\]
* 默认配置：——
* 配置段: http, server, location

设置 CC 防护相关的参数。

* `rate`：表示一段时间内的请求次数的上限，如 `500r/m`。超出限制后会返回 [503 状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/503)，并附带 [Retry-After](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Retry-After) 响应头。
* `duration`：表示超出第一个参数 `rate` 的限制后拉黑 IP 的时间，如 `60s`、`60m`、`60h` 和 `60d`，如不指定则默认为 `1h`。
* `size`：用于设置记录 IP 访问次数的内存的大小，如 `20m`、`2048k`，不得小于 `20m`，如不指定则默认为 `20m`。当这段内存耗尽的时候程序会自动重置这块内存以重新统计 IP 的访问次数。


::: tip 最新的 Current 版本中的变化

* 配置语法: waf_cc_deny \<*off* | *on* | *CAPTCHA*\> \<rate=*n*r/t\> \[duration=*1h*\] \[size=*20m*\]
* 默认配置：waf_cc_deny *off* duration=*1h* size=*20m*
* 配置段: server, location

***

* `CAPTCHA`：当请求频率超出设定值时会使用验证码进行验证，如果连续三次验证失败则拉黑 IP，反之重新计算请求频率。
当你启用了此选项时，你必须设置 [waf_captcha](#waf-captcha) 的 `prov`、`file` 和 `secret` 这三个参数。
* `rate`：表示一段时间内的请求次数的上限，如 `500r/s`、`500r/60s`、`500r/m`、`500r/60m`、`500r/h`、`500r/60h` 和 `500r/d`。超出限制后会返回 [503 状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/503)，并附带 [Retry-After](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Retry-After) 响应头。

:::


## `waf_cache`

* 配置语法: waf_cache \<capacity=*n*\>
* 默认配置：—
* 配置段: http, server, location

设置缓存规则检查结果相关的参数。

* `capacity`：对于一些启用了缓存机制的检测项目，每个检测项目最多缓存多少个检测目标的检测结果。

::: tip 启用了缓存机制的检测项目

启用了缓存机制的检测项目指除了 CC 防护、IP 黑白名单检测和 POST 检测之外的所有的检测项。

:::

::: tip 性能优化建议

`capacity` 过小会导致频繁地淘汰缓存，增加内存碎片，降低性能。所以请根据实际应用场景合理地设置。

:::


::: tip 最新的 Current 版本中的变化

* 配置语法: waf_cache \<*off* | *on*\> \[capacity=*50*\]
* 默认配置：waf_cache *off* \capacity=*50*
* 配置段: server, location

:::


## `waf_captcha` <Badge text="仅限最新的 Current 版本" type="tip"/>

* 配置语法: waf_captcha \<*on* | *off*\> \[prov=*hCaptcha* | *reCAPTCHAv2* | *reCAPTCHAv3*\] \[file=*/full/path*\] \[secret=*your_secret*\] \[score=*0.5*\] \[expire=30m\] \[api=*uri*\] \[verify=*/captcha*\]
* 默认配置：waf_captcha off
* 配置段: http, server, location

使用验证码对客户端进行人机识别。

* `prov`：验证码平台，包含 [hCaptcha](https://www.hcaptcha.com/)、[reCAPTCHAv2](https://www.google.com/recaptcha/about/) 和 [reCAPTCHAv3](https://www.google.com/recaptcha/about/)。
* `file`：用于接入验证码的 HTML 文件的绝对路径，你可以从 `assets/` 下找到对应的 HTML 文件。
* `secret`：用于确认验证码的运行结果的密钥，你可以从对应的验证码平台获得。
* `socre`：当 `prov=reCAPTCHAv3` 时，这个表示验证码打分结果的下限，低于这个值会被视为验证失败。默认值为 `0.5`。
* `expire`：验证码的过期时间，过期后需要重新运行验证码。默认为 30 分钟。
* `api`：验证码平台的提供给服务端的 API，用于确认验证码的运行结果。
    * 如果 `prov=hCaptcha`，则默认值为 `https://hcaptcha.com/siteverify`。
    * 如果 `prov=reCAPTCHAv2`，则默认值为 `https://www.recaptcha.net/recaptcha/api/siteverify`。
    * 如果 `prov=reCAPTCHAv3`，则默认值为 `https://www.recaptcha.net/recaptcha/api/siteverify`。
* `verify`：验证码向后端提交 token 所用的 url，默认为 `/captcha`。


::: tip 填写你的 Sitekey

你可以在 `assets/` 目录下找到接入每个验证码所使用的 HTML 并拷贝一份，然后在副本中填入你的 `Sitekey`。

:::


## `waf_verify_bot` <Badge text="仅限最新的 Current 版本" type="tip"/>

* 配置语法: waf_verify_bot \<*off* | *on* | *strict*\> \[*who*\] ...
* 默认配置：waf_captcha *off* *GoogleBot* *BingBot* *BaiduSpider* *YandexBot*
* 配置段: http, server, location

验证友好的爬虫，比如百度蜘蛛。

如果第一个参数是 `on` 则会停止后续的所有检查并放行本次请求。

如果第一个参数是 `strict`，则如果某个请求的 User-Agent 正确，但是 IP 地址不正确则会被拦截（有误报）。

* `who`：爬虫的名称，取值包括 `GoogleBot`、`BingBot`、`BaiduSpider` 和 `YandexBot`。如不指定则默认为全部。

::: tip 工作原理

* [Overview of Google crawlers (user agents)  |  Search Central](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers)
* [Googlebot Verification | Google Search Central  |  Google Developers](https://developers.google.com/search/docs/advanced/crawling/verifying-googlebot)
* [Which Crawlers Does Bing Use? - Bing Webmaster Tools](https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0)
* [How to Verify Bingbot](https://www.bing.com/webmasters/help/how-to-verify-bingbot-3905dc26)
* [百度用户服务中心-站长平台](https://help.baidu.com/question?prod_id=99&class=0&id=3001)
* [How to check that a robot belongs to Yandex](https://yandex.com/support/webmaster/robot-workings/check-yandex-robots.html)

:::


## `waf_under_attack`

* 配置语法: waf_under_attack \<*on* | *off*\> \[uri=*str*\]
* 默认配置：waf_under_attack off
* 配置段: http, server, location

如果您的站点正在受到攻击可以尝试使用此配置。
开启后每个用户首次访问会强制延迟五秒，并自动跳转到 `uri` 所指向的网页。

* `uri`: 可以是一个完整的网址，也可以是一个路径。比如 `https://example.com/attack.html` 或 `/attack.html`。

::: tip 小技巧

`uri` 所指向的网页应该在五秒后自动跳转到用户想要访问的页面，页面的网址可以通过查询字符串获得，参数名为 `target`。

`assets/under-attack.html` 是一个示例网页，你应该将这个文件拷贝到你的网站目录下，并正确地配置 `uri`。

你自然也可以自己编写一个 html 文件，然后通过 `uri` 指向它。

:::


::: tip 最新的 Current 版本中的变化

在 LTS 版本中我们通过重定向实现了该功能，但是许多原因（如缓存和 CDN）会导致重定向失败，或者不能正常验证 Cookie。
所以我们修改了实现方式，我们通过修改响应体来返回指定的网页，这种方式不会导致 URI 的改变。

同时我们增加了响应头 `Cache-Control: no-store` 以避免缓存带来的影响。

* 移除了参数 `uri`。
* 增加了参数 `file`，该参数的值应该是一个 HTML 文件的绝对路径，如 `file=/path/to/under-attack.html`。这个 HTML 只有一个功能，即五秒后自动刷新。

:::


## `waf_priority`

* 配置语法: waf_priority "*str*"
* 默认配置：waf_priority "W-IP IP CC UNDER-ATTACK W-URL URL ARGS UA W-REFERER REFERER COOKIE ADV"
* 配置段: http, server, location

设置各个检测项目的优先级，除了 POST 检测，POST 检测的优先级永远最低。

* `UNDER-ATTACK`: 配置 `waf_under_attack`。
* `W-IP`：IP 白名单检测
* `IP`：IP 黑名单检测
* `CC`：CC 防护
* `W-URL`：URL 白名单检测
* `URL`：URL 黑名单检测
* `ARGS`：URL 参数（查询字符串）黑名单检测
* `UA`：User-Agent 黑名单检测
* `W-REFERER`：Referer 白名单检测
* `REFERER`：Referer 黑名单检测
* `COOKIE`：Cookie 黑名单检测
* `ADV`：表示高级规则。

::: warning 警告

`str` 必须使用单引号或者双引号包裹，且 `str` 必须包含全部的检测项目。

:::


::: tip 最新的 Current 版本中的变化

* 默认配置：waf_priority "W-IP IP VERIFY-BOT CC CAPTCHA UNDER-ATTACK W-URL URL ARGS UA W-REFERER REFERER COOKIE ADV"

***

* `VERIFY-BOT`：友好爬虫验证。
* `CAPTCHA`：验证码。

:::


## `waf_http_status`

* 配置语法: waf_http_status \[general=*http_status_code*\] \[cc_deny=*http_status_code*\]
* 默认配置: waf_http_status general=403 cc_deny=503
* 配置段: http, server, location

此指令用于设置请求被拦截时返回的 HTTP 状态码。

* `general`: 表示所有基于黑名单的检测项目触发后返回的 HTTP 状态码。
* `cc_deny`：表示 CC 防护触发后返回的 HTTP 状态码。
