(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(v,e,t){"use strict";t.r(e);var s=t(0),_=Object(s.a)({},(function(){var v=this,e=v.$createElement,t=v._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"css盒模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css盒模型","aria-hidden":"true"}},[v._v("#")]),v._v(" css盒模型")]),v._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[v._v("// W3C标准盒模型\n"),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("box-sizing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("content-box\n\n// IE 盒模型\n"),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("box-sizing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("border-box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br")])]),t("p",[v._v("标准属性盒模型width,height只包含内容content，不包含border和padding")]),v._v(" "),t("p",[v._v("IE盒模型属性width,height包含border和padding，指的是content+padding+border")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/59ef72f5f265da4320026f76",target:"_blank",rel:"noopener noreferrer"}},[v._v("详情可参考"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"css选择器权重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css选择器权重","aria-hidden":"true"}},[v._v("#")]),v._v(" css选择器权重")]),v._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token important"}},[v._v("!important")]),v._v(">行内样式>ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("伪类选择器: :active :focus等选项.")]),v._v(" "),t("p",[v._v("伪元素选择器： :before :after")]),v._v(" "),t("h2",{attrs:{id:"z-index不生效可能原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-index不生效可能原因","aria-hidden":"true"}},[v._v("#")]),v._v(" z-index不生效可能原因")]),v._v(" "),t("p",[v._v("1、父标签 position属性为relative；")]),v._v(" "),t("p",[v._v("2、问题标签无position属性（不包括static）,包括relative，absolute，fixed；")]),v._v(" "),t("p",[v._v("3、问题标签含有浮动(float)属性。")]),v._v(" "),t("h2",{attrs:{id:"css单位px-rem-em-vw-vh的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css单位px-rem-em-vw-vh的区别","aria-hidden":"true"}},[v._v("#")]),v._v(" css单位px,rem,em,vw,vh的区别")]),v._v(" "),t("p",[v._v("一、px")]),v._v(" "),t("p",[v._v("px就是pixel像素的缩写，相对长度单位，网页设计常用的基本单位。像素px是相对于显示器屏幕分辨率而言的。")]),v._v(" "),t("p",[v._v("二、em")]),v._v(" "),t("p",[v._v("em是相对长度单位。相对于当前对象内文本的字体尺寸（参考物是父元素的font-size）")]),v._v(" "),t("p",[v._v("如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸")]),v._v(" "),t("p",[v._v("特点：")]),v._v(" "),t("p",[v._v("1. em的值并不是固定的")]),v._v(" "),t("p",[v._v("2. em会继承父级元素的字体大小")]),v._v(" "),t("p",[v._v("三、rem")]),v._v(" "),t("p",[v._v("rem是CSS3新增的一个相对单位，rem是相对于HTML根元素的字体大小（font-size）来计算的长度单位")]),v._v(" "),t("p",[v._v("优点：只需要设置根目录的大小就可以把整个页面的成比例的调好")]),v._v(" "),t("p",[v._v("rem兼容性：除了IE8及更早版本外，所有浏览器均已支持rem")]),v._v(" "),t("p",[v._v("如果你没有设置html的字体大小，就会以浏览器默认字体大小，一般是16px")]),v._v(" "),t("p",[v._v("em与rem的区别：")]),v._v(" "),t("p",[v._v("rem是相对于根元素（html）的字体大小，而em是相对于其父元素的字体大小")]),v._v(" "),t("p",[v._v("两者使用规则：")]),v._v(" "),t("p",[v._v("如果这个属性根据它的font-size进行测量，则使用em 其他的一切事物属性均使用rem")]),v._v(" "),t("p",[v._v("这里有一个px、em、rem单位的转换工具：pxtorem.com/")]),v._v(" "),t("p",[v._v("四、vw、vh")]),v._v(" "),t("p",[v._v("vw、vh、vmax、vmin这四个单位都是基于视口")]),v._v(" "),t("p",[v._v("vw是相对视口（viewport）的宽度而定的，长度等于视口宽度的1/100")]),v._v(" "),t("p",[v._v("假如浏览器的宽度为200px，那么1vw就等于2px（200px/100）")]),v._v(" "),t("p",[v._v("vh是相对视口（viewport）的高度而定的，长度等于视口高度的1/100")]),v._v(" "),t("p",[v._v("假如浏览器的高度为500px，那么1vh就等于5px（500px/100）")]),v._v(" "),t("p",[v._v("vmin和vmax是相对于视口的高度和宽度两者之间的最小值或最大值")]),v._v(" "),t("p",[v._v("五、其他单位：")]),v._v(" "),t("p",[v._v("%（百分比）一般来说就是相对于父元素")]),v._v(" "),t("p",[v._v("1、对于普通定位元素就是我们理解的父元素")]),v._v(" "),t("p",[v._v("2、对于position: absolute;的元素是相对于已定位的父元素")]),v._v(" "),t("p",[v._v("3、对于position: fixed;的元素是相对于ViewPort（可视窗口）")]),v._v(" "),t("p",[v._v("六、vm")]),v._v(" "),t("p",[v._v("css3新单位，相对于视口的宽度或高度中较小的那个")]),v._v(" "),t("p",[v._v("其中最小的那个被均分为100单位的vm")]),v._v(" "),t("p",[v._v("比如：浏览器高度900px，宽度1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px")]),v._v(" "),t("p",[v._v("缺点：兼容性差")]),v._v(" "),t("p",[v._v("七、常见问题：")]),v._v(" "),t("p",[v._v("1、假如使用em来设置文字大小要注意什么？")]),v._v(" "),t("p",[v._v("注意父元素的字体大小，因为em是根据父元素的大小来设置的。")]),v._v(" "),t("p",[v._v("比如同样是1.5em，要是父元素是20，那1.5em就是30px.要是父元素是30px,1.5em就是45px（特别是在多重div嵌套里面更要注意）")]),v._v(" "),t("p",[v._v("2、pc pt ch一般用在什么场景？")]),v._v(" "),t("p",[v._v("这些我们网页设计基本上用不到，在排版上会有用处")]),v._v(" "),t("p",[v._v("3、如何使 1rem=10px？")]),v._v(" "),t("p",[v._v("在设置HTML{font-size：62.5%；}即可")]),v._v(" "),t("p",[v._v("4、如果父元素没有指定高度，那么子元素的百分比的高度是多少？")]),v._v(" "),t("p",[v._v("会按照子元素的实际高度，设置百分比则没有效果")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/5ce578fee51d451061721031",target:"_blank",rel:"noopener noreferrer"}},[v._v("参考文档"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);