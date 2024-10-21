import{_ as s,c as e,d as a,o as t}from"./app-yDdAZrYy.js";const l={};function n(h,i){return t(),e("div",null,i[0]||(i[0]=[a(`<p>变量是计算机语言中能储存计算结果或能表示值的抽象概念。变量可以通过变量名访问。</p><p>Go 中变量名由数字、字母、下划线组成，首字母不能是数字。</p><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明"><span>变量声明</span></a></h2><ol><li>声明并赋值，如果提供了初始值，则类型可以省略，变量会从初始值中推断出类型<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 变量名</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> 类型</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>如果没有提供初始值，则需要填写类型，变量默认为零值（变量没有初始化时系统默认设置的值）<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 变量名</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> 类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>数值类型的零值是<code>0</code></li><li>布尔类型的零值是<code>false</code></li><li>字符串类型的零值是<code>&quot;&quot;</code></li><li>以下几种类型的零值是<code>nil</code><ul><li><code>*int</code></li><li><code>[]int</code></li><li><code>map[string]int</code></li><li><code>chan int</code></li><li><code>func(string) int</code></li><li><code>error</code> 这里的<code>error</code>是接口</li></ul></li></ul></li><li>短变量声明<code>:=</code>，不能在函数外使用<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>多变量声明 <ul><li>类型相同的多个变量，非全局变量<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 变量名1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名3</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> 类型</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名3</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 值1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">值2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">值3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>或使用短声明<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">变量名3</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 值1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">值2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">值3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>类型不同的多个变量，全局变量<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  变量名1</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 类型1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  变量名2</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 类型2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="局部变量和全局变量" tabindex="-1"><a class="header-anchor" href="#局部变量和全局变量"><span>局部变量和全局变量</span></a></h2><ul><li>定义在函数体（包括main函数）内的变量都是局部变量，定义了就必须使用</li><li>定义在函数体外部的变量就是全局变量，可以只定义不使用</li></ul><h2 id="值类型和引用类型" tabindex="-1"><a class="header-anchor" href="#值类型和引用类型"><span>值类型和引用类型</span></a></h2><p>值类型包括基本数据类型和一些复合数据类型，它们存储在栈上。当你将值类型的变量赋值给另一个变量时，会进行复制操作，新变量将拥有原始值的副本。使用<code>&amp;</code>符号来获取内存地址。</p><p>引用类型在内存中的表示是一个指向实际数据的指针，它们存储在堆上。当你将引用类型的变量赋值给另一个变量时，两个变量将指向相同的数据，因此它们是引用相同的内存地址。</p>`,9)]))}const d=s(l,[["render",n],["__file","05-Go变量.html.vue"]]),k=JSON.parse(`{"path":"/GoLearningNote/05-Go%E5%8F%98%E9%87%8F.html","title":"Go 变量","lang":"zh-CN","frontmatter":{"title":"Go 变量","cover":"https://t.alcy.cc/fj?t=1720580400","order":5,"date":"2024-07-10 11:00","category":"软件开发","tag":"Go","description":"变量是计算机语言中能储存计算结果或能表示值的抽象概念。变量可以通过变量名访问。 Go 中变量名由数字、字母、下划线组成，首字母不能是数字。 变量声明 声明并赋值，如果提供了初始值，则类型可以省略，变量会从初始值中推断出类型 如果没有提供初始值，则需要填写类型，变量默认为零值（变量没有初始化时系统默认设置的值） 数值类型的零值是0 布尔类型的零值是fal...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/GoLearningNote/05-Go%E5%8F%98%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"Happier's Blog"}],["meta",{"property":"og:title","content":"Go 变量"}],["meta",{"property":"og:description","content":"变量是计算机语言中能储存计算结果或能表示值的抽象概念。变量可以通过变量名访问。 Go 中变量名由数字、字母、下划线组成，首字母不能是数字。 变量声明 声明并赋值，如果提供了初始值，则类型可以省略，变量会从初始值中推断出类型 如果没有提供初始值，则需要填写类型，变量默认为零值（变量没有初始化时系统默认设置的值） 数值类型的零值是0 布尔类型的零值是fal..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://t.alcy.cc/fj?t=1720580400"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://t.alcy.cc/fj?t=1720580400"}],["meta",{"name":"twitter:image:alt","content":"Go 变量"}],["meta",{"property":"article:tag","content":"Go"}],["meta",{"property":"article:published_time","content":"2024-07-10T11:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go 变量\\",\\"image\\":[\\"https://t.alcy.cc/fj?t=1720580400\\"],\\"datePublished\\":\\"2024-07-10T11:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Happier\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"变量声明","slug":"变量声明","link":"#变量声明","children":[]},{"level":2,"title":"局部变量和全局变量","slug":"局部变量和全局变量","link":"#局部变量和全局变量","children":[]},{"level":2,"title":"值类型和引用类型","slug":"值类型和引用类型","link":"#值类型和引用类型","children":[]}],"readingTime":{"minutes":1.94,"words":581},"filePathRelative":"GoLearningNote/05-Go变量.md","localizedDate":"2024年7月10日","excerpt":"","autoDesc":true}`);export{d as comp,k as data};
