---
title: Enable CAPTCHA
lang: en
---

# Enable CAPTCHA <Badge text="Latest Current version only" type="tip"/>

When your website is under CC attack, it is good to turn on CAPTCHA because CAPTCHA can help you identify the real users.

1. This module currently supports three CAPTCHAs, [hCaptcha](https://www.hcaptcha.com/), [reCAPTCHAv2](https://developers.google.com/recaptcha) and [reCAPTCHAv3](https://developers.google.com/recaptcha). You should choose one and get the Sitekey and Secret from their website.
2. Go to `assets/` in the project's directory and find the corresponding HTML file, then copy it to any path. For example, if you are using [hCaptcha](https://www.hcaptcha.com/), you should copy `assets/hCaptcha.html`.
3. Modify the copied HTML file by changing the string `Your Sitekey` to the Sitekey you got from the CAPTCHA platform.
4. Modify the nginx configuration.
    * Enable CAPTCHA for entire site.
        ```nginx
        server {
            waf_captcha on prov=hCaptcha file=/path/to/copy.html secret=your_secret;
        }
        ```
    * Enable CAPTCHA for a path
        ```nginx
        location {
            waf_captcha on prov=hCaptcha file=/path/to/copy.html secret=your_secret;
        }
        ```
    * Enable CAPTCHA when request rate is too high
        ```nginx
        waf_cc_deny CAPTCHA rate=1000r/m duration=1h;
        waf_captcha off prov=hCaptcha file=/path/to/copy.html secret=your_secret;
        ```
5. Restart nginx.

::: warning WARNING

If you have some pseudo-static configuration, or some path rewriting configuration, you need to make sure that the path `/captcha` is not rewritten.
Here is a sample modification.

```nginx
# BEGIN Before modification
if (! -e $request_filename) {
    rewrite ^(.*)$ index.php?s=$1 last break;
}
# END   After modification

# BEGIN Before modification
try_files $uri $uri/ index.php?s=$1;
# END   After modification
```

:::


::: tip SEO OPTIMIZATION

Enable CAPTCHA will affect search engine crawling, 
you can use [waf_verify_bot](/advance/directive.md#waf-verify-bot) to allow certain search engine crawlers.

```nginx
waf_verify_bot on;
```

:::