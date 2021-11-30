---
title: Cross-version Upgrades
lang: en
---

# Cross-version Upgrades

To upgrade the module, you need to reinstall it according to the instructions in [installation guide](/guide/installation.md).

## Upgrade from `9.x.x` to `10.x.x`

1. If you use the directive `waf_http_status`, replace it with the directive `waf_action` according to the documentation.
2. If you set the parameter `size` of the directive `waf_cc_deny`, you should replace it with the parameter `zone` according to the documentation.
3. If you use the parameter `CAPTCHA` of the directive `waf_cc_deny`, you should use the directive `waf_action` instead, according to the documentation.

## Upgrade from `8.x.x` to `9.x.x`

1. Install the dynamic libraries and headers for [libmodsecurity](https://github.com/SpiderLabs/ModSecurity).
2. Run the command `git clone -b v2.3.0 https://github.com/troydhanson/uthash.git lib/uthash` in the root of the project.
3. Remove some parameters from the command `waf_mode`, if you are using them.
    * LIBINJECTION
    * LIBINJECTION-SQLI
    * LIBINJECTION-XSS
    * ADV
4. Delete the file `advanced` for advanced rules. 5.
5. The parameter `ADV` of the directive `waf_priority` is removed, please delete it if you use this parameter.
6. A new parameter `MODSECURITY` has been added to the directive `waf_priority`. If you use this directive, please fill in the parameter in the appropriate place.

## Upgrade from `7.x.x` to `8.x.x`

1. Install the dynamic libraries and headers for `libcurl`.
2. Run the command `git clone https://github.com/DaveGamble/cJSON.git lib/cjson` in the root of the project.
3. Run the command `git clone https://github.com/libinjection/libinjection.git lib/libinjection` at the root of the project.
4. If you used the directive `waf_mode` and used the directive's parameters `CC` or `CACHE`, remove both parameters. The function of each of these two parameters has been moved into the directive `waf_cc_deny` and `waf_cache` respectively. 
5. If you want to enable CC protection, change the parameter of the directive `waf_cc_deny`, for example, change `waf_cc_deny rate=2000r/m duration=1h` to `waf_cc_deny on rate=2000r/m duration=1h`.
6. If you want to enable caching, change the parameter of the directive `waf_cache`, for example, change `waf_cache capacity=50` to `waf_cache on capacity=50`.
7. If you use the directives `waf_cc_deny` or `waf_cache` in the `http` context, move these two directives to a lower context, such as to the `server` context.
8. If you use the directive `waf_cache` and use the directive's parameters `interval` or `percent`, remove these two parameters, which have been removed.
9. If you use the directive `waf_priority`, add `VERIFY-BOT` and `CAPTCHA` to it.

## Upgrade from `6.x.x` to `7.x.x`

1. If you use the directive `waf_cc_deny` in the `http` block, move this directive to a more internal level.

## Upgrade from `5.x.x` to `6.x.x`

1. Create a new empty file named `advanced` in the rules directory.
2. If the directive `waf_priority` is used, you can delete it or modify it according to the directive in the documentation.

