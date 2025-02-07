(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{401:function(s,a,t){"use strict";t.r(a);var e=t(25),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("h2",{attrs:{id:"简易测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简易测试"}},[s._v("#")]),s._v(" 简易测试")]),s._v(" "),a("p",[s._v("运行下列命令，如果输出 403 则表示模块正常工作。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-I")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" /dev/null --user-agent bench "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%{http_code}'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v('n"')]),s._v(" https://example.com/\n")])])]),a("h2",{attrs:{id:"自动测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动测试"}},[s._v("#")]),s._v(" 自动测试")]),s._v(" "),a("p",[s._v("本项目附带了许多测试用例，你可以通过下面的指令来运行全部的用例。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这行命令的执行时间比较长，但是以后再测试的时候就不需要运行了。")]),s._v("\ncpan Test::Nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你需要指定一个临时目录。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果目录不存在会自动创建。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果目录已经会被存在则会先**删除**再创建。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MODULE_TEST_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/path/to/temp/dir\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你安装了动态模块则需要指定动态模块的绝对路径，反之则无需执行这行命令。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MODULE_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/path/to/ngx_http_waf_module.so\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./test/test-nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ./init.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ./start.sh ./t/*.t\n")])])]),a("p",[s._v("正常情况下所有的用例都会通过，如果没有通过请告诉我们。")]),s._v(" "),a("h2",{attrs:{id:"性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[s._v("#")]),s._v(" 性能测试")]),s._v(" "),a("h3",{attrs:{id:"示例测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例测试"}},[s._v("#")]),s._v(" 示例测试")]),s._v(" "),a("h4",{attrs:{id:"测试说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试说明"}},[s._v("#")]),s._v(" 测试说明")]),s._v(" "),a("ul",[a("li",[s._v("ngx_waf v5.1.1。")]),s._v(" "),a("li",[s._v("使用了约 21 万条 IPV4 白名单规则。")]),s._v(" "),a("li",[s._v("使用了约 21 万条 IPV4 黑名单规则。")]),s._v(" "),a("li",[s._v("使用了约 48000 条 IPV6 白名单规则。")]),s._v(" "),a("li",[s._v("使用了约 48000 条 IPV6 黑名单规则。")]),s._v(" "),a("li",[s._v("使用了十万条 URL 黑名单规则，通过随机字符串生成器获得。")]),s._v(" "),a("li",[s._v("使用了十万条 URL 白名单规则，通过随机字符串生成器获得。")]),s._v(" "),a("li",[s._v("使用了 5000 个随机字符串，通过随机字符串生成器获得。每次请求时从中随机挑选一个作为 URI 发送 GET 请求。")]),s._v(" "),a("li",[s._v("测试持续 30 分钟。")]),s._v(" "),a("li",[s._v("一共测试两次，一次开启防火墙，一次关闭防火墙。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("测试用的 IP 是从 "),a("a",{attrs:{href:"https://www.ipdeny.com/ipblocks/",target:"_blank",rel:"noopener noreferrer"}},[s._v("IPdney"),a("OutboundLink")],1),s._v(" 获得的。")])]),s._v(" "),a("p",[s._v("测试时的配置")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("master_process")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("waf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("waf_mode")]),s._v(" DYNAMIC !CC !POST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("waf_rule_path")]),s._v(" /usr/local/src/ngx_waf/rules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("waf_cache")]),s._v(" capacity=6000 interval=1h percent=50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default_type")]),s._v(" text/html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h4",{attrs:{id:"测试命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试命令"}},[s._v("#")]),s._v(" 测试命令")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("wrk "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 30m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" test/wrk/rand.lua "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--latency")]),s._v(" http://localhost/ -- /path/to/rand-str.txt\n")])])]),a("h4",{attrs:{id:"测试结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试结果"}},[s._v("#")]),s._v(" 测试结果")]),s._v(" "),a("p",[s._v("开启防火墙后 RPS（每秒请求数） 降低了约 4%。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# waf on;")]),s._v("\nwrk "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 30m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" ngx_waf/test/wrk/rand.lua "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--timeout")]),s._v(" 1m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--latency")]),s._v(" http://localhost/ -- /usr/local/src/ngx_waf/txt.txt\n\nRunning 30m "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" @ http://localhost/\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" threads and "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v(".56ms  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("340")]),s._v(".74ms   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".97s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("94.52")]),s._v("%\n    Req/Sec    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(".33k    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(".42k   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v(".38k    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86.58")]),s._v("%\n  Latency Distribution\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".14ms\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".48ms\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".84ms\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".97s\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("120532104")]),s._v(" requests "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(".00m, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(".06GB "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("\nRequests/sec:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("66959.26")]),s._v("\nTransfer/sec:      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(".71MB\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# waf off;")]),s._v("\nwrk "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 30m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" ngx_waf/test/wrk/rand.lua "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--timeout")]),s._v(" 1m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--latency")]),s._v(" http://localhost/ -- /usr/local/src/ngx_waf/txt.txt\n\nRunning 30m "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" @ http://localhost/\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" threads and "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("803")]),s._v(".44us    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".87ms  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(".32ms   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("95.23")]),s._v("%\n    Req/Sec    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v(".69k    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".46k  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("105")]),s._v(".82k    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.15")]),s._v("%\n  Latency Distribution\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("%  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("590")]),s._v(".00us\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v("%  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("760")]),s._v(".00us\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".25ms\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("%    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".25ms\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("126562158")]),s._v(" requests "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(".00m, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(".92GB "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("\nRequests/sec:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("70310.93")]),s._v("\nTransfer/sec:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".19MB\n")])])]),a("h3",{attrs:{id:"自行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自行测试"}},[s._v("#")]),s._v(" 自行测试")]),s._v(" "),a("p",[s._v("你可以使用 "),a("a",{attrs:{href:"https://github.com/wg/wrk",target:"_blank",rel:"noopener noreferrer"}},[s._v("wrk"),a("OutboundLink")],1),s._v(" 对本模块进行性能测试。")]),s._v(" "),a("p",[s._v("本项目提供了 wrk 的 lua 脚本用来辅助测试，脚本的路径为 "),a("code",[s._v("test/wrk/rand.lua")]),s._v("，其功能是使用随机的 URI 发送 GET 请求。你需要为其提供一个含有一定数量的随机字符串的文本文件，每行一个随机字符串。然后通过下面的命令进行测试。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("wrk "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 1m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" test/wrk/rand.lua "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--latency")]),s._v(" http://localhost/ -- /path/to/rand-str.txt\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);