---
title: 抵御分布式 CC 攻击（分布式 HTTP 洪水）
lang: zh-CN
---

# 抵御分布式 CC 攻击（分布式 HTTP 洪水）

CC 攻击（HTTP 洪水）是指发送大量的 HTTP 请求来耗尽服务器的资源。

如果攻击者使用的 IP 较少则防御较为简单，因为只需要限制 IP 的请求频率，
但是如果攻击者使用大量的 IP 进行攻击，仅仅限制 IP 的请求频率是无济于事的。
这种使用大量 IP 进行 CC 攻击的方式称为分布式 CC 攻击或分布式 HTTP 洪水。

本模块提供了一些缓解方式。

## 开启验证码

详见[开启验证码](enable-captcha.md)。

## 使用五秒盾

你可能听说过 Cloudflare 的五秒盾，本模块的五秒盾和 Cloudflare 的完全不同。 它的功能是检测客户端是否能够正确地支持 Cookie，比如发送 Cookie 和正确地处理 `Set-Cookie` 响应头。

你可以从本项目的 `assets/` 目录下找到 `under-attack.html` 并将其拷贝到某个路径下，然后通过修改 nginx 的配置文件来开启五秒盾。

### LTS 版本

* 为整个网站开启五秒盾
    ```nginx
    server {
        waf_under_attack on file=/path/to/under_attack.html;
    }
    ```
* 为某个路径开启五秒盾
    ```nginx
    location /path {
        waf_under_attack on file=/path/to/under_attack.html;
    }
    ```

### Current 版本

* 为整个网站开启五秒盾
    ```nginx
    server {
        waf_under_attack on;
    }
    ```
* 为某个路径开启五秒盾
    ```nginx
    location /path {
        waf_under_attack on;
    }
    ```

## 降低带宽占用

详见[被攻击时降低带宽占用](reduce-bandwidth-usage-when-attacked.md)。