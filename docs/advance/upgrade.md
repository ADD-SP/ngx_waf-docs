---
title: Cross-version Upgrades
lang: en
---

# Cross-version Upgrades

To upgrade the module, you need to reinstall it according to the instructions in [installation guide](/guide/installation.md).

## Upgrade from `5.x.x` to `6.x.x`

1. Create a new empty file named `advanced` in the rules directory.

2. If the directive `waf_priority` is used, you can delete it or modify it according to the directive in the documentation.

## Upgrade from `6.x.x` to `7.x.x`

1. If you use the directive `waf_cc_deny` in the `http` block, move this directive to a more internal level.

## Upgrade from `7.x.x` to `8.x.x`

1. Install the dynamic libraries and headers for `libcurl`. They are usually named `libcurl` and `libcurl-dev|libcurl-devel` in the package manager.

2. Run the command `git clone https://github.com/DaveGamble/cJSON.git lib/cjson` in the root of the project.

3. Run the command `git clone https://github.com/libinjection/libinjection.git lib/libinjection` at the root of the project.

4. If you used the directive `waf_mode` and used the directive's arguments `CC` or `CACHE`, remove both arguments. The function of each of these two parameters has been moved into the directive `waf_cc_deny` and `waf_cache` respectively. 

5. If you want to enable CC protection, change the parameter of the directive `waf_cc_deny`, for example, change `waf_cc_deny rate=2000r/m duration=1h` to `waf_cc_deny on rate=2000r/m duration=1h`.

6. If you want to enable caching, change the parameter of the directive `waf_cache`, for example, change `waf_cache capacity=50` to `waf_cache on capacity=50`.

7. If you use the directives `waf_cc_deny` or `waf_cache` in the `http` context, move these two directives to a lower context, such as to the `server` context.

8. If you use the directive `waf_cache` and use the directive's parameters `interval` or `percent`, remove these two parameters, which have been removed.

9. If you use the directive `waf_priority`, add `VERIFY-BOT` and `CAPTCHA` to it.

