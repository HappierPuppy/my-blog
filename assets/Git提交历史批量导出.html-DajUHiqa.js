import{_ as t,c as e,o as i,d as a}from"./app-CTp-z6zw.js";const s={},n=a('<h2 id="批量导出" tabindex="-1"><a class="header-anchor" href="#批量导出"><span>批量导出</span></a></h2><p>在使用 Git 进行版本控制时，有时需要将提交历史导出然后进行其它处理，可以使用 <code>git log</code> 命令来获取提交历史。</p><p>格式化处理并输出为文本文件：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;%ad,%s&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --encoding=GBK</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> history.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>也可以输出为表格：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;%ad,%s&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --encoding=GBK</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> history.xls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以得到如下格式的提交历史：</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Thu Oct 17 18:04:38 2024 +0800,docs: 修改文章内容</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="更多格式化选项" tabindex="-1"><a class="header-anchor" href="#更多格式化选项"><span>更多格式化选项</span></a></h2><p>查看<a href="https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2" target="_blank" rel="noopener noreferrer">官网文档</a>，可以找到更多格式化选项。</p>',10),r=[n];function l(h,o){return i(),e("div",null,r)}const d=t(s,[["render",l],["__file","Git提交历史批量导出.html.vue"]]),c=JSON.parse(`{"path":"/SoftwareTool/Git%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2%E6%89%B9%E9%87%8F%E5%AF%BC%E5%87%BA.html","title":"Git 提交历史批量导出","lang":"zh-CN","frontmatter":{"title":"Git 提交历史批量导出","cover":"https://t.alcy.cc/fj?t=1729231200000","date":"2024-10-18 14:00","category":"软件工具","tag":"Git","excerpt":false,"description":"批量导出 在使用 Git 进行版本控制时，有时需要将提交历史导出然后进行其它处理，可以使用 git log 命令来获取提交历史。 格式化处理并输出为文本文件： 也可以输出为表格： 可以得到如下格式的提交历史： 更多格式化选项 查看官网文档，可以找到更多格式化选项。","head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/SoftwareTool/Git%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2%E6%89%B9%E9%87%8F%E5%AF%BC%E5%87%BA.html"}],["meta",{"property":"og:site_name","content":"Happier's Blog"}],["meta",{"property":"og:title","content":"Git 提交历史批量导出"}],["meta",{"property":"og:description","content":"批量导出 在使用 Git 进行版本控制时，有时需要将提交历史导出然后进行其它处理，可以使用 git log 命令来获取提交历史。 格式化处理并输出为文本文件： 也可以输出为表格： 可以得到如下格式的提交历史： 更多格式化选项 查看官网文档，可以找到更多格式化选项。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://t.alcy.cc/fj?t=1729231200000"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T06:10:25.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://t.alcy.cc/fj?t=1729231200000"}],["meta",{"name":"twitter:image:alt","content":"Git 提交历史批量导出"}],["meta",{"property":"article:author","content":"Happier"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:published_time","content":"2024-10-18T14:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T06:10:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 提交历史批量导出\\",\\"image\\":[\\"https://t.alcy.cc/fj?t=1729231200000\\"],\\"datePublished\\":\\"2024-10-18T14:00:00.000Z\\",\\"dateModified\\":\\"2024-10-18T06:10:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Happier\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"批量导出","slug":"批量导出","link":"#批量导出","children":[]},{"level":2,"title":"更多格式化选项","slug":"更多格式化选项","link":"#更多格式化选项","children":[]}],"git":{"createdTime":1729231825000,"updatedTime":1729231825000,"contributors":[{"name":"赵鸿飞","email":"zhaohongfei@vasoyn.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"SoftwareTool/Git提交历史批量导出.md","localizedDate":"2024年10月18日","excerpt":"","autoDesc":true}`);export{d as comp,c as data};
