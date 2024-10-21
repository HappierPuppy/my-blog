import{_ as i,c as l,d as a,o as s}from"./app-CXC9RVsA.js";const t={};function n(d,e){return s(),l("div",null,e[0]||(e[0]=[a(`<h2 id="在-vscode-中使用-vim" tabindex="-1"><a class="header-anchor" href="#在-vscode-中使用-vim"><span>在 VSCode 中使用 Vim</span></a></h2><p>安装 <code>vim</code> 插件即可在 VSCode 中使用 Vim</p><h2 id="vim-基础操作" tabindex="-1"><a class="header-anchor" href="#vim-基础操作"><span>Vim 基础操作</span></a></h2><h3 id="模式" tabindex="-1"><a class="header-anchor" href="#模式"><span>模式</span></a></h3><p>默认为正常模式</p><ul><li><code>i</code> 正常模式 -&gt; 插入模式 (在光标前插入)</li><li><code>a</code> 正常模式 -&gt; 插入模式 (在光标后插入)</li><li><code>Esc</code> 或 <code>ctrl + [</code> 插入模式 -&gt; 正常模式</li></ul><blockquote><p>在终端中退出插入模式：</p><ul><li><code>:wq</code> 保存并退出</li><li><code>:q!</code> 强制退出</li></ul></blockquote><blockquote><p>在 VSCode 中可以将插入模式 -&gt; 正常模式修改为 <code>j + j</code>，通过在配置文件中添加：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vim.insertModeKeyBindings&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;before&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;j&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;j&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;after&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;&lt;Esc&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="光标移动" tabindex="-1"><a class="header-anchor" href="#光标移动"><span>光标移动</span></a></h3><ul><li><code>h</code> 左移</li><li><code>j</code> 下移</li><li><code>k</code> 上移</li><li><code>l</code> 右移</li></ul><h2 id="行相关操作" tabindex="-1"><a class="header-anchor" href="#行相关操作"><span>行相关操作</span></a></h2><h3 id="移动" tabindex="-1"><a class="header-anchor" href="#移动"><span>移动</span></a></h3><ul><li><code>0</code> 移动到行首</li><li><code>^</code> 移动到行首第一个非空字符</li><li><code>$</code> 移动到行尾</li></ul><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入"><span>插入</span></a></h3><ul><li><code>I</code> 在当前行首插入</li><li><code>A</code> 在当前行尾插入</li><li><code>o</code> 在当前行下方插入一行</li><li><code>O</code> 在当前行上方插入一行</li></ul><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><ul><li><code>dd</code> 删除当前行</li></ul><h3 id="复制粘贴" tabindex="-1"><a class="header-anchor" href="#复制粘贴"><span>复制粘贴</span></a></h3><ul><li><code>yy</code> 复制当前行</li><li><code>p</code> 粘贴</li></ul><h2 id="vim-语法" tabindex="-1"><a class="header-anchor" href="#vim-语法"><span>Vim 语法</span></a></h2><p>Vim 语法由操作符和动作组成</p><h3 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符"><span>操作符</span></a></h3><ul><li><code>d</code> 删除</li><li><code>y</code> 复制</li><li><code>c</code> 修改 (删除并进入插入模式)</li></ul><h3 id="基于单词-字串的移动" tabindex="-1"><a class="header-anchor" href="#基于单词-字串的移动"><span>基于单词/字串的移动</span></a></h3><ul><li><code>w</code> 移到单词开头</li><li><code>e</code> 移到单词结尾</li><li><code>b</code> 移到上一个单词的开头</li><li><code>ge</code> 移到上一个单词的结尾</li></ul>`,25)]))}const o=i(t,[["render",n],["__file","Vim.html.vue"]]),r=JSON.parse(`{"path":"/SoftwareTool/Vim.html","title":"Vim","lang":"zh-CN","frontmatter":{"title":"Vim","cover":"https://t.alcy.cc/fj?t=1724590800","date":"2024-08-25 21:00","category":"软件工具","tag":["Vim","VSCode","Edge"],"excerpt":false,"description":"在 VSCode 中使用 Vim 安装 vim 插件即可在 VSCode 中使用 Vim Vim 基础操作 模式 默认为正常模式 i 正常模式 -> 插入模式 (在光标前插入) a 正常模式 -> 插入模式 (在光标后插入) Esc 或 ctrl + [ 插入模式 -> 正常模式 在终端中退出插入模式： :wq 保存并退出 :q! 强制退出 在 VSC...","head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/SoftwareTool/Vim.html"}],["meta",{"property":"og:site_name","content":"Happier's Blog"}],["meta",{"property":"og:title","content":"Vim"}],["meta",{"property":"og:description","content":"在 VSCode 中使用 Vim 安装 vim 插件即可在 VSCode 中使用 Vim Vim 基础操作 模式 默认为正常模式 i 正常模式 -> 插入模式 (在光标前插入) a 正常模式 -> 插入模式 (在光标后插入) Esc 或 ctrl + [ 插入模式 -> 正常模式 在终端中退出插入模式： :wq 保存并退出 :q! 强制退出 在 VSC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://t.alcy.cc/fj?t=1724590800"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://t.alcy.cc/fj?t=1724590800"}],["meta",{"name":"twitter:image:alt","content":"Vim"}],["meta",{"property":"article:tag","content":"Vim"}],["meta",{"property":"article:tag","content":"VSCode"}],["meta",{"property":"article:tag","content":"Edge"}],["meta",{"property":"article:published_time","content":"2024-08-25T21:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vim\\",\\"image\\":[\\"https://t.alcy.cc/fj?t=1724590800\\"],\\"datePublished\\":\\"2024-08-25T21:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Happier\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"在 VSCode 中使用 Vim","slug":"在-vscode-中使用-vim","link":"#在-vscode-中使用-vim","children":[]},{"level":2,"title":"Vim 基础操作","slug":"vim-基础操作","link":"#vim-基础操作","children":[{"level":3,"title":"模式","slug":"模式","link":"#模式","children":[]},{"level":3,"title":"光标移动","slug":"光标移动","link":"#光标移动","children":[]}]},{"level":2,"title":"行相关操作","slug":"行相关操作","link":"#行相关操作","children":[{"level":3,"title":"移动","slug":"移动","link":"#移动","children":[]},{"level":3,"title":"插入","slug":"插入","link":"#插入","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":3,"title":"复制粘贴","slug":"复制粘贴","link":"#复制粘贴","children":[]}]},{"level":2,"title":"Vim 语法","slug":"vim-语法","link":"#vim-语法","children":[{"level":3,"title":"操作符","slug":"操作符","link":"#操作符","children":[]},{"level":3,"title":"基于单词/字串的移动","slug":"基于单词-字串的移动","link":"#基于单词-字串的移动","children":[]}]}],"readingTime":{"minutes":1.15,"words":344},"filePathRelative":"SoftwareTool/Vim.md","localizedDate":"2024年8月25日","excerpt":"","autoDesc":true}`);export{o as comp,r as data};
