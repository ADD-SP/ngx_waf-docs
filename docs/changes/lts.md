---
title: Long-term Support (LTS)
lang: en
---

# Change Log (LTS)

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

## [6.1.10] - 2025-01-25 UTC+0800

### Fixed

* Fix compile error caused by changed build process of [libinjection](https://github.com/libinjection/libinjection)

***

## [6.1.9] - 2022-07-09 UTC+0800

### Fixed

* compatible with `nginx-1.23.0`

***

## [6.1.8] - 2022-01-07 UTC+0800

### Fixed

* Memory leak.

***

## [6.1.7] - 2021-12-05 UTC+0800

### Fixed

* All parameters of the directive `waf_mode` corresponding to the request method are not working.


***

## [6.1.6] - 2021-10-10 UTC+0800

### Fixed

* Sometimes the connection is closed prematurely.

* Sometimes the request body is read incompletely.

* Failed to inherit `Referer` blacklist different contexts.

* Fixed a default rule of URL.

***

## [6.1.5] - 2021-09-29 UTC+0800

### Fixed

* All inspections are incorrectly skipped when the directive `rewrite` causes an internal redirect.

***

## [6.1.4] - 2021-08-27 UTC+0800

### Fixed

* Memory leak.

***

## [6.1.3] - 2021-08-23 UTC+0800

### Added

* No longer generates additional response headers when CC protection returns the status code 444.

### Fixed

* The directive `waf_http_status` could not be merged correctly.

***

## [6.1.2] - 2021-08-11 UTC+0800

### Fixed

* Failed to parse `0.0.0.0/0` correctly when handling IP black and white lists.

* Compatible with environments that do not support IPV6.

***

## [6.1.1] - 2021-08-04 UTC+0800

### Fixed

* Under Attack Mode (UAM) sometimes does not work correctly.

***

## [6.1.0] - 2021-08-03 UTC+0800

### Added

* Added three options to the directive `waf_mode`.
    * ADV: Enable the  advanced rules.
    * CMN-METH: Equivalent to `head get post`.
    * ALL-METH: Any http request method will start checking.