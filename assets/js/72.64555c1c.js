(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{363:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("请先阅读"),t("RouterLink",{attrs:{to:"/zh-cn/guide/version.html"}},[s._v("版本说明")]),s._v("来挑选合适的版本。")],1),s._v(" "),t("p",[s._v("nginx 提供两种安装模块的方式，即「静态链接」和「动态加载」，通过两种方式安装的模块也分别称为「静态模块」和「动态模块」。")]),s._v(" "),t("p",[s._v("你可以通过运行脚本 "),t("code",[s._v("assets/guide.sh")]),s._v(" 来选择使用静态模块还是动态模块。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" assets/guide.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# It is recommended that you use dynamic modules.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果输出上面这行则建议使用动态模块。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# It is recommended that you use static modules.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果输出上面这行则建议使用静态模块。")]),s._v("\n")])])]),t("h2",{attrs:{id:"静态模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态模块"}},[s._v("#")]),s._v(" 静态模块")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("编译安装模块可能需要一些依赖，比如 gcc，请自行解决依赖问题，本文不提供这类信息。")])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("重要信息")]),s._v(" "),t("p",[s._v("编译安装一个新的模块需要知道当前的 nginx 的 "),t("code",[s._v("configure")]),s._v(" 脚本的参数，您可以通过运行 "),t("code",[s._v("nginx -V")]),s._v(" 来获取。\n下面是一个例子。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nginx version: nginx/1.19.6\nbuilt by gcc 9.3.0 (Ubuntu 9.3.0-17ubuntu1~20.04)\nbuilt with OpenSSL 1.1.1i  8 Dec 2020\nTLS SNI support enabled\nconfigure arguments: --with-mail=dynamic --with-openssl=/usr/local/src/openssl-OpenSSL_1_1_1i --prefix=/usr/local/nginx --user=nginx --group=nginx --with-file-aio --with-http_ssl_module --with-http_geoip_module --with-http_v2_module --with-http_realip_module --with-stream_ssl_preread_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_perl_module --with-http_stub_status_module --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-debug --with-cc-opt='-O3 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic'\n")])])]),t("p",[s._v("务必记住 "),t("code",[s._v("configure arguments:")]),s._v(" 后面的内容，下文中将使用 "),t("code",[s._v("ARG")]),s._v(" 来代替这块内容。")])]),s._v(" "),t("p",[s._v("安装静态模块需要重新编译整个 nginx，花费的时间相对于安装动态模块比较长。")]),s._v(" "),t("p",[s._v("首先下载对应版本的 nginx，"),t("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载页面"),t("OutboundLink")],1),s._v("。\n下面将以 "),t("code",[s._v("nginx-1.20.1")]),s._v(" 为例。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nginx.org/download/nginx-1.20.1.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxf")]),s._v(" nginx-1.20.1.tar.gz\n")])])]),t("p",[s._v("然后下载本模块的源码，下文将使用稳定版的源码。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" lts https://github.com/ADD-SP/ngx_waf.git\n")])])]),t("p",[s._v("接下来应该运行配置脚本。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/nginx-1.20.1\n./configure ARG --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/src/ngx_waf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^\\(CFLAGS.*\\)/\\1 -fstack-protector-strong -Wno-sign-compare/'")]),s._v(" objs/Makefile\n")])])]),t("p",[s._v("接着您开始编译了")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不使用并行编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用并行编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nproc"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("并行会提升编译速度，但是有概率出现莫名奇妙的错误，如果并行编译出错，可以禁用并行编译。")])]),s._v(" "),t("p",[s._v("最后您应该关闭 nginx，然后替换 nginx 的二进制文件，\n此处假设 nginx 的二进制文件的绝对路径为 "),t("code",[s._v("/usr/local/nginx/sbin/nginx")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" objs/nginx /usr/local/nginx/sbin/nginx\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("热部署")]),s._v(" "),t("p",[s._v("如果您不想在替换二进制文件时关闭 nginx，可以参考"),t("a",{attrs:{href:"http://nginx.org/en/docs/control.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档的热部署方案"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("h2",{attrs:{id:"动态模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态模块"}},[s._v("#")]),s._v(" 动态模块")]),s._v(" "),t("h3",{attrs:{id:"下载预构建的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载预构建的模块"}},[s._v("#")]),s._v(" 下载预构建的模块")]),s._v(" "),t("p",[s._v("您可以通过执行脚本 "),t("code",[s._v("assets/download.sh")]),s._v(" 来下载动态模块。下面是一些用例。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于 nginx-1.20.1 的 LTS 版的模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" assets/download.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.20")]),s._v(".1 lts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于 nginx-1.21.1 的 LTS 版的模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" assets/download.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.21")]),s._v(".1 lts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于 nginx-1.20.1 的最新版的模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" assets/download.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.20")]),s._v(".1 current\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于 nginx-1.21.1 的最新版的模块")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" assets/download.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.21")]),s._v(".1 current\n")])])]),t("p",[s._v("执行脚本后你会看到类似下面这样的输出。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("checking for command ... yes\nchecking for libc implementation ... yes\n + GNU C libary\nPulling remote image addsp/ngx_waf-prebuild:ngx-1.21.1-module-beta-glibc\n......\n......\n......\nDownload complete!\n")])])]),t("p",[s._v("如果你看到 "),t("code",[s._v("Download complete!")]),s._v(" 则说明下载成功，模块会被保存在当前目录下。\n你可以将其拷贝到一个目录下，然后在 "),t("code",[s._v("nginx.conf")]),s._v(" 的顶部添加一行。")]),s._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load_module")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/path/to/ngx_http_waf_module.so"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("然后关闭 nginx 并运行 "),t("code",[s._v("nginx -t")]),s._v("。如果没有出错则说明模块被正常加载，反之则说明您的 nginx 不支持预构建的模块，请编译安装模块。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("当我们更新了模块后，大约需要两个小时来编译和上传模块。")])]),s._v(" "),t("h3",{attrs:{id:"编译动态模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译动态模块"}},[s._v("#")]),s._v(" 编译动态模块")]),s._v(" "),t("p",[s._v("编译安装动态模块并不需要重新编译整个 nginx，只需要重新编译所有的模块，所以\n速度相对静态模块快一些，这也是本文档推荐的方式。")]),s._v(" "),t("p",[s._v("下载 nginx 源码和模块源码的过程同"),t("a",{attrs:{href:"#%E9%9D%99%E6%80%81%E6%A8%A1%E5%9D%97"}},[s._v("静态模块")]),s._v("，不再赘述。")]),s._v(" "),t("p",[s._v("运行配置脚本")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./configure --add-dynamic-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/src/ngx_waf --with-compat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^\\(CFLAGS.*\\)/\\1 -fstack-protector-strong -Wno-sign-compare/'")]),s._v(" objs/Makefile\n")])])]),t("p",[s._v("然后开始编译动态模块")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" modules\n")])])]),t("p",[s._v("接着您应该关闭 nginx，然后将动态模块拷贝到模块目录，\n此处假设模块目录的绝对路径为 "),t("code",[s._v("/usr/local/nginx/modules")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" objs/*.so /usr/local/nginx/modules\n")])])]),t("p",[s._v("最后在 nginx 的配置文件顶部添加一行")]),s._v(" "),t("div",{staticClass:"language-vim extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vim"}},[t("code",[s._v("load_module "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/nginx/modules/ngx_http_waf_module.so"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"宝塔面板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宝塔面板"}},[s._v("#")]),s._v(" 宝塔面板")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("在 shell 中运行命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Centos7")]),s._v("\nyum update\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libtool\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://archives.fedoraproject.org/pub/archive/fedora/linux/updates/23/x86_64/b/bison-3.0.4-3.fc23.x86_64.rpm\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++ flex bison yajl yajl-devel curl-devel "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" GeoIP-devel doxygen zlib-devel pcre-devel "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" libcurl libcurl-devel\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/jedisct1/libsodium.git "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--branch")]),s._v(" stable\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" libsodium\n./configure "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/libsodium --with-pic\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nproc"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你使用 Current 版本请添加这些代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 ModSecurity v3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" v3.0.10 https://github.com/SpiderLabs/ModSecurity.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ModSecurity\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x build.sh\n./build.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update\n./configure "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/modsecurity\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nproc"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ======== 分割线 ========")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ubuntu")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" libsodium23  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    libsodium-dev           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    libcurl4-openssl-dev    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    libmodsecurity-dev      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    libmodsecurity3\n")])])])]),s._v(" "),t("li",[t("p",[s._v("在软件商店中卸载 nginx。")])]),s._v(" "),t("li",[t("p",[s._v("编辑文件 "),t("code",[s._v("/etc/profile")]),s._v("，在末尾追加下列内容。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIB_UTHASH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/www/server/nginx/src/uthash\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果操作系统的 Ubuntu 则不用写下面这两行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIB_SODIUM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/libsodium\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LIB_MODSECURITY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/modsecurity\n")])])])]),s._v(" "),t("li",[t("p",[s._v("在 shell 中运行下列命令")]),s._v(" "),t("div",{staticClass:"language-nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("source /etc/profile\n")])])])]),s._v(" "),t("li",[t("p",[s._v("清空宝塔面板缓存，重启宝塔面板，重新登录宝塔面板。")])]),s._v(" "),t("li",[t("p",[s._v("在软件商店中重新安装 nginx，安装方式选择「编译安装」。")])]),s._v(" "),t("li",[t("p",[s._v("选择「添加自定义模块」，填写好之后点击「提交」")]),s._v(" "),t("ul",[t("li",[s._v("模块名称：ngx_waf")]),s._v(" "),t("li",[s._v("模块描述：方便且高性能的 Nginx 防火墙模块")]),s._v(" "),t("li",[s._v("模块参数："),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("--add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/www/server/nginx/src/ngx_waf --with-cc-opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-std"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gnu99\n")])])])]),s._v(" "),t("li",[s._v("前置脚本（LTS 版）："),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /www/server/nginx/src\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/server/nginx/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" lts https://github.com/ADD-SP/ngx_waf.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /usr/local/src/ngx_waf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" ngx_waf /usr/local/src/ngx_waf\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ngx_waf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/libinjection/libinjection.git inc/libinjection\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/server/nginx/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/troydhanson/uthash.git inc/uthash\n")])])])]),s._v(" "),t("li",[s._v("前置脚本（Current 版）："),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /www/server/nginx/src\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/server/nginx/src\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" current https://github.com/ADD-SP/ngx_waf.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /usr/local/src/ngx_waf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" ngx_waf /usr/local/src/ngx_waf\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ngx_waf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" v1.7.16 https://github.com/DaveGamble/cJSON.git lib/cjson\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" v2.3.0 https://github.com/troydhanson/uthash.git lib/uthash\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/server/nginx/src\n\n")])])])])])]),s._v(" "),t("li",[t("p",[s._v("这时你会看到 ngx_waf 已经添加进去了，在模块列表中打上勾之后点击「提交」等待安装完成。")])]),s._v(" "),t("li",[t("p",[s._v("安装成功后删除第三步中向文件 "),t("code",[s._v("/etc/profile")]),s._v(" 中添加的内容。")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("报错了怎么办？")]),s._v(" "),t("p",[s._v("你可以选择去 Github 提 issue 或者自己解决，编译安装第三方 nginx 模块就要有自己解决问题的觉悟。")])]),s._v(" "),t("h2",{attrs:{id:"军哥-lnmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#军哥-lnmp"}},[s._v("#")]),s._v(" 军哥 LNMP")]),s._v(" "),t("p",[s._v("参考 "),t("a",{attrs:{href:"https://www.moewah.com/archives/4880.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ngx_waf：一款高大全的 Nginx 网站防火墙模块 - 喵斯基部落"),t("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);