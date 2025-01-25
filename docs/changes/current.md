---
title: Current
lang: en
---

# Change Log (Current)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

::: tip What is a breaking change?

* The old configuration file may not work, for example, if a directive item is removed or renamed.

:::

## [Unreleased]

### Added
 

### Removed


### Changed


### Fixed


***

## [10.1.2] - 2022-07-09 UTC+0800

### Fixed

* compatible with `nginx-1.23.0`

***

## [10.1.1] - 2022-01-07 UTC+0800

### Added

* PCRE2 library support. 

### Fixed

* Memory leak.

* CAPTCHA and Under-Attack-Mode sometimes cause infinite page refreshes.


***

## [10.1.0] - 2021-12-14 UTC+0800

### Added

* You can set the directive `waf` to ` bypass`, in which case no requests will be intercepted, but ngx_waf will still do the detection and logging.

* The directive `waf_verify_bot` has a new parameter `SogouSpider`, which is used to verify if it is a Sogou crawler.


### Fixed

* Garbage collection is not running, which does not lead to memory leaks, but does lead to performance problems.

* Sometimes the `[FAKE-BOT]` log is printed incorrectly.

***

## [10.0.1] - 2021-12-05 UTC+0800

### Added

* Added two Easter eggs, which you can find clues in the documentation. These two eggs are not triggered automatically and need to be enabled manually.

### Fixed

* All parameters of the directive `waf_mode` corresponding to the request method are not working.


***

## [10.0.0] - 2021-11-30 UTC+0800

### Added

* New directive `waf_zone`, used to declare a piece of shared memory that will be used for other directives, such as `waf_cc_deny`.

* New directive `waf_action`, used to set actions after intercepting a request, such as returning a specific status code or challenging the client with a captcha.

* New directive `waf_block_page`, used to set the blocking page to return the specified HTML file when the request is blocked.

* A new embedded variable, `$waf_rate`, is used to indicate the number of accesses to the current IP in a period. The period is determined by the parameter `rate` of the directive `waf_cc_deny`, or by the parameter `duration` if the IP has been blacked out.

* The directive `waf_captcha` has a new parameter `max_fails`, which sets the maximum number of attempts for the captcha and the blocking time after it is exceeded.

* The directive `waf_captcha` has a new parameter `zone` that specifies a piece of shared memory, which needs to be set if and only if the parameter `max_fails` is set.

* The directive `waf_captcha` has a new parameter `sitekey`, which needs to be set if and only if the parameter `file` is omitted.

* When you reload nginx, the module keeps as much information in shared memory as possible so that it is not emptied, such as statistics used by CC protection.


### Removed

* The directive `waf_http_status` has been removed and the related features have been merged into the directive `waf_action`.

* The parameter `size` of the directive `waf_cc_deny` has been removed and `zone` is now used instead.


### Changed

* You can omit the parameter `file` of the directive `waf_under_attack`; omitting this parameter will use a built-in file from `assets/under_attack.html`.

* You can omit the argument `file` to the directive `waf_captcha`, which when omitted will use a built-in file based on the value of the argument `prov`, which comes from the directory `assets/`.


***


## [9.0.6] - 2021-10-10 UTC+0800

### Fixed

* If the directive `try_files` is executed, CAPTCHA may fail.

***


## [9.0.5] - 2021-10-09 UTC+0800

### New test suite

By chance, I found a test suite: [test-nginx](https://github.com/openresty/test-nginx).
It looked great, so I wrote a lot of test cases and tested with it. <del>Un</del>fortunately I found a lot of bugs, very wise of me.

### Changed

* Removed useless debug log.

* More debug log.

### Fixed

* Sometimes the connection is closed prematurely.

* When CAPTCHA is enabled, the request body inspection may be wrong.

* CAPTCHA may fail due to HTTP caching.

* Memory leak when reloading nginx.

* Failed to properly merge directive `waf_cache` from different contexts.

* Failed to properly merge directives `waf_cc_deny` from different contexts.

* Failed to inherit `Referer` blacklist different contexts.

* Failed to properly handle incorrect command syntax.

* Fixed a default rule of URL.

* Fixed the following files so that the page can be refreshed automatically after the CAPTCHA is completed.
    * `assets/hCaptcha.html`
    * `assets/reCAPTCHAv2_Checkbox.html`
    * `assets/reCAPTCHAv2_Invisible.html`
    * `assets/reCAPTCHAv3.html`


***

## [9.0.4] - 2021-09-29 UTC+0800

### Fixed

* All inspections are incorrectly skipped when the directive `rewrite` causes an internal redirect.

***

## [9.0.3] - 2021-09-28 UTC+0800

### Changed

* More debug logs.

### Fixed

* Failed to display the CAPTCHA page.

***

## [9.0.2] - 2021-09-25 UTC+0800

### Fixed

* Sometimes the value of the built-in variable `$waf_blocking_log` is wrong.

***

## [9.0.1] - 2021-09-24 UTC+0800

### Fixed

* Failed to load rules of ModSecurity.

***

## [9.0.0] - 2021-09-23 UTC+0800

### **NOTE**

If you would like to upgrade to this version, please see the documentation for guidelines on upgrading across versions.

### Added

* Compatible with [ModSecurity](https://github.com/SpiderLabs/ModSecurity).

* Added two directives: `waf_modsecurity` and `waf_modsecurity_transaction_id`.

* Added parameter `MODSECURITY` to directive `waf_priority`.

### Removed

* Removed some parameters for directive `waf_mode`: `LIBINJECTION`, `LIBINJECTION-SQLI`, `LIBINJECTION-XSS` and `ADV`.

* Removed the parameter `ADV` from the directive `waf_priority`.

* Removed dependency [libinjection](https://github.com/libinjection/libinjection).

### Fixes

* No longer returns a 404 status code when the captcha succeeds, but a 204 status code instead.

* Sometimes a complete inspection of the request body is not performed.

***

## [8.0.3] - 2021-08-27 UTC+0800

### Fixed

* Memory leak.

* A field of a structure is not initialized, so you will see a lot of `malloc(size) failed (12: Out of memory)` in the error log.

***

## [8.0.2] - 2021-08-27 UTC+0800

### Fixed

* nginx crashes(segmentation fault) after enabling CAPTCHA because the directive `waf_captcha` was not properly merged with different contexts.

* CAPTCHA page cannot be displayed because the directive `waf_captcha` was not properly merged with different contexts.

* If the directive `proxy_pass` is used, neither Under-Attack-Mode nor CAPTCHA will work properly.

***

## [8.0.1] - 2021-08-23 UTC+0800

### Added

* No longer generates additional response headers when CC protection returns the status code 444.

### Fixed

* Segmentation fault when `User-Agent` is empty.

* The directive `waf_http_status` could not be merged correctly.

***

## [8.0.0] - 2021-08-21 UTC+0800

### **NOTE**

If you would like to upgrade to this version, please see the documentation for guidelines on upgrading across versions.

### Added

* Introduced CAPTCHAs for third-party platforms, supporting hCaptcha, reCAPTCHAv2 and reCAPTCHAv3, with the associated directive `waf_captcha`.

* Support recognizing friendly crawlers, including GooleBot, BingBot, BaiduSpider and YandexBot, and automatically allow them after successful recognition, the related command is `waf_verify_bot`.

* CC protection supports enabling CAPTCHA mode, which enables CAPTCHA when the request rate exceeds the limit, and blocks the IP if the CAPTCHA fails three times in a row, and recounts the request rate on the contrary.


### Changed

* The syntax of the directive `waf_mode` has changed, see the documentation for a guide to cross-version upgrades.

* The syntax of the directive `waf_cc_deny` has changed, see the documented guide to cross-version upgrades for details.

* The syntax of the directive `waf_cache` has been changed, see the cross-version upgrade guide in the documentation.

* Support for modifying the priority of request body inspection.


### Removed

* Removed two parameters of the directive `waf_cache`: `interval` and `percent`.


***

## [7.1.0] - 2021-08-16 UTC+0800

### Added

* The parameter `rate` of the directive `waf_cc_deny` allows more formats, such as `500r/s`, `500r/60s`, `500r/m`, `500r/60m`, `500r/h`, `500r/60h` and `500r/d`.

***

## [7.0.1] - 2021-08-11 UTC+0800

### Fixed

* Failed to parse `0.0.0.0/0` correctly when handling IP black and white lists.

* Compatible with environments that do not support IPV6.

***

## [7.0.0] - 2021-08-04 UTC+0800

### Changed

* Changed the way Under Attack Mode is implemented. It is no longer implemented using redirects, but by modifying the response body.

* Removed directive `uri` from configuration item `waf_under_attack`, see documentation for details.

* Added a directive `file` to the configuration item `waf_under_attack` whose value should be the absolute path to an HTML file, see the documentation for details.

* The directive `waf_cc_deny` is not allowed at the context `http`。