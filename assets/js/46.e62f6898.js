(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{374:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"enable-captcha"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-captcha"}},[t._v("#")]),t._v(" Enable CAPTCHA "),e("Badge",{attrs:{text:"Latest Current version only",type:"tip"}})],1),t._v(" "),e("p",[t._v("When your website is under CC attack, it is good to turn on CAPTCHA because CAPTCHA can help you identify the real users.")]),t._v(" "),e("ol",[e("li",[t._v("This module currently supports three CAPTCHAs, "),e("a",{attrs:{href:"https://www.hcaptcha.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hCaptcha"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://developers.google.com/recaptcha",target:"_blank",rel:"noopener noreferrer"}},[t._v("reCAPTCHAv2"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://developers.google.com/recaptcha",target:"_blank",rel:"noopener noreferrer"}},[t._v("reCAPTCHAv3"),e("OutboundLink")],1),t._v(". You should choose one and get the Sitekey and Secret from their website.")]),t._v(" "),e("li",[t._v("Go to "),e("code",[t._v("assets/")]),t._v(" in the project's directory and find the corresponding HTML file, then copy it to any path. For example, if you are using "),e("a",{attrs:{href:"https://www.hcaptcha.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hCaptcha"),e("OutboundLink")],1),t._v(", you should copy "),e("code",[t._v("assets/hCaptcha.html")]),t._v(".")]),t._v(" "),e("li",[t._v("Modify the copied HTML file by changing the string "),e("code",[t._v("Your Sitekey")]),t._v(" to the Sitekey you got from the CAPTCHA platform.")]),t._v(" "),e("li",[t._v("Modify the nginx configuration.\n"),e("ul",[e("li",[t._v("Enable CAPTCHA for entire site."),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_captcha")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")]),t._v(" prov=hCaptcha secret=your_secret sitekey=your_sitekey")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("Enable CAPTCHA for a path"),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_captcha")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")]),t._v(" prov=hCaptcha secret=your_secret sitekey=your_sitekey")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("Enable CAPTCHA when request rate is too high"),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_zone")]),t._v(" name=waf size=20m")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_cc_deny")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")]),t._v(" rate=1000r/m duration=1h zone=waf:cc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_captcha")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")]),t._v(" prov=hCaptcha secret=your_secret sitekey=your_sitekey")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_action")]),t._v(" cc_deny=CAPTCHA zone=waf:action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),e("li",[t._v("Restart nginx.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If you have some pseudo-static configuration, or some path rewriting configuration, you need to make sure that the path "),e("code",[t._v("/captcha")]),t._v(" is not rewritten.\nHere is a sample modification.")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BEGIN Before modification")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" (! -e "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" ^(.*)$ index.php?s="),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" last break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# END   After modification")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BEGIN Before modification")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ index.php?s="),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# END   After modification")]),t._v("\n")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("SEO OPTIMIZATION")]),t._v(" "),e("p",[t._v("Enable CAPTCHA will affect search engine crawling,\nyou can use "),e("RouterLink",{attrs:{to:"/advance/directive.html#waf-verify-bot"}},[t._v("waf_verify_bot")]),t._v(" to allow certain search engine crawlers.")],1),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("waf_verify_bot")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);