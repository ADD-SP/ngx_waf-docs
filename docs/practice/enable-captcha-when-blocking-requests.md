---
title: Enable CAPTCHA when blocking requests
lang: en
---

# Enable CAPTCHA when blocking requests <Badge text=">=v10.0.0" type="tip"/>

Today, many attackers use automated tools to attack servers. These automated tools try every vulnerability, some of which are blocked by security measures, and some of which can evade detection.
Sometimes attackers will manually attack your service. We do not have a perfect defense against these attacks, but it is simple to increase the cost of the attack.

When a request is blocked, ngx_waf will use the CAPTCHA to challenge subsequent requests from this IP until the challenge is successful. This counteracts most automated attack tools, which try every exploit, and we can always identify some obvious attack requests and enable CAPTCHA, which is very difficult for automated tools to challenge successfully. For manual attackers, this greatly increases the cost of their time.

Here is an example.

```nginx
http {
    waf_zone name=waf size=20m;
    
    server {
        waf_captcha off prov=xxx sitekey=xxx secret=xxx;
        waf_action blacklist=CAPTCHA zone=waf:action;
    }
}
```