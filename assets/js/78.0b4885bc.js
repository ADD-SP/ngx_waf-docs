(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{369:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"开启-modsecurity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-modsecurity"}},[e._v("#")]),e._v(" 开启 ModSecurity "),t("Badge",{attrs:{text:"仅限最新的 Current 版本",type:"tip"}})],1),e._v(" "),t("p",[e._v("本项目提供的默认规则十分容易被绕过，而且许多用户并没有足够的能力和时间去维护一套可靠的规则。")]),e._v(" "),t("p",[e._v("这种情况下你可以选择启用 "),t("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity",target:"_blank",rel:"noopener noreferrer"}},[e._v("ModSecurity"),t("OutboundLink")],1),e._v(" 并启用 "),t("a",{attrs:{href:"https://owasp.org/www-project-modsecurity-core-rule-set/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWSAP(Open Web Application Security Project) 核心规则集"),t("OutboundLink")],1),e._v(" 来增强防护能力。")]),e._v(" "),t("h2",{attrs:{id:"第一步-下载规则集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-下载规则集"}},[e._v("#")]),e._v(" 第一步：下载规则集")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /usr/local/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/SpiderLabs/ModSecurity.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/coreruleset/coreruleset.git\n")])])]),t("h2",{attrs:{id:"第二步-拷贝规则文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-拷贝规则文件"}},[e._v("#")]),e._v(" 第二步：拷贝规则文件")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" /etc/nginx/rules/modsecurity\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" coreruleset/crs-setup.conf.example /etc/nginx/rules/modsecurity/crs-setup.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ModSecurity/modsecurity.conf-recommended /etc/nginx/rules/modsecurity/modsecurity.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ModSecurity/unicode.mapping /etc/nginx/rules/modsecurity/unicode.mapping\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-r")]),e._v(" coreruleset/rules /etc/nginx/rules/modsecurity/owasp\n")])])]),t("h2",{attrs:{id:"第三步-修改规则文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步-修改规则文件"}},[e._v("#")]),e._v(" 第三步：修改规则文件")]),e._v(" "),t("ol",[t("li",[e._v("编辑 "),t("code",[e._v("/etc/nginx/rules/modsecurity/modsecurity.conf")]),e._v("，将 "),t("code",[e._v("SecRuleEngine DetectionOnly")]),e._v(" 修改为 "),t("code",[e._v("SecRuleEngine on")]),e._v("。")]),e._v(" "),t("li",[e._v("编辑 "),t("code",[e._v("/etc/nginx/rules/modsecurity/modsecurity.conf")]),e._v("，在文件末尾追加下列内容。"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Include /etc/nginx/rules/modsecurity/crs-setup.conf\nInclude /etc/nginx/rules/modsecurity/owasp/*.conf\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"第四步-加载规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四步-加载规则"}},[e._v("#")]),e._v(" 第四步：加载规则")]),e._v(" "),t("p",[e._v("编辑 nginx 的配置文件。")]),e._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("waf_modsecurity")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("on")]),e._v(" file=/etc/nginx/rules/modsecurity/modsecurity.conf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"第五步-优化性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五步-优化性能"}},[e._v("#")]),e._v(" 第五步：优化性能")]),e._v(" "),t("p",[e._v("启用规则后会导致性能大幅度降低，这是因为 ModSecurity 的规则引擎十分复杂，但这也为其带来了强大的功能。")]),e._v(" "),t("p",[e._v("一般来说我们无需对一些静态文件进行检查，因此可以根据这一点来优化性能。")]),e._v(" "),t("p",[e._v("编辑 nginx 的配置文件。")]),e._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" ~* \\.(gif|jpg|png|jpeg|webp|bmp|swf)$")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("waf_modsecurity")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" ~* \\.(html|htm|js|css)$")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("waf_modsecurity")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"第六步-重启-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第六步-重启-nginx"}},[e._v("#")]),e._v(" 第六步：重启 nginx")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" stop\nnginx\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("为什么不用 nginx -s reload ？")]),e._v(" "),t("p",[e._v("因为目前 ModSecurity 存在内存泄露的 bug，直接重载 nginx 会导致内存泄露和性能降低。")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity/issues/2552",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngin reload memory leak · Issue #2552 · SpiderLabs/ModSecurity"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity/issues/2502",target:"_blank",rel:"noopener noreferrer"}},[e._v("It often leads memory leak on nginx reload · Issue #2502 · SpiderLabs/ModSecurity"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"第七步-测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第七步-测试"}},[e._v("#")]),e._v(" 第七步：测试")]),e._v(" "),t("p",[e._v("此时你应该检查网站的运行情况，确保不会因为误报而导致网站异常。")]),e._v(" "),t("h2",{attrs:{id:"第八步-处理误报"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第八步-处理误报"}},[e._v("#")]),e._v(" 第八步：处理误报")]),e._v(" "),t("p",[e._v("处理误报需要对 ModSecurity 的规则语法有所了解，本文不提供这类信息，你可以访问下面的链接来获取相关信息。")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/#step_7_handling_false_positives_disabling_individual_rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Including OWASP ModSecurity Core Rule Set – Welcome to netnea"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-%28v2.x%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference Manual (v2.x) · SpiderLabs/ModSecurity Wiki"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);