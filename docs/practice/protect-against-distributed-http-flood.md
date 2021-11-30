---
title: Protect against distributed CC Attacks (distributed HTTP flooding)
lang: en
---

# Protect against distributed CC Attacks (distributed HTTP flooding)

CC is an attack that uses a large number of HTTP requests to exhaust the server's resources. 
This type of attack is known as HTTP flooding.

If the attacker uses a small number of IP, the protection is simpler because it is only necessary to limit rate of requests per IP.
But if the attacker uses a large number of IP to attack, simply limiting the rate of requests per IP will not help.
This type of CC attack using a large number of IP is called a distributed CC attack or distributed HTTP flooding.

This module provides some mitigation methods.

## Enable CAPTCHA

See [enable CAPTCHA](enable-captcha.md).

## Enable Under-Attack-Mode

You may have heard of Cloudflare's Under-Attack-Mode, this module's Under-Attack-Mode is completely different from Cloudflare's. 
Its role is to detect whether the client can correctly support cookies, such as sending cookies and correctly handle the response header `Set-Cookie`.

You can enable Under-Attack-Mode by copying the file `under-attack.html` from the project's directory `assets/` and copying it to a path, then modifying the nginx configuration file.

To enable Under-Attack-Mode, you need to copy the file `/path/to/ngx_waf/assets/under-attack.html` to a path, and then modify the nginx configuration file.

### LTS version

* Enable Under-Attack-Mode for entire site.
    ```nginx
    server {
        waf_under_attack on file=/path/to/under_attack.html;
    }
    ```
* Enable Under-Attack-Mode for a path.
    ```nginx
    location /path {
        waf_under_attack on file=/path/to/under_attack.html;
    }
    ```

### `Current` version


* Enable Under-Attack-Mode for entire site.
    ```nginx
    server {
        waf_under_attack on;
    }
    ```
* Enable Under-Attack-Mode for a path.
    ```nginx
    location /path {
        waf_under_attack on;
    }
    ```

## Reduce bandwidth usage when attacked

See [reduce bandwidth usage when attacked](reduce-bandwidth-usage-when-attacked.md).