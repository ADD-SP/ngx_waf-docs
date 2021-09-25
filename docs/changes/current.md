---
title: Current
lang: en
---

# Change Log (Current)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

::: tip What is a breaking change?

* The original configuration file may not work, for example, if a directive item is removed or renamed.
* It may be necessary to update the build environment, such as installing new dependencies.

:::

## [Unreleased]

### Added
 

### Removed


### Changed


### Fixed


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