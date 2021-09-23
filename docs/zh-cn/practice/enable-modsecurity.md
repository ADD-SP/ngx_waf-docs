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
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-901-INITIALIZATION.conf

    # 如果你的网站使用了 Durpal，你应该取消下面这行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9001-DRUPAL-EXCLUSION-RULES.conf

    # 如果你的网站使用了 Nextcloud，你应该取消下面这行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9003-NEXTCLOUD-EXCLUSION-RULES.conf

    # 如果你的网站使用了 Wordpress，你应该取消下面这行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9002-WORDPRESS-EXCLUSION-RULES.conf

    # 如果你的网站使用了 DokuWiki，你应该取消下面这行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9004-DOKUWIKI-EXCLUSION-RULES.conf

    # 如果你的网站使用了 XenForo，你应该取消下面这行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9006-XENFORO-EXCLUSION-RULES.conf

    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-905-COMMON-EXCEPTIONS.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-910-IP-REPUTATION.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-911-METHOD-ENFORCEMENT.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-912-DOS-PROTECTION.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-913-SCANNER-DETECTION.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-920-PROTOCOL-ENFORCEMENT.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-921-PROTOCOL-ATTACK.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-930-APPLICATION-ATTACK-LFI.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-931-APPLICATION-ATTACK-RFI.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-932-APPLICATION-ATTACK-RCE.conf

    # 如果你的网站使用了 PHP，你应该取消下面这两行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-933-APPLICATION-ATTACK-PHP.conf
    # Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-953-DATA-LEAKAGES-PHP.conf

    # 如果你的网站使用了 NodeJS，你应该取消下面这行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-934-APPLICATION-ATTACK-NODEJS.conf

    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-941-APPLICATION-ATTACK-XSS.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-942-APPLICATION-ATTACK-SQLI.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-943-APPLICATION-ATTACK-SESSION-FIXATION.conf

    # 如果你的网站使用了 Java，你应该取消下面这两行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-944-APPLICATION-ATTACK-JAVA.conf
    # Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-952-DATA-LEAKAGES-JAVA.conf

    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-949-BLOCKING-EVALUATION.conf
    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-950-DATA-LEAKAGES.conf
    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-951-DATA-LEAKAGES-SQL.conf
    
    # 如果你使用了 IIS(Internet Information Services)，你应该取消下面这行的注释。
    # Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-954-DATA-LEAKAGES-IIS.conf

    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-959-BLOCKING-EVALUATION.conf
    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-980-CORRELATION.conf

    # 此 ID 对应的规则误报严重，故禁用。
    SecRuleRemoveById 920100
    ```
3. 编辑 `/etc/nginx/rules/modsecurity/crs-setup.conf`，将下面这两行注释。如果误报很多你可以不执行此步。
    ```
    SecDefaultAction "phase:1,log,auditlog,pass"
    SecDefaultAction "phase:2,log,auditlog,pass"
    ```
4. 编辑 `/etc/nginx/rules/modsecurity/crs-setup.conf`，取消下面这两行的注释。如果误报很多你可以不执行此步。
    ```
    SecDefaultAction "phase:1,log,auditlog,deny,status:403"
    SecDefaultAction "phase:2,log,auditlog,deny,status:403"
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

访问 `/.bashrc`，如果返回 403 则表示成功启用了 ModSecurity。你应该可以在 `error.log` 中看到下列日志。

```
2021/01/01 00:00:00 [alert] 11#11: *11111 ngx_waf: [ModSecurity][[client 127.0.0.1] ModSecurity: Access denied with code 403 (phase 2). Matched "Operator `PmFromFile' with parameter `restricted-files.data' against variable `REQUEST_FILENAME' (Value: `/.bashrc' ) [file "/etc/nginx/rules/modsecurity/owasp/REQUEST-930-APPLICATION-ATTACK-LFI.conf"] [line "105"] [id "930130"] [rev ""] [msg "Restricted File Access Attempt"] [data "Matched Data: .bashrc found within REQUEST_FILENAME: /.bashrc"] [severity "2"] [ver "OWASP_CRS/3.3.2"] [maturity "0"] [accuracy "0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-lfi"] [tag "paranoia-level/1"] [tag "OWASP_CRS"] [tag "capec/1000/255/153/126"] [tag "PCI/6.5.4"] [hostname "xxxxxxx"] [uri "/.bashrc"] [unique_id "xxxxxxxx"] [ref "utf8toUnicode,t:urlDecodeUni,t:normalizePathWin,t:lowercase"]] while logging request, client: 127.0.0.1, server: example.org, request: "GET /.bashrc HTTP/2.0", host: "example.org"
```

此时你应该检查网站的运行情况，确保不会因为误报而导致网站异常。

## 第八步：处理误报

处理误报需要对 ModSecurity 的规则语法有所了解，本文不提供这类信息，你可以访问下面的链接来获取相关信息。

* [Including OWASP ModSecurity Core Rule Set – Welcome to netnea](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/#step_7_handling_false_positives_disabling_individual_rules)
* [Reference Manual (v2.x) · SpiderLabs/ModSecurity Wiki](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29)





