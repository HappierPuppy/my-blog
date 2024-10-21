import{_ as s,c as a,d as n,o as t}from"./app-yDdAZrYy.js";const e={};function l(h,i){return t(),a("div",null,i[0]||(i[0]=[n(`<h2 id="如何使用-gpio" tabindex="-1"><a class="header-anchor" href="#如何使用-gpio"><span>如何使用 GPIO</span></a></h2><p>先打开时钟，然后定义一个 GPIO 类型的结构体，配置参数：引脚、模式、速率，最后调用 <code>GPIO_Init</code> 函数进行初始化。</p><h2 id="点亮一颗小灯" tabindex="-1"><a class="header-anchor" href="#点亮一颗小灯"><span>点亮一颗小灯</span></a></h2><p>我们通过给小灯一个高电平，使其发光。</p><p>可以使用 <code>GPIO_SetBits</code> 函数来给引脚赋值高电平，使用 <code>GPIO_ResetBits</code> 函数来给引脚赋值低电平。</p><p>也可以使用 <code>GPIO_WriteBit</code> 函数来给引脚赋值，参数为：引脚、赋值状态。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// main.c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;stm32f10x.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 打开时钟</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    RCC_APB2PeriphClockCmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(RCC_APB2Periph_GPIOA,ENABLE);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 定义一个 GPIO 类型的结构体</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    GPIO_InitTypeDef GPIO_Initstructure;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 配置参数：模式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    GPIO_Initstructure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">GPIO_Mode</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> GPIO_Mode_Out_PP;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 配置参数：引脚</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    GPIO_Initstructure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">GPIO_Pin</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> GPIO_Pin_0;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 配置参数：速率</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    GPIO_Initstructure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">GPIO_Speed</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> GPIO_Speed_50MHz;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 用 GPIO_Init 函数将结构体存储</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    GPIO_Init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(GPIOA,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">GPIO_Initstructure);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 给 PA0 引脚低电平</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // GPIO_ResetBits(GPIOA,GPIO_Pin_0);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // GPIO_WriteBit(GPIOA,GPIO_Pin_0,Bit_RESET);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 给 PA0 引脚高电平</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // GPIO_SetBits(GPIOA,GPIO_Pin_0);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // GPIO_WriteBit(GPIOA,GPIO_Pin_0,Bit_SET);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const k=s(e,[["render",l],["__file","01-点灯大师.html.vue"]]),r=JSON.parse(`{"path":"/STM32LearningNote/01-%E7%82%B9%E7%81%AF%E5%A4%A7%E5%B8%88.html","title":"点灯大师","lang":"zh-CN","frontmatter":{"title":"点灯大师","order":1,"date":"2024-03-18T00:00:00.000Z","category":"嵌入式开发","tag":"STM32","excerpt":false,"description":"如何使用 GPIO 先打开时钟，然后定义一个 GPIO 类型的结构体，配置参数：引脚、模式、速率，最后调用 GPIO_Init 函数进行初始化。 点亮一颗小灯 我们通过给小灯一个高电平，使其发光。 可以使用 GPIO_SetBits 函数来给引脚赋值高电平，使用 GPIO_ResetBits 函数来给引脚赋值低电平。 也可以使用 GPIO_WriteB...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://blog.azhf8.top/STM32LearningNote/01-%E7%82%B9%E7%81%AF%E5%A4%A7%E5%B8%88.html"}],["meta",{"property":"og:site_name","content":"Happier's Blog"}],["meta",{"property":"og:title","content":"点灯大师"}],["meta",{"property":"og:description","content":"如何使用 GPIO 先打开时钟，然后定义一个 GPIO 类型的结构体，配置参数：引脚、模式、速率，最后调用 GPIO_Init 函数进行初始化。 点亮一颗小灯 我们通过给小灯一个高电平，使其发光。 可以使用 GPIO_SetBits 函数来给引脚赋值高电平，使用 GPIO_ResetBits 函数来给引脚赋值低电平。 也可以使用 GPIO_WriteB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"STM32"}],["meta",{"property":"article:published_time","content":"2024-03-18T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"点灯大师\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-18T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Happier\\",\\"url\\":\\"/AboutMe/\\"}]}"]]},"headers":[{"level":2,"title":"如何使用 GPIO","slug":"如何使用-gpio","link":"#如何使用-gpio","children":[]},{"level":2,"title":"点亮一颗小灯","slug":"点亮一颗小灯","link":"#点亮一颗小灯","children":[]}],"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"STM32LearningNote/01-点灯大师.md","localizedDate":"2024年3月18日","excerpt":"","autoDesc":true}`);export{k as comp,r as data};
