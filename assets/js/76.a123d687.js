(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{402:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"拦截请求时启用验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拦截请求时启用验证码"}},[t._v("#")]),t._v(" 拦截请求时启用验证码 "),s("Badge",{attrs:{text:">=v10.0.0",type:"tip"}})],1),t._v(" "),s("p",[t._v("如今，许多攻击者都会使用自动工具攻击服务器，这些自动工具会尝试每一个漏洞，有的会被安全措施所拦截，有的则可以躲避检测。\n如果攻击者觉得你的价值比较高，可能会手动攻击你的服务。我们并不能完美地防御这些攻击，但却能很简单地提高攻击的成本。")]),t._v(" "),s("p",[t._v("当一个请求被拦截时，ngx_waf 会对该 IP 启用验证码，此时该 IP 想要继续访问就必须完成验证码。这基本可以废掉多数的自动攻击工具，因为这些工具会尝试每一个漏洞，而我们总能识别一些明显的攻击请求并启用验证码，而自动工具时难以通过验证的。对于手动攻击者，这也能提高他们的时间成本。")]),t._v(" "),s("p",[t._v("下面是一个示例配置。")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_zone")]),t._v(" name=waf size=20m")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_captcha")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")]),t._v(" prov=xxx sitekey=xxx secret=xxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_action")]),t._v(" blacklist=CAPTCHA zone=waf:action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);