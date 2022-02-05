---
title: Rule Priority
lang: en
---

# Rule Priority

There are many inspection process in this module, so it is important to specify the inspection priority of each inspection process to avoid illogical inspection results.

The following is a list of all the tests in order of priority, from top to bottom.

## For LTS version

1. IP whitelist
2. IP Blacklisting
3. CC Defense
4. Under-Attack
5. Url Whitelisting
6. Url Blacklisting
7. Query-String Blacklist
8. User-Agent Blacklist
9. Referer Whitelist
10. Referer Blacklist
11. Cookie Blacklist
12. Request-Body Blacklist

::: tip Change priority

You can modify the priority through the configuration file, but the priority of the POST request body detection is not allowed to be modified, it will always have the lowest priority. See [waf_priority](directive.md#waf-priority) for details

:::


## For `Current` version

1. IP whitelist
2. System Protection (SysGuard)
3. IP Blacklisting
4. Friendly crawler verification
5. Captcha (CAPTCHA)
6. Under-Attack mode
7. Url Whitelist
8. Query-String Whitelist
9. User-Agent Whitelist
10. Referer Whitelist
11. Cookie Whitelist
12. Request-Header Whitelist
13. Request-Body whitelist
14. CC protection
15. Url Blacklist
16. Query-String blacklist
17. User-Agent Blacklist
18. Referer Blacklist
19. Cookie Blacklist
20. Request-Header blacklist
21. Request-Body blacklist
22. ModSecurity rules

::: tip CHANGES IN LATEST 'Current' VERSION

Allows the priority of the request body inspection to be modified by the directive [waf_priority](directive.md#waf-priority).

:::
