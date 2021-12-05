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

## `waf_zone` <Badge text=">=v10.0.0" type="tip"/>

* 配置语法: waf_zone \<name=*zone_name*\> \[size=*5m*\]
* 默认配置：——
* 配置段: http

创建一段共享内存，用于记录一些需要跨进程共享的信息，因为 nginx 的多进程模型。

在你使用某些配置时可能需要填写参数 `zone`，比如 [waf_cc_deny](#waf-cc-deny)。
填写格式为 `name:tag`，即名称和标签。名称和标签是 “多对多” 的关系，但是对于同一个 `zone`，
标签名不能重复。

同一个 `zone` 内的全部标签共用该 `zone` 的全部的共享内存。出于性能考虑，建议为每个 `server` 段创建一个 `zone`，
最好不要多个 `server` 段共用一个 `zone`，因为访问共享内存需要上锁，要尽量减少上锁的次数。

::: tip 估算所需的内存大小

经过估计，1M 的内存至少可以记录 4096 个 IP。

:::


## `waf_rule_path`

* 配置语法: waf_rule_path \<*dir*\>
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
* \[数据删除\]: 启用此模式会\[数据删除\]。

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

* STD：标准工作模式，等价于 `HEAD GET POST IP URL RBODY ARGS UA`。
* STATIC：适用于静态站点的工作模式，等价于 `HEAD GET IP URL UA`。
* DYNAMIC：适用于动态站点的工作模式，等价于 `HEAD GET POST IP URL ARGS UA RBODY COOKIE`。
* LIBINJECTION：已移除。
* LIBINJECTION-SQLI：已移除。
* LIBINJECTION-XSS：已移除。
* ADV：已移除。

:::


## `waf_cc_deny`

* 配置语法: waf_cc_deny \<rate=*n*r/m\> \[duration=*1h*\] \[size=*20m*\]
* 默认配置：——
* 配置段: http, server, location

设置 CC 防护相关的参数。

* `rate`：表示一段时间内的请求次数的上限，如 `500r/m`。超出限制后会返回 [503 状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/503)，并附带 [Retry-After](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Retry-After) 响应头。
* `duration`：表示超出第一个参数 `rate` 的限制后拉黑 IP 的时间，如 `60s`、`60m`、`60h` 和 `60d`，如不指定则默认为 `1h`。
* `size`：用于设置记录 IP 访问次数的内存的大小，如 `20m`、`2048k`，不得小于 `20m`，如不指定则默认为 `20m`。当这段内存耗尽的时候程序会按照 LRU 策略清理一部分访问记录。


::: tip 最新的 Current 版本中的变化

* 配置语法: waf_cc_deny \<*off* | *on*\> \<rate=*n*r/t\> \<zone=*name:tag*\> \[duration=*1h*\]
* 默认配置：waf_cc_deny *off*
* 配置段: server, location

***

* `zone`：指定所使用的共享内存和标签，用于记录 IP 的访问次数。当这段内存耗尽的时候程序会按照 LRU 策略清理一部分访问记录。
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
* 默认配置：waf_cache *off* capacity=*50*
* 配置段: server, location

:::


## `waf_modsecurity` <Badge text="仅限最新的 Current 版本" type="tip"/>

* 配置语法: waf_modsecurity \<*on* | *off*\> \<file=*/path/to/modsecuriy/rules.conf\*> \<remote_key=*key*\> \<remote_url=*url*\>
* 默认配置：waf_modsecurity off
* 配置段: http, server, location

使用 ModSecurity 的规则。

* `file`：规则文件的绝对路径。
* `remote_key`：用于读取远程规则文件的密钥。
* `remote_url`：用于读取远程文件的 URL。

你可以参考 [开启 ModSecurity | 最佳实践](/zh-cn/practice/enable-modsecurity.md) 中的用法。

::: tip 注意

* 如果你使用了参数 `remote_key`，你必须同时使用参数 `remote_url`。
* 如果你同时使用了参数 `file`、`remote_key` 和 `remote_url`，那么两份规则都会被加载。

:::


::: danger 内存泄露 

**内存泄露会导致系统的可用内存越来越少，性能逐渐降低直到程序或系统崩溃。**

当前 [ModSecurity](https://github.com/SpiderLabs/ModSecurity) 的最新版 v3.0.5 存在内存泄露的 bug。

* [ngin reload memory leak · Issue #2552 · SpiderLabs/ModSecurity](https://github.com/SpiderLabs/ModSecurity/issues/2552)
* [It often leads memory leak on nginx reload · Issue #2502 · SpiderLabs/ModSecurity](https://github.com/SpiderLabs/ModSecurity/issues/2502)

如果您开启了 ModSecurity，重载 nginx 时会出现内存泄露，长此以往可能会造成严重的后果。

我们强烈建议您避免使用类似下面的命令。

```shell
nginx -s reload
systemctl restart nginx
service nginx restart
```

当您需要重载 nginx 时，强烈建议先关闭 nginx，然后启动 nginx。

```shell
nginx -s stop && nginx
systemctl stop nginx && systemctl start nginx
service nginx stop && serivce nginx start
```

:::

## `waf_modsecurity_transaction_id` <Badge text="仅限最新的 Current 版本" type="tip"/>

* 配置语法: waf_modsecurity_transaction_id \<*string*\>
* 默认配置：waf_modsecurity off
* 配置段: http, server, location

指定 ModSecurity 的事务 ID。你可以在此处使用常量字符串和变量，下面是一个例子。

```nginx
server {
    location /file/ {
        waf_modsecurity_transaction_id "$host-file";
    }

    location /api/ {
        waf_modsecurity_transaction_id "$host-api";
    }
}
```



## `waf_captcha` <Badge text="仅限最新的 Current 版本" type="tip"/>

* 配置语法: waf_captcha \<*on* | *off*\> \<prov=*hCaptcha* | *reCAPTCHAv2:checkbox* | *reCAPTCHAv2:invisible* | *reCAPTCHAv3*\> \[file=*/full/path*\] \[sitekey=*your_sitekey*\] \<secret=*your_secret*\> \[score=*0.5*\] \[expire=30m\] \[api=*uri*\] \[verify=*/captcha*\] \[max_fails=*times:duration*\] \[zone=*name:tag*\]
* 默认配置：waf_captcha *off*
* 配置段: server, location

使用验证码对客户端进行人机识别。

* `prov`：验证码平台，包含 [hCaptcha](https://www.hcaptcha.com/)、[reCAPTCHAv2](https://www.google.com/recaptcha/about/) 和 [reCAPTCHAv3](https://www.google.com/recaptcha/about/)。
* `file`：用于接入验证码的 HTML 文件的绝对路径，你可以从 `assets/` 下找到对应的 HTML 文件并在文件中填写你的 `Sitekey`。如果你省略此参数，则会根据参数 `prov` 的值选择并使用一个内置的 HTML 文件（来自目录 `assets/`），此时你需要设置参数 `sitekey`。
* `sitekey`：你从验证码平台获取的网站密钥，当且仅当参数 `file` 被省略时需要设置本参数。
* `secret`：用于确认验证码的运行结果的密钥，你可以从对应的验证码平台获得。
* `socre`：当 `prov=reCAPTCHAv3` 时，这个表示验证码打分结果的下限，低于这个值会被视为验证失败。默认值为 `0.5`。
* `expire`：验证码的过期时间，过期后需要重新运行验证码。默认为 30 分钟。
* `api`：验证码平台的提供给服务端的 API，用于确认验证码的运行结果。
    * 如果 `prov=hCaptcha`，则默认值为 `https://hcaptcha.com/siteverify`。
    * 如果 `prov=reCAPTCHAv2:xxx`，则默认值为 `https://www.recaptcha.net/recaptcha/api/siteverify`。
    * 如果 `prov=reCAPTCHAv3`，则默认值为 `https://www.recaptcha.net/recaptcha/api/siteverify`。
* `verify`：验证码向后端提交 token 所用的 url，默认为 `/captcha`。
* `max_fails`：验证码最大刷新/试错次数，超出这个次数拉黑对应的 IP 一段时间。例如 `max_fails=20:5m` 表示连续刷新/试错二十次后拉黑 5 分钟。当你使用计费的验证码时这很有用。当你设置了此参数，你必须同时设置参数 `zone`。
* `zone`：设置用于记录验证码试错次数的共享内存，当且仅当参数 `max_fails` 被设置时才需要设置此参数。


你可以参考[开启验证码 | 最佳实践](/zh-cn/practice/enable-captcha.md)中的用例。


::: tip 自定义验证码页面

你可以以目录 `assets/` 下的 HTML 文件为基础，自定义验证码页面，然后通过参数 `file`加载。

不要忘记在 HTML 文件中填写 `sitekey`。

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

如果攻击者采用攻击方式不能完美支持 Cookie，本功能可以大幅度缓解此类攻击造成的影响。

* `uri`: 可以是一个完整的网址，也可以是一个路径。比如 `https://example.com/attack.html` 或 `/attack.html`。

你可以参考[抵御分布式 CC 攻击（HTTP 洪水） | 最佳实践](/zh-cn/practice/protect-against-distributed-http-flood.md)中的用例。

::: tip 小技巧

`uri` 所指向的网页应该在五秒后自动跳转到用户想要访问的页面，页面的网址可以通过查询字符串获得，参数名为 `target`。

`assets/under-attack.html` 是一个示例网页，你应该将这个文件拷贝到你的网站目录下，并正确地配置 `uri`。

你自然也可以自己编写一个 html 文件，然后通过 `uri` 指向它。

:::


::: tip 最新的 Current 版本中的变化

在 LTS 版本中我们通过重定向实现了该功能，但是许多原因（如缓存和 CDN）会导致重定向失败，或者不能正常验证 Cookie。
所以我们修改了实现方式，我们通过修改响应体来返回指定的网页，这种方式不会导致 URI 的改变。

* 配置语法: waf_under_attack \<*on* | *off*\> \[file=*full_path*\]
* 默认配置：waf_under_attack *off*
* 配置段: http, server, location

同时我们增加了响应头 `Cache-Control: no-store` 以避免缓存带来的影响。

* 移除了参数 `uri`。
* 增加了参数 `file`，该参数的值应该是一个 HTML 文件的绝对路径，如 `file=/path/to/under-attack.html`。这个 HTML 只有一个功能，即五秒后自动刷新。当你省略此参数时，默认使用内置的 HTML 文件，它来自 `assets/under-attack.html`。

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

* 默认配置：waf_priority "W-IP IP VERIFY-BOT CC CAPTCHA UNDER-ATTACK W-URL URL ARGS UA W-REFERER REFERER COOKIE POST MODSECURITY"

***

* `VERIFY-BOT`：友好爬虫验证。
* `CAPTCHA`：验证码。
* `POST`：请求体黑名单。
* `ADV`：已经移除。
* `MODSECURITY`。

:::


## `waf_http_status`

* 配置语法: waf_http_status \[general=*http_status_code*\] \[cc_deny=*http_status_code*\]
* 默认配置: waf_http_status general=403 cc_deny=503
* 配置段: http, server, location

此指令用于设置请求被拦截时返回的 HTTP 状态码。

* `general`: 表示所有基于黑名单的检测项目触发后返回的 HTTP 状态码。
* `cc_deny`：表示 CC 防护触发后返回的 HTTP 状态码。

::: warning 最新的 Current 版本中的变化

此配置从 `v10.0.0` 开始被移除，相关的功能移动到配置 [waf_action](#waf-action)。

:::


## `waf_action`

* 配置语法: waf_action \[blacklist=*action*\] \[cc_deny=*action*\] \[modsecurity=*action*\] \[verify_bot=*action*\] \[zone=*name:tag*\]
* 默认配置: waf_action *blacklist=403* *cc_deny=503* *modsecurity=follow* *verify_bot=403*
* 配置段: http, server, location


此配置用于设置拦截一个请求时的动作，`action` 表示具体的动作，可以是以下值。

* `4xx | 5xx`：表示返回 HTTP 状态码。
* `CAPTCHA`：表示启用验证码进行验证，只有通过验证才解除拉黑。同时，你必须设置 [waf_captcha](#waf-captcha)。
* `follow`：尊重 ModSecurity 规则的动作，仅可用于参数 `modsecurity`。

参数说明：

* `blacklist`：表示所有基于黑名单的规则，比如 IP 黑名单、User-Agent 黑名单、URL 黑名单等。
* `cc_deny`: CC 防护。
* `modsecurity`：ModSecurity 规则。
* `verify_bot`：友好爬虫验证。
* `zone`：设置用于记录必要信息的共享内存，当且仅当某个 `action` 为 `CAPTCHA` 时才需要设置。


## `waf_block_page`

* 配置语法: waf_block_page \< *default* | *path/to/file.html* \>
* 默认配置: ——
* 配置段: http, server, location


用于设置当请求被拦截时返回的页面，`default` 为一个内置的 HTML 文件，它来自 `assets/block.html`，\[数据删除\] 是 \[数据删除\]。