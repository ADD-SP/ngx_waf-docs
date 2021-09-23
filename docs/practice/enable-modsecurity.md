---
title: Enable ModSecurity
lang: en
---

# Enable ModSecurity <Badge text="Latest Current version only" type="tip"/>

The default rules provided by this project are very easy to bypass and many users have difficulty maintaining a reliable set of rules.

In this case, you can enable [ModSecurity](https://github.com/SpiderLabs/ModSecurity) and load the [OWSAP (Open Web Application Security Project) core rule set](https://owasp.org/www-project-modsecurity-core-rule-set/) to strengthen the protection.


## Step 1: Download the rule set

```shell
cd /usr/local/src
git clone https://github.com/SpiderLabs/ModSecurity.git
git clone https://github.com/coreruleset/coreruleset.git
```

## Step 2: Copy the rules file

```shell
mkdir -p /etc/nginx/rules/modsecurity
cp coreruleset/crs-setup.conf.example /etc/nginx/rules/modsecurity/crs-setup.conf
cp ModSecurity/modsecurity.conf-recommended /etc/nginx/rules/modsecurity/modsecurity.conf
cp ModSecurity/unicode.mapping /etc/nginx/rules/modsecurity/unicode.mapping
cp -r coreruleset/rules /etc/nginx/rules/modsecurity/owasp
```

## Step 3: Edit rules

1. Edit `/etc/nginx/rules/modsecurity/modsecurity.conf` and change `SecRuleEngine DetectionOnly` to `SecRuleEngine on`.
2. Edit `/etc/nginx/rules/modsecurity/modsecurity.conf` and append the following at the end of the file.
    ```
    Include /usr/local/src/ngx_waf/assets/rules/crs-setup.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-901-INITIALIZATION.conf

    # If your site uses Durpal, you should uncomment the following line.
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9001-DRUPAL-EXCLUSION-RULES.conf

    # If your site uses Nextcloud, you should uncomment the following line.
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9003-NEXTCLOUD-EXCLUSION-RULES.conf

    # If your site uses Wordpress, you should uncomment the following line.
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9002-WORDPRESS-EXCLUSION-RULES.conf

    # If your site uses DokuWiki, you should uncomment the following line.
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-903.9004-DOKUWIKI-EXCLUSION-RULES.conf

    # If your site uses XenForo, you should uncomment the following line.
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

    # If your site uses PHP, you should uncomment the following two lines.
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-933-APPLICATION-ATTACK-PHP.conf
    # Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-953-DATA-LEAKAGES-PHP.conf

    # If your site uses NodeJS, you should uncomment the following line.
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-934-APPLICATION-ATTACK-NODEJS.conf

    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-941-APPLICATION-ATTACK-XSS.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-942-APPLICATION-ATTACK-SQLI.conf
    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-943-APPLICATION-ATTACK-SESSION-FIXATION.conf

    # If your site uses Java, you should uncomment the following two lines.
    # Include /etc/nginx/rules/modsecurity/owasp/REQUEST-944-APPLICATION-ATTACK-JAVA.conf
    # Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-952-DATA-LEAKAGES-JAVA.conf

    Include /etc/nginx/rules/modsecurity/owasp/REQUEST-949-BLOCKING-EVALUATION.conf
    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-950-DATA-LEAKAGES.conf
    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-951-DATA-LEAKAGES-SQL.conf
    
    # If you are using IIS (Internet Information Services), you should uncomment the following line.
    # Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-954-DATA-LEAKAGES-IIS.conf

    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-959-BLOCKING-EVALUATION.conf
    Include /etc/nginx/rules/modsecurity/owasp/RESPONSE-980-CORRELATION.conf

    # This ID corresponds to a rule that has serious false positives and is therefore disabled.
    SecRuleRemoveById 920100
    ```
3. Edit `/etc/nginx/rules/modsecurity/crs-setup.conf` and comment out the following two lines. You can skip this step if there are many false positives.
    ```
    SecDefaultAction "phase:1,log,auditlog,pass"
    SecDefaultAction "phase:2,log,auditlog,pass"
    ```
3. Edit `/etc/nginx/rules/modsecurity/crs-setup.conf` and uncomment the following two lines. You can skip this step if there are many false positives.
    ```
    SecDefaultAction "phase:1,log,auditlog,deny,status:403"
    SecDefaultAction "phase:2,log,auditlog,deny,status:403"
    ```

## Step 4: Load Rules

Edit the nginx configuration file.

```nginx
waf_modsecurity on file=/etc/nginx/rules/modsecurity/modsecurity.conf;
```

## Step 5: Optimize performance

Enabling rules causes a significant performance degradation due to the complexity of ModSecurity's rules engine, but this also gives it power.

Generally we do not need to inspect some static files, so we can optimize performance based on this.

Edit the nginx configuration file.

```nginx
location ~* \.(gif|jpg|png|jpeg|webp|bmp|swf)$ {
    waf_modsecurity off;
}

location ~* \.(html|htm|js|css)$ {
    waf_modsecurity off;
}
```

## Step 6: Restart nginx

```shell
nginx -s stop
nginx
```

::: warning Why not nginx -s reload ?

* [ngin reload memory leak · Issue #2552 · SpiderLabs/ModSecurity](https://github.com/SpiderLabs/ModSecurity/issues/2552)
* [It often leads memory leak on nginx reload · Issue #2502 · SpiderLabs/ModSecurity](https://github.com/SpiderLabs/ModSecurity/issues/2502)

:::

## Step 7: Testing

Visit `/.bashrc` and if it returns 403 then ModSecurity was successfully enabled. you should see the following log in `error.log`.

```
2021/01/01 00:00:00 [alert] 11#11: *11111 ngx_waf: [ModSecurity][[client 127.0.0.1] ModSecurity: Access denied with code 403 (phase 2). Matched "Operator `PmFromFile' with parameter `restricted-files.data' against variable `REQUEST_FILENAME' (Value: `/.bashrc' ) [file "/etc/nginx/rules/modsecurity/owasp/REQUEST-930-APPLICATION-ATTACK-LFI.conf"] [line "105"] [id "930130"] [rev ""] [msg "Restricted File Access Attempt"] [data "Matched Data: .bashrc found within REQUEST_FILENAME: /.bashrc"] [severity "2"] [ver "OWASP_CRS/3.3.2"] [maturity "0"] [accuracy "0"] [tag "application-multi"] [tag "language-multi"] [tag "platform-multi"] [tag "attack-lfi"] [tag "paranoia-level/1"] [tag "OWASP_CRS"] [tag "capec/1000/255/153/126"] [tag "PCI/6.5.4"] [hostname "xxxxxxx"] [uri "/.bashrc"] [unique_id "xxxxxxxx"] [ref "utf8toUnicode,t:urlDecodeUni,t:normalizePathWin,t:lowercase"]] while logging request, client: 127.0.0.1, server: example.org, request: "GET /.bashrc HTTP/2.0", host: "example.org"
```

At this point you should check your website to make sure that no false positives will cause your website to be abnormal.

## Step 8: Handling false positives

* [Including OWASP ModSecurity Core Rule Set – Welcome to netnea](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/#step_7_handling_false_positives_disabling_individual_rules)
* [Handling False Positives with the OWASP ModSecurity Core Rule Set – Welcome to netnea](https://www.netnea.com/cms/apache-tutorial-8_handling-false-positives-modsecurity-core-rule-set/)
* [Reference Manual (v2.x) · SpiderLabs/ModSecurity Wiki](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29)