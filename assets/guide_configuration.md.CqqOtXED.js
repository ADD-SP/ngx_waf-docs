import{_ as i,o as a,c as n,a8 as e}from"./chunks/framework.CiGKN4gy.js";const o=JSON.parse('{"title":"Configuration Guide","description":"","frontmatter":{"title":"Configuration Guide","lang":"en"},"headers":[],"relativePath":"guide/configuration.md","filePath":"guide/configuration.md","lastUpdated":1790353258000}'),l={name:"guide/configuration.md"};function t(p,s,h,k,r,d){return a(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjJDb25maWd1cmF0aW9uJTIwR3VpZGUlMjIlMkMlMjJsYW5nJTIyJTNBJTIyZW4lMjIlMkMlMjJkYXRlJTIyJTNBMTc5MDM1MzI1ODAwMCU3RA=="},[...s[0]||(s[0]=[e(`<h1 id="configuration-guide" tabindex="-1">Configuration Guide <a class="header-anchor" href="#configuration-guide" aria-label="Permalink to &quot;Configuration Guide&quot;">​</a></h1><p>You can enable ngx_waf by adding configuration to a <code>server</code> block inside <code>nginx.conf</code>. Here is an example.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The configurations listed below are required if you intend to change them unless you know what it means.</p></div><h2 id="lts-version" tabindex="-1">LTS version <a class="header-anchor" href="#lts-version" aria-label="Permalink to &quot;LTS version&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # on means enabled, off means disabled.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # The absolute path to the directory where the rule file is located, must end with /.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_rule_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /usr/local/src/ngx_waf/assets/rules/;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Firewall working mode, STD indicates standard mode.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STD;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # CC defense parameter, 1000 requests per minute limit, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # block the corresponding ip for 60 minutes after exceeding the limit.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cc_deny</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rate=1000r/m duration=60m;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Cache detection results for up to 50 detection targets, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # effective for all detections </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # except IP black and white list detection, CC protection and POST detection.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> capacity=50;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="current-version" tabindex="-1">&#39;Current&#39; version <a class="header-anchor" href="#current-version" aria-label="Permalink to &quot;&#39;Current&#39; version&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    waf_zone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name=waf size=20m;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # on means enabled, off means disabled.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # The absolute path to the directory where the rule file is located, must end with /.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_rule_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /usr/local/src/ngx_waf/assets/rules/;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Firewall working mode, STD indicates standard mode.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STD;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # CC defense parameter, 1000 requests per minute limit, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # block the corresponding ip for 60 minutes after exceeding the limit.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cc_deny</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rate=1000r/m duration=60m zone=waf:cc;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Cache detection results for up to 50 detection targets, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # effective for all detections </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # except IP black and white list detection, CC protection and POST detection.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        waf_cache</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> capacity=50;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,7)])])}const g=i(l,[["render",t]]);export{o as __pageData,g as default};
