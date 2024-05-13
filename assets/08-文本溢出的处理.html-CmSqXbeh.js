import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as i,c as p,d as a,w as t,e as o,a as e,b as n}from"./app-dWa9Sg-v.js";const d={},r=o(`<h2 id="单行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#单行文本溢出显示省略号"><span>单行文本溢出显示省略号</span></a></h2><ol><li>使用 <code>white-space</code> 属性来指定文本的处理方式，将其设置为 <code>nowrap</code>，表示不允许换行。</li><li>使用 <code>text-overflow</code> 属性来指定溢出文本的处理方式，将其设置为 <code>ellipsis</code>，表示使用省略号来代替溢出的文本。</li><li>为了让 <code>text-overflow</code> 属性生效，还需要将 <code>overflow</code> 属性设置为 <code>hidden</code> 或 <code>clip</code>。</li></ol><p>综上，可以这样写：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=e("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("div")]),e("span",{class:"token punctuation"},">")]),n("我是一段很长的文字很长很长很长"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("div")]),e("span",{class:"token punctuation"},">")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),m=e("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},"div"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token property"},"width"),e("span",{class:"token punctuation"},":"),n("200px"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"white-space"),e("span",{class:"token punctuation"},":"),n(" nowrap"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"overflow"),e("span",{class:"token punctuation"},":"),n(" hidden"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"text-overflow"),e("span",{class:"token punctuation"},":"),n(" ellipsis"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=o(`<h2 id="多行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#多行文本溢出显示省略号"><span>多行文本溢出显示省略号</span></a></h2><ol><li><p>使用<code>-webkit-line-clamp</code>来限制在一个块元素显示的文本的行数。</p></li><li><p>使用<code>display: -webkit-box;</code>设置该盒子作为弹性伸缩盒子模型显示。</p></li><li><p>使用<code>-webkit-box-orient</code>属性设置伸缩盒对象的子元素的排列方式。</p></li><li><p>使用<code>text-overflow: ellipsis;</code>属性设置省略号来代替溢出的文本。</p></li></ol><p>适用于 WebKit 浏览器或移动端（绝大部分是 WebKit 内核的）浏览器</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.ellipsis</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=e("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("div")]),n(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("ellipsis"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),n("我是一段很长的文字很长很长很长，我不知道写什么了，我要一直写，一直写，一直写，让它变得超级长，超级长，超级长，超级长。"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("div")]),e("span",{class:"token punctuation"},">")]),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},".ellipsis"),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token property"},"width"),e("span",{class:"token punctuation"},":"),n("500px"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"overflow"),e("span",{class:"token punctuation"},":"),n(" hidden"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"display"),e("span",{class:"token punctuation"},":"),n(" -webkit-box"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"text-overflow"),e("span",{class:"token punctuation"},":"),n(" ellipsis"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"-webkit-line-clamp"),e("span",{class:"token punctuation"},":"),n(" 2"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token property"},"-webkit-box-orient"),e("span",{class:"token punctuation"},":"),n(" vertical"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function b(y,g){const s=c("CodeDemo");return i(),p("div",null,[r,a(s,{id:"code-demo-24",type:"normal",title:"%E6%95%88%E6%9E%9C%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKySckss3vWMfHZjPVPdjQ8W7f16b6Ol1P3P5/V8mxa+9O10yFcZNJGH6QlJk9JRym5uBhoBJCrUB2Tp6BQnplSkmFlZGBQUGEN5mdklqTqFhckJqdaKeTllxclFoDF88tSi9Jy8sutFDIyU1JS88CCJakVJboImdScnMyC4sxioFwt0K5aAAMQTf0="},{default:t(()=>[u,m]),_:1}),k,a(s,{id:"code-demo-57",type:"normal",title:"%E6%95%88%E6%9E%9C%E6%BC%94%E7%A4%BA",code:"eJyrVsooyc1RslKyScksU0jOSSwuto1RSs3JySwoziyOUbJ71jHx2Yz1T3Y0PFu39em+jpdT9z+f1fJsWvvTtdMhXGTy/Z4eoPonO3qfz1/6snHy07aZT3Y3PNnZ8WRXG0TqxbJGoFHPZ28BSgFFcLFfrFv5dF3z0/4ZT/dNf7Gt9fmu5RDDCbIfNzTZ6AN9YheTp6SjlFxcDPSZHsw3CtUxeQoK5ZkpJRlWpgYGBRXWIH5+WWpRWk5+uZVCRmZKSmoeWDAls7ggJ7HSSkG3PDUpO7NENykforoktaJEF6EFZjRYDqY2JzMvVRcYlLkFVgpGKDJAU3TzizJT80qsFIBmlGQmJ+YAFdQCXVsLAM0Iymk="},{default:t(()=>[v,h]),_:1})])}const x=l(d,[["render",b],["__file","08-文本溢出的处理.html.vue"]]),_=JSON.parse('{"path":"/DevelopmentSkills/08-%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E7%9A%84%E5%A4%84%E7%90%86.html","title":"文本溢出的处理","lang":"zh-CN","frontmatter":{"title":"文本溢出的处理","order":8,"date":"2024-04-29T00:00:00.000Z","category":"软件开发","tag":["CSS"],"description":"单行文本溢出显示省略号 使用 white-space 属性来指定文本的处理方式，将其设置为 nowrap，表示不允许换行。 使用 text-overflow 属性来指定溢出文本的处理方式，将其设置为 ellipsis，表示使用省略号来代替溢出的文本。 为了让 text-overflow 属性生效，还需要将 overflow 属性设置为 hidden 或...","head":[["meta",{"property":"og:url","content":"https://zhf521.github.io/MyBlog/MyBlog/DevelopmentSkills/08-%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E7%9A%84%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"茕茕の博客"}],["meta",{"property":"og:title","content":"文本溢出的处理"}],["meta",{"property":"og:description","content":"单行文本溢出显示省略号 使用 white-space 属性来指定文本的处理方式，将其设置为 nowrap，表示不允许换行。 使用 text-overflow 属性来指定溢出文本的处理方式，将其设置为 ellipsis，表示使用省略号来代替溢出的文本。 为了让 text-overflow 属性生效，还需要将 overflow 属性设置为 hidden 或..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T00:31:29.000Z"}],["meta",{"property":"article:author","content":"茕茕"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:published_time","content":"2024-04-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-13T00:31:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文本溢出的处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-13T00:31:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茕茕\\",\\"url\\":\\"/MyBlog/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"单行文本溢出显示省略号","slug":"单行文本溢出显示省略号","link":"#单行文本溢出显示省略号","children":[]},{"level":2,"title":"多行文本溢出显示省略号","slug":"多行文本溢出显示省略号","link":"#多行文本溢出显示省略号","children":[]}],"git":{"createdTime":1715560289000,"updatedTime":1715560289000,"contributors":[{"name":"zhf521","email":"3407085928@qq.com","commits":1}]},"readingTime":{"minutes":1.34,"words":402},"filePathRelative":"DevelopmentSkills/08-文本溢出的处理.md","localizedDate":"2024年4月29日","excerpt":"<h2>单行文本溢出显示省略号</h2>\\n<ol>\\n<li>使用 <code>white-space</code> 属性来指定文本的处理方式，将其设置为 <code>nowrap</code>，表示不允许换行。</li>\\n<li>使用 <code>text-overflow</code> 属性来指定溢出文本的处理方式，将其设置为 <code>ellipsis</code>，表示使用省略号来代替溢出的文本。</li>\\n<li>为了让 <code>text-overflow</code> 属性生效，还需要将 <code>overflow</code> 属性设置为 <code>hidden</code> 或 <code>clip</code>。</li>\\n</ol>","autoDesc":true}');export{x as comp,_ as data};
