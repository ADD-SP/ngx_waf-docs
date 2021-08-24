---
title: Reduce bandwidth usage when attacked
lang: en
---

# Reduce bandwidth usage when attacked

When you are under CC attack, the attacker's IP has been banned by the CC protection, but your upstream and downstream bandwidth is still high.
This is because the CC protection returns a status code of 503 and therefore hogs your bandwidth.

You can use the following configuration to reduce the bandwidth usage.

```nginx
waf_http_status cc_deny=444;
```

Status code 444 is a non-standard HTTP status code defined by nginx that serves to close the connection and not send any data.

::: danger WARNING

If you use status code 444, then your site will look like it doesn't exist to the user. This is because web site errors usually have HTTP status codes to indicate errors.

If you visit a website and not only do you not see the page, but also there is no error message, then the website probably does not exist.

:::