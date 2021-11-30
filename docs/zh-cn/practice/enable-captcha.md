---
title: 开启验证码
lang: zh-CN
---

# 开启验证码 <Badge text="仅限最新的 Current 版本" type="tip"/>

当你的站点受到 CC 攻击时开启验证码是不错的选择，因为验证码可以帮助你进行人机识别。

1. 本模块目前支持三种验证码，分别是 [hCaptcha](https://www.hcaptcha.com/)、[reCAPTCHAv2](https://developers.google.com/recaptcha) 和 [reCAPTCHAv3](https://developers.google.com/recaptcha)。你应该选择一个并从其网站上申请到 Sitekey 和 Secret。
2. 修改 nginx 的配置文件
    * 为整个站点开启验证码。
        ```nginx
        server {
            waf_captcha on prov=hCaptcha secret=your_secret sitekey=your_sitekey;
        }
        ```
    * 为某个路径开启验证码
        ```nginx
        location {
            waf_captcha on prov=hCaptcha secret=your_secret sitekey=your_sitekey;
        }
        ```
    * 当访问频率过高时开启验证码
        ```nginx
        http {
            waf_zone name=waf size=20m;
            server {
                waf_cc_deny on rate=1000r/m duration=1h zone=waf:cc;
                waf_captcha off prov=hCaptcha secret=your_secret sitekey=your_sitekey;
                waf_action cc_deny=CAPTCHA zone=waf:action;
            }
        }
        ```
3. 重启 nginx。

::: warning 警告

如果你配置了伪静态规则，或者配置了路径重写，你需要保证路径 `/captcha` 不被重写。
下面是一个修改示例。

```nginx
# BEGIN 修改前
if (! -e $request_filename) {
    rewrite ^(.*)$ index.php?s=$1 last break;
}
# END   修改前

# BEGIN 修改后
try_files $uri $uri/ index.php?s=$1;
# END   修改后
```

:::


::: tip SEO 优化

开启验证码会影响到搜索引擎的工作，
所有你可以使用 [waf_verify_bot](/zh-cn/advance/directive.md#waf-verify-bot) 来放行某些搜索引擎的爬虫。

```nginx
waf_verify_bot on;
```

:::