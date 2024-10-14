import{_ as e,c as t,o as a,d as i}from"./app-CSlj2Va5.js";const n={},s=i('<h2 id="下载安卓-sdk" tabindex="-1"><a class="header-anchor" href="#下载安卓-sdk"><span>下载安卓 SDK</span></a></h2><p><a href="https://developer.android.com/tools/releases/platform-tools?hl=zh-cn" target="_blank" rel="noopener noreferrer">安卓 SDK 下载地址</a></p><h2 id="开启无线调试" tabindex="-1"><a class="header-anchor" href="#开启无线调试"><span>开启无线调试</span></a></h2><ol><li>手机打开开发者选项，开启无线调试，这里最好关闭 USB 调试，避免冲突</li><li>此时手机会显示一个 IP 地址和端口号，记录下来，我们将这个端口号称为 <code>端口 1</code></li><li>选择配对码配对设备，此时会显示一个 IP 地址和一个新的端口号以及配对码，记录下来，我们将这个新的端口号称为 <code>端口 2</code></li></ol><h2 id="配对" tabindex="-1"><a class="header-anchor" href="#配对"><span>配对</span></a></h2><p>将下载好的安卓 SDK 解压，打开 <code>platform-tools</code> 目录，在该目录下以管理员身份运行命令行窗口，输入以下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>adb pair IP:端口 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行命令后会提示输入配对码，输入配对码即可完成配对</p><h2 id="连接" tabindex="-1"><a class="header-anchor" href="#连接"><span>连接</span></a></h2><p>在命令行窗口中输入以下命令：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> IP:端口</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行命令后会提示连接成功</p><h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试"><span>调试</span></a></h2><p>在 HBuilderX 中选择真机运行，选择连接的设备，即可开始调试</p>',14),l=[s];function r(p,o){return a(),t("div",null,l)}const d=e(n,[["render",r],["__file","uni-app安卓真机无线调试.html.vue"]]),h=JSON.parse(`{"path":"/DevelopmentSkills/uni-app%E5%AE%89%E5%8D%93%E7%9C%9F%E6%9C%BA%E6%97%A0%E7%BA%BF%E8%B0%83%E8%AF%95.html","title":"uni-app 安卓真机无线调试","lang":"zh-CN","frontmatter":{"title":"uni-app 安卓真机无线调试","cover":"https://t.alcy.cc/fj?t=1727602200000","date":"2024-09-29 17:30","category":"软件开发","tag":"uni-app","excerpt":false,"description":"下载安卓 SDK 安卓 SDK 下载地址 开启无线调试 手机打开开发者选项，开启无线调试，这里最好关闭 USB 调试，避免冲突 此时手机会显示一个 IP 地址和端口号，记录下来，我们将这个端口号称为 端口 1 选择配对码配对设备，此时会显示一个 IP 地址和一个新的端口号以及配对码，记录下来，我们将这个新的端口号称为 端口 2 配对 将下载好的安卓 S...","head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/DevelopmentSkills/uni-app%E5%AE%89%E5%8D%93%E7%9C%9F%E6%9C%BA%E6%97%A0%E7%BA%BF%E8%B0%83%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"Happier's Blog"}],["meta",{"property":"og:title","content":"uni-app 安卓真机无线调试"}],["meta",{"property":"og:description","content":"下载安卓 SDK 安卓 SDK 下载地址 开启无线调试 手机打开开发者选项，开启无线调试，这里最好关闭 USB 调试，避免冲突 此时手机会显示一个 IP 地址和端口号，记录下来，我们将这个端口号称为 端口 1 选择配对码配对设备，此时会显示一个 IP 地址和一个新的端口号以及配对码，记录下来，我们将这个新的端口号称为 端口 2 配对 将下载好的安卓 S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://t.alcy.cc/fj?t=1727602200000"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-14T08:59:16.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://t.alcy.cc/fj?t=1727602200000"}],["meta",{"name":"twitter:image:alt","content":"uni-app 安卓真机无线调试"}],["meta",{"property":"article:author","content":"Happier"}],["meta",{"property":"article:tag","content":"uni-app"}],["meta",{"property":"article:published_time","content":"2024-09-29T17:30:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-14T08:59:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uni-app 安卓真机无线调试\\",\\"image\\":[\\"https://t.alcy.cc/fj?t=1727602200000\\"],\\"datePublished\\":\\"2024-09-29T17:30:00.000Z\\",\\"dateModified\\":\\"2024-10-14T08:59:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Happier\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"下载安卓 SDK","slug":"下载安卓-sdk","link":"#下载安卓-sdk","children":[]},{"level":2,"title":"开启无线调试","slug":"开启无线调试","link":"#开启无线调试","children":[]},{"level":2,"title":"配对","slug":"配对","link":"#配对","children":[]},{"level":2,"title":"连接","slug":"连接","link":"#连接","children":[]},{"level":2,"title":"调试","slug":"调试","link":"#调试","children":[]}],"git":{"createdTime":1727603593000,"updatedTime":1728896356000,"contributors":[{"name":"赵鸿飞","email":"zhaohongfei@vasoyn.com","commits":3}]},"readingTime":{"minutes":1,"words":301},"filePathRelative":"DevelopmentSkills/uni-app安卓真机无线调试.md","localizedDate":"2024年9月29日","excerpt":"","autoDesc":true}`);export{d as comp,h as data};
