import{_ as a,o as i,c as n,a8 as l}from"./chunks/framework.CiGKN4gy.js";const E=JSON.parse('{"title":"配置","description":"","frontmatter":{"title":"配置","lang":"zh-CN","outline":[2,3]},"headers":[],"relativePath":"zh-cn/guide/configuration.md","filePath":"zh-cn/guide/configuration.md","lastUpdated":1790354326000}'),p={name:"zh-cn/guide/configuration.md"};function e(t,s,h,k,r,d){return i(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTklODUlOEQlRTclQkQlQUUlMjIlMkMlMjJsYW5nJTIyJTNBJTIyemgtQ04lMjIlMkMlMjJvdXRsaW5lJTIyJTNBJTVCMiUyQzMlNUQlMkMlMjJkYXRlJTIyJTNBMTc5MDM1NDMyNjAwMCU3RA=="},[...s[0]||(s[0]=[l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><p>您可以在 <code>nginx.conf</code> 内的一个 <code>server</code> 块中添加配置来开启 ngx_waf。 下面是一个例子。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请不要对下面列出的配置进行修改，除非你知道这些配置项的含义。</p></div><h2 id="lts-版本" tabindex="-1">LTS 版本 <a class="header-anchor" href="#lts-版本" aria-label="Permalink to &quot;LTS 版本&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # on 表示启用，off 表示关闭。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 规则文件所在目录的绝对路径，必须以 / 结尾。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_rule_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /usr/local/src/ngx_waf/assets/rules/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 防火墙工作模式，STD 表示标准模式。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STD;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # CC 防御参数，1000 每分钟请求次数上限，超出上限后封禁对应 ip 60 分钟。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cc_deny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rate=1000r/m duration=60m;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 最多缓存 50 个检测目标的检测结果，对除了 IP 黑白名单检测、CC 防护和 POST 检测以外的所有检测生效。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> capacity=50;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="current-版本" tabindex="-1">Current 版本 <a class="header-anchor" href="#current-版本" aria-label="Permalink to &quot;Current 版本&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 声明一块共享内存</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    waf_zone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name=waf size=20m;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # on 表示启用，off 表示关闭。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 规则文件所在目录的绝对路径，必须以 / 结尾。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_rule_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /usr/local/src/ngx_waf/assets/rules/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 防火墙工作模式，STD 表示标准模式。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STD;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # CC 防御参数，1000 每分钟请求次数上限，超出上限后封禁对应 ip 60 分钟。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cc_deny</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rate=1000r/m duration=60m zone=waf:cc;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 最多缓存 50 个检测目标的检测结果，对除了 IP 黑白名单检测、CC 防护和 POST 检测以外的所有检测生效。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cache</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> capacity=50;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,7)])])}const g=a(p,[["render",e]]);export{E as __pageData,g as default};
