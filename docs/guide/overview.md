---
title: Overview
lang: en
---

# Overview

Handy, High performance Nginx firewall module.

## Why ngx_waf

* Basic protection: such as black and white list of IPs or IP range, uri black and white list, and request body black list, etc.
* Easy to use: configuration files and rule files are easy to write and readable.
* High performance: Efficient algorithms and caching.
* Advanced protection: Compatible with ModSecurity's rules, you can use OWASP ModSecurity Core Rule Set.
* Friendly crawler verification: Supports verifying Google, Bing, Baidu and Yandex crawlers and allowing them automatically to avoid false positives.
* Captcha: Supports three kinds of captchas: hCaptcha, reCAPTCHAv2 and reCAPTCHAv3.

## Features

* Rules that are compatible with [ModSecurity](https://github.com/SpiderLabs/ModSecurity).
* Anti SQL injection (powered by [libinjection](https://github.com/libinjection/libinjection)).
* Anti XSS (powered by [libinjection](https://github.com/libinjection/libinjection)).
* IPV4 and IPV6 support.
* Support for enabling CAPTCHAs, including [hCaptcha](https://www.hcaptcha.com/), [reCAPTCHAv2](https://developers.google.com/recaptcha) and [reCAPTCHAv3](https://developers.google.com/recaptcha).
* Support authentication-friendly crawlers (based on user agent and IP identification) to avoid blocking of these crawlers (e.g. GoogleBot).
* CC protection, if the request rate exceeds the limit, the IP will be automatically banned for a period of time, or use CAPTCHA to do human identification and allow it if successful..
* Exceptional allow on specific IP address.
* Block the specified IP or IP range.
* Block the specified request body.
* Exceptional allow on specific URL.
* Block the specified URL.
* Block the specified query string.
* Block the specified UserAgent.
* Block the specified Cookie.
* Exceptional allow on specific Referer.
* Block the specified Referer.


## Contact

* Telegram Channel: [https://t.me/ngx_waf](https://t.me/ngx_waf)
* Telegram Group (English): [https://t.me/group_ngx_waf](https://t.me/group_ngx_waf)
* Telegram Group (Chinese): [https://t.me/group_ngx_waf_cn](https://t.me/group_ngx_waf_cn)

## Performance Test

[Performance Test](test.md#performance-test)

## Thanks

* [uthash](https://github.com/troydhanson/uthash): C macros for hash tables and more.
* [libinjection](https://github.com/libinjection/libinjection): SQL / SQLI tokenizer parser analyzer.
* [libsodium](https://github.com/jedisct1/libsodium): A modern, portable, easy to use crypto library.
* [lastversion](https://github.com/dvershinin/lastversion): A command line tool that helps you download or install a specific version of a project.
* [ngx_lua_waf](https://github.com/loveshell/ngx_lua_waf): A web application firewall based on the lua-nginx-module (openresty).
* [nginx-book](https://github.com/taobao/nginx-book): The Chinese language development guide for nginx.
* [nginx-development-guide](https://github.com/baishancloud/nginx-development-guide): The Chinese language development guide for nginx.
