(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{353:function(_,v,e){"use strict";e.r(v);var c=e(14),t=Object(c.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"跨版本升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨版本升级"}},[_._v("#")]),_._v(" 跨版本升级")]),_._v(" "),v("p",[_._v("升级模块均需要按照"),v("RouterLink",{attrs:{to:"/zh-cn/guide/installation.html"}},[_._v("安装指南")]),_._v("中的说明重新安装。")],1),_._v(" "),v("h2",{attrs:{id:"从-9-x-x-升级到-10-x-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从-9-x-x-升级到-10-x-x"}},[_._v("#")]),_._v(" 从 "),v("code",[_._v("9.x.x")]),_._v(" 升级到 "),v("code",[_._v("10.x.x")])]),_._v(" "),v("ol",[v("li",[_._v("如果你使用了指令 "),v("code",[_._v("waf_http_status")]),_._v("，请根据文档将其替换为指令 "),v("code",[_._v("waf_action")]),_._v("。")]),_._v(" "),v("li",[_._v("如果你设置了指令 "),v("code",[_._v("waf_cc_deny")]),_._v(" 的参数 "),v("code",[_._v("size")]),_._v("，你应该根据文档使用参数 "),v("code",[_._v("zone")]),_._v(" 来替代。")]),_._v(" "),v("li",[_._v("如果你使用了指令 "),v("code",[_._v("waf_cc_deny")]),_._v(" 的参数 "),v("code",[_._v("CAPTCHA")]),_._v("，你应该根据文档使用指令 "),v("code",[_._v("waf_action")]),_._v(" 来替代。")])]),_._v(" "),v("h2",{attrs:{id:"从-8-x-x-升级到-9-x-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从-8-x-x-升级到-9-x-x"}},[_._v("#")]),_._v(" 从 "),v("code",[_._v("8.x.x")]),_._v(" 升级到 "),v("code",[_._v("9.x.x")])]),_._v(" "),v("ol",[v("li",[_._v("安装 "),v("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity",target:"_blank",rel:"noopener noreferrer"}},[_._v("libmodsecurity"),v("OutboundLink")],1),_._v(" 的动态链接库和头文件。")]),_._v(" "),v("li",[_._v("在项目根目录下运行命令 "),v("code",[_._v("git clone -b v2.3.0 https://github.com/troydhanson/uthash.git lib/uthash")]),_._v("。")]),_._v(" "),v("li",[_._v("指令 "),v("code",[_._v("waf_mode")]),_._v(" 的一些参数被删除，如果你使用了这些参数请删除。\n"),v("ul",[v("li",[_._v("LIBINJECTION")]),_._v(" "),v("li",[_._v("LIBINJECTION-SQLI")]),_._v(" "),v("li",[_._v("LIBINJECTION-XSS")]),_._v(" "),v("li",[_._v("ADV")])])]),_._v(" "),v("li",[_._v("删除高级规则的文件 "),v("code",[_._v("advanced")]),_._v("。")]),_._v(" "),v("li",[_._v("指令 "),v("code",[_._v("waf_priority")]),_._v(" 的参数 "),v("code",[_._v("ADV")]),_._v(" 被删除，如果你使用了此参数请删除。")]),_._v(" "),v("li",[_._v("为指令 "),v("code",[_._v("waf_priority")]),_._v(" 新增了一个参数 "),v("code",[_._v("MODSECURITY")]),_._v("，如果你使用了此指令请将改参数填写到合适的位置。")])]),_._v(" "),v("h2",{attrs:{id:"从-7-x-x-升级到-8-x-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从-7-x-x-升级到-8-x-x"}},[_._v("#")]),_._v(" 从 "),v("code",[_._v("7.x.x")]),_._v(" 升级到 "),v("code",[_._v("8.x.x")])]),_._v(" "),v("ol",[v("li",[_._v("安装 "),v("code",[_._v("libcurl")]),_._v(" 的动态链接库和头文件。")]),_._v(" "),v("li",[_._v("在项目根目录下运行命令 "),v("code",[_._v("git clone https://github.com/DaveGamble/cJSON.git lib/cjson")]),_._v("。")]),_._v(" "),v("li",[_._v("在项目根目录下运行命令 "),v("code",[_._v("git clone https://github.com/libinjection/libinjection.git lib/libinjection")]),_._v("。")]),_._v(" "),v("li",[_._v("如果你使用了指令 "),v("code",[_._v("waf_mode")]),_._v(" 并且使用了该指令的参数 "),v("code",[_._v("CC")]),_._v(" 或 "),v("code",[_._v("CACHE")]),_._v("，请删除这两个参数。这两个参数的功能已经分别移动进了指令\n"),v("code",[_._v("waf_cc_deny")]),_._v(" 和 "),v("code",[_._v("waf_cache")]),_._v("。")]),_._v(" "),v("li",[_._v("如果你想开启 CC 防护，请修改指令 "),v("code",[_._v("waf_cc_deny")]),_._v(" 的参数，例如将 "),v("code",[_._v("waf_cc_deny rate=2000r/m duration=1h")]),_._v(" 改为 "),v("code",[_._v("waf_cc_deny on rate=2000r/m duration=1h")]),_._v("。")]),_._v(" "),v("li",[_._v("如果你想开启缓存，请修改指令 "),v("code",[_._v("waf_cache")]),_._v(" 的参数，例如将 "),v("code",[_._v("waf_cache capacity=50")]),_._v(" 改为 "),v("code",[_._v("waf_cache on capacity=50")]),_._v("。")]),_._v(" "),v("li",[_._v("如果你在 "),v("code",[_._v("http")]),_._v(" 块中使用了指令 "),v("code",[_._v("waf_cc_deny")]),_._v(" 或 "),v("code",[_._v("waf_cache")]),_._v("，请将这两个指令移动到更内层。")]),_._v(" "),v("li",[_._v("如果你使用了指令 "),v("code",[_._v("waf_cache")]),_._v(" 并且使用了该指令的参数 "),v("code",[_._v("interval")]),_._v(" 或 "),v("code",[_._v("percent")]),_._v("，请删除这两个参数，这两个参数已经被移除。")]),_._v(" "),v("li",[_._v("如果你使用了指令 "),v("code",[_._v("waf_priority")]),_._v("，请将 "),v("code",[_._v("VERIFY-BOT")]),_._v(" 和 "),v("code",[_._v("CAPTCHA")]),_._v(" 添加进去。")])]),_._v(" "),v("h2",{attrs:{id:"从-6-x-x-升级到-7-x-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从-6-x-x-升级到-7-x-x"}},[_._v("#")]),_._v(" 从 "),v("code",[_._v("6.x.x")]),_._v(" 升级到 "),v("code",[_._v("7.x.x")])]),_._v(" "),v("ol",[v("li",[_._v("如果你在 "),v("code",[_._v("http")]),_._v(" 块中使用了指令 "),v("code",[_._v("waf_cc_deny")]),_._v("，请将这个指令移动到更内层。")])]),_._v(" "),v("h2",{attrs:{id:"从-5-x-x-升级到-6-x-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从-5-x-x-升级到-6-x-x"}},[_._v("#")]),_._v(" 从 "),v("code",[_._v("5.x.x")]),_._v(" 升级到 "),v("code",[_._v("6.x.x")])]),_._v(" "),v("ol",[v("li",[_._v("在规则目录下新建一个名为 "),v("code",[_._v("advanced")]),_._v(" 的空文件。")]),_._v(" "),v("li",[_._v("如果使用了配置项 "),v("code",[_._v("waf_priority")]),_._v("，可以将其删除或者按照文档中对该配置项的说明进行修改。")])])])}),[],!1,null,null,null);v.default=t.exports}}]);