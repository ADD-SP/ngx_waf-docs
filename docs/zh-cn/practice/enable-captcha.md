---
title: 开启验证码
lang: zh-CN
---

# 开启验证码 <Badge text="仅限最新的 Current 版本" type="tip"/>

当你的站点受到 CC 攻击时开启验证码是不错的选择，因为验证码可以帮助你进行人机识别。

1. 本模块目前支持三种验证码，分别是 [hCaptcha](https://www.hcaptcha.com/)、[reCAPTCHAv2](https://developers.google.com/recaptcha) 和 [reCAPTCHAv3](https://developers.google.com/recaptcha)。你应该选择一个并从其网站上申请到 Sitekey 和 Secret。
2. 访问本项目目录下的 `assets/` 目录并找到对应的 HTML 文件，然后拷贝一份到任意路径。例如，如果你使用 [hCaptcha](https://www.hcaptcha.com/)，你应该拷贝 `assets/hCaptcha.html`。
3. 修改拷贝出来的 HTML 文件，将字符串 `Your Sitekey` 修改为你从验证码平台申请到的 Sitekey。
4. 修改 nginx 的配置文件
    * 为整个站点开启验证码。
        ```nginx
        server {
            # /path/to/copy.html 是你拷贝并修改的 HTML 文件的完整路径
            # your_secret 是你从验证码平台申请道德 Secret
            waf_captcha on prov=hCaptcha file=/path/to/copy.html secret=your_secret;
        }
        ```
    * 为某个路径开启验证码
        ```nginx
        # /path/to/copy.html 是你拷贝并修改的 HTML 文件的完整路径
        # your_secret 是你从验证码平台申请道德 Secret
        location {
            waf_captcha on prov=hCaptcha file=/path/to/copy.html secret=your_secret;
        }
        ```
    * 当访问频率过高时开启验证码
        ```nginx
        # 当访问频率超出限制时会使用验证码进行人机识别，识别失败则拉黑。
        waf_cc_deny CAPTCHA rate=1000r/m duration=1h;
        # /path/to/copy.html 是你拷贝并修改的 HTML 文件的完整路径
        # your_secret 是你从验证码平台申请道德 Secret
        waf_captcha off prov=hCaptcha file=/path/to/copy.html secret=your_secret;
        ```
5. 重启 nginx。

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