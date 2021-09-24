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
    Include /etc/nginx/rules/modsecurity/owasp/*.conf
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

At this point you should check your website to make sure that no false positives will cause your website to be abnormal.

## Step 8: Handling false positives

* [Including OWASP ModSecurity Core Rule Set – Welcome to netnea](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/#step_7_handling_false_positives_disabling_individual_rules)
* [Handling False Positives with the OWASP ModSecurity Core Rule Set – Welcome to netnea](https://www.netnea.com/cms/apache-tutorial-8_handling-false-positives-modsecurity-core-rule-set/)
* [Reference Manual (v2.x) · SpiderLabs/ModSecurity Wiki](https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29)