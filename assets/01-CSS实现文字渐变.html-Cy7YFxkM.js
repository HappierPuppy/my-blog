import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o,c,d as p,w as l,e as i,a as n,b as a}from"./app-D4Jz2le5.js";const r={},u=i(`<p>如果给文字直接设置渐变色会不生效：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> yellow<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以使用以下方式实现：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> yellow<span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*设置渐变*/</span>
<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span> <span class="token comment">/*将设置的背景颜色限制在文字中*/</span>
<span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span> <span class="token comment">/*将设置的背景颜色限制在文字中*/</span>
<span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span> <span class="token comment">/*将文字设置为透明*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gradient-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("我是渐变色文字"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".gradient-text"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"linear-gradient"),n("span",{class:"token punctuation"},"("),a("to right"),n("span",{class:"token punctuation"},","),a(" yellow"),n("span",{class:"token punctuation"},","),a(" green"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-clip"),n("span",{class:"token punctuation"},":"),a(" text"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"-webkit-background-clip"),n("span",{class:"token punctuation"},":"),a(" text"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"-webkit-text-fill-color"),n("span",{class:"token punctuation"},":"),a(" transparent"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function k(g,h){const t=e("CodeDemo");return o(),c("div",null,[u,p(t,{id:"code-demo-8",type:"normal",title:"%E6%95%88%E6%9E%9C%E6%BC%94%E7%A4%BA",code:"eJyFjr0OgjAUhV/lppMmVHf8eRKWWio0XFvSVtEQZnVSF+UljImTLwTxMSwmDkyu937fOackqVshCck0lhvgyKydRSQxLJZCOerE1kVk3h4ubf1oX+fmVL+Pz/a6b+636dgr80iRgHBrfcSop0EZKYAF41li9FrFIaBUghn6owZOg5FJ6gLYCURdBJAYIdRw0hcpR5mH0GV+P7QQi0w6+p/oDnQpESnXqI0nDFM2Z8a3e7Dy26sPRwVirA=="},{default:l(()=>[d,m]),_:1})])}const y=s(r,[["render",k],["__file","01-CSS实现文字渐变.html.vue"]]),S=JSON.parse('{"path":"/DevelopmentSkills/01-CSS%E5%AE%9E%E7%8E%B0%E6%96%87%E5%AD%97%E6%B8%90%E5%8F%98.html","title":"CSS 实现文字渐变","lang":"zh-CN","frontmatter":{"title":"CSS 实现文字渐变","order":1,"date":"2024-03-06T00:00:00.000Z","category":"软件开发","tag":"CSS","description":"如果给文字直接设置渐变色会不生效： 我们可以使用以下方式实现：","head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/DevelopmentSkills/01-CSS%E5%AE%9E%E7%8E%B0%E6%96%87%E5%AD%97%E6%B8%90%E5%8F%98.html"}],["meta",{"property":"og:site_name","content":"茕茕の博客"}],["meta",{"property":"og:title","content":"CSS 实现文字渐变"}],["meta",{"property":"og:description","content":"如果给文字直接设置渐变色会不生效： 我们可以使用以下方式实现："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-22T14:22:47.000Z"}],["meta",{"property":"article:author","content":"茕茕"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:published_time","content":"2024-03-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-22T14:22:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS 实现文字渐变\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-22T14:22:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茕茕\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[],"git":{"createdTime":1715560289000,"updatedTime":1716387767000,"contributors":[{"name":"zhf521","email":"3407085928@qq.com","commits":3}]},"readingTime":{"minutes":0.55,"words":166},"filePathRelative":"DevelopmentSkills/01-CSS实现文字渐变.md","localizedDate":"2024年3月6日","excerpt":"<p>如果给文字直接设置渐变色会不生效：</p>\\n<div class=\\"language-css\\" data-ext=\\"css\\" data-title=\\"css\\"><pre class=\\"language-css\\"><code><span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> <span class=\\"token function\\">linear-gradient</span><span class=\\"token punctuation\\">(</span>to right<span class=\\"token punctuation\\">,</span> yellow<span class=\\"token punctuation\\">,</span> green<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{y as comp,S as data};
