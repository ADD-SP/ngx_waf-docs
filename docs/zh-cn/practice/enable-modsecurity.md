---
title: 开启 ModSecurity
lang: zh-CN
---

# 开启 ModSecurity <Badge text="仅限最新的 Current 版本" type="tip"/>

本项目提供的默认规则十分容易被绕过，而且许多用户并没有足够的能力和时间去维护一套可靠的规则。

这种情况下你可以选择启用 [ModSecurity](https://github.com/SpiderLabs/ModSecurity) 并启用 [OWSAP(Open Web Application Security Project) 核心规则集](https://owasp.org/www-project-modsecurity-core-rule-set/) 来增强防护能力。


## 第一步：下载规则集

```shell
cd /usr/local/src
git clone https://github.com/SpiderLabs/ModSecurity.git
git clone https://github.com/coreruleset/coreruleset.git
```

## 第二步：拷贝规则文件

```shell
mkdir -p /etc/nginx/rules/modsecurity
cp coreruleset/crs-setup.conf.example /etc/nginx/rules/modsecurity/crs-setup.conf
cp ModSecurity/modsecurity.conf-recommended /etc/nginx/rules/modsecurity/modsecurity.conf
cp ModSecurity/unicode.mapping /etc/nginx/rules/modsecurity/unicode.mapping
cp -r coreruleset/rules /etc/nginx/rules/modsecurity/owasp
```

## 第三步：修改规则文件


1. 编辑 `/etc/nginx/rules/modsecurity/modsecurity.conf`，将 `SecRuleEngine DetectionOnly` 修改为 `SecRuleEngine on`。
2. 编辑 `/etc/nginx/rules/modsecurity/modsecurity.conf`，在文件末尾追加下列内容。
    ```
    Include /usr/local/src/ngx_waf/assets/rules/crs-setup.conf
    Include /etc/nginx/rules/modsecurity/owasp/*.conf
    ```

## 第四步：加载规则

编辑 nginx 的配置文件。

```nginx
waf_modsecurity on file=/etc/nginx/rules/modsecurity/modsecurity.conf;
```

## 第五步：优化性能

启用规则后会导致性能大幅度降低，这是因为 ModSecurity 的规则引擎十分复杂，但这也为其带来了强大的功能。

一般来说我们无需对一些静态文件进行检查，因此可以根据这一点来优化性能。

编辑 nginx 的配置文件。

```nginx
location ~* \.(gif|jpg|png|jpeg|webp|bmp|swf)$ {
    waf_modsecurity off;
}

location ~* \.(html|htm|js|css)$ {
    waf_modsecurity off;
}
```

## 第六步：重启 nginx

```shell
nginx -s stop
nginx
```

::: warning 为什么不用 nginx -s reload ？

因为目前 ModSecurity 存在内存泄露的 bug，直接重载 nginx 会导致内存泄露和性能降低。

* [ngin reload memory leak · Issue #2552 · SpiderLabs/ModSecurity](https://github.com/SpiderLabs/ModSecurity/issues/2552)
* [It often leads memory leak on nginx reload · Issue #2502 · SpiderLabs/ModSecurity](https://github.com/SpiderLabs/ModSecurity/issues/2502)

:::

## 第七步：测试

此时你应该检查网站的运行情况，确保不会因为误报而导致网站异常。

## 第八步：处理误报

处理误报需要对 ModSecurity 的规则语法有所了解，本文不提供这类信息，你可以访问下面的链接来获取相关信息。

* [Including OWASP ModSecurity Core Rule Set – Welcome to netnea](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/#step_7_handling_false_positives_disabling_individual_rules)
* [Reference Manual (v2.x) · SpiderLabs/ModSecurity Wiki](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29)





