---
title: 拦截请求时启用验证码
lang: zh-CN
---

# 拦截请求时启用验证码 <Badge text=">=v10.0.0" type="tip"/>

如今，许多攻击者都会使用自动工具攻击服务器，这些自动工具会尝试每一个漏洞，有的会被安全措施所拦截，有的则可以躲避检测。
如果攻击者觉得你的价值比较高，可能会手动攻击你的服务。我们并不能完美地防御这些攻击，但却能很简单地提高攻击的成本。

当一个请求被拦截时，ngx_waf 会对该 IP 启用验证码，此时该 IP 想要继续访问就必须完成验证码。这基本可以废掉多数的自动攻击工具，因为这些工具会尝试每一个漏洞，而我们总能识别一些明显的攻击请求并启用验证码，而自动工具时难以通过验证的。对于手动攻击者，这也能提高他们的时间成本。

下面是一个示例配置。

```nginx
http {
    waf_zone name=waf size=20m;
    
    server {
        waf_captcha off prov=xxx sitekey=xxx secret=xxx;
        waf_action blacklist=CAPTCHA zone=waf:action;
    }
}
```