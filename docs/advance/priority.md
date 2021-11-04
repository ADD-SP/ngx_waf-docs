---
title: Rule Priority
lang: en
---

# Rule Priority

There are many inspection process in this module, so it is important to specify the inspection priority of each inspection process to avoid illogical inspection results.

The following is a list of all the tests in order of priority, from top to bottom.

1. IP whitelist inspection
2. IP blacklist inspection
3. Friendly crawler verification <Badge text="Latest Current version only" type="tip"/>
4. CC protection
5. CAPTCHA <Badge text="Latest Current version only" type="tip"/>
6. Under attack mode
7. Url whitelist inspection
8. Url blacklist inspection
9. Get parameter blacklist inspection
10. User-Agent blacklist inspection
11. Referer whitelist inspection
12. Referer blacklist inspection
13. Cookie blacklist inspection
14. Post request body blacklist
15. ModSecurity


::: tip Change priority

You can modify the priority through the configuration file, but the priority of the POST request body detection is not allowed to be modified, it will always have the lowest priority. See [waf_priority](directive.md#waf-priority) for details

:::

::: tip CHANGES IN LATEST 'Current' VERSION

Allows the priority of the request body inspection to be modified by the directive [waf_priority](directive.md#waf-priority).

:::
