***

[TOC]

***


#Css语法



# 一. 选择器

### 1.1 元素选择符

#### 1.1.1 通配选择符

``*`` : 选定文档目录树（DOM）中的所有类型的单一对象

```
*[lang=fr] { } 
*.div { } 
```

#### 1.1.2 类型选择符

``E`` : 以文档语言对象类型作为选择符, 等同于``*.E``

```
td { } 
a { } 
```

#### 1.1.3 属性选择符

* ``E[attr]``			: 选择具有attr属性的E元素
* ``E[attr=val]``	: 选择具有attr属性,且值等于val的E元素
* ``E[attr~=val]`` 	: 选择具有attr属性,且值为用空格分隔的字符列表,其中一个等于val的E元素
* ``E[attr|=val]`` 	: 选择具有attr属性,且值为以val开头并用连接符"-"分隔的字符串的E元素
* ``E[attr^=val]`` 	: 选择具有attr属性,且值为以val开头的字符串的E元素
* ``E[attr$=val]`` 	: 选择具有attr属性,且值为以val结尾的字符串的E元素
* ``E[attr*=val]`` 	: 选择具有attr属性,且值为包含val的字符串的E元素

```
h[von] { } 
匹配 <h von>内容</h>及<h von=''>内容</h>
 
span[class=demo] { } 
匹配 <span class="demo">内容</span>

div[speed="fast"][dorun="no"] { } 
匹配 <div speed="fast" dorun="no">内容</div>
 
a[rel~="copyright"] { } 
匹配 <a ref="footer copyright">内容</a>

div[class|='item'] { }
匹配 <div class="item-abc">内容</div>

p[title^="val"] { }
匹配 <p title="value">内容</p>

p[title$="val"] { }
匹配 <p title="this is val">内容</p>

p[title*="val"] { }
匹配 <p title="have val word">内容</p>
```

#### 1.1.4 ID选择符

``E#ID`` : 等同于``E[id~=ID]`` 

```
#note { } 
```

#### 1.1.5 类选择符

``E.className`` : 等同于``E[class~=className]``

```
div.note { } 
.dream { } 
```


### 1.2 关系选择符

#### 1.2.1 包含选择符

``E F`` : 选择所有被E元素包含的F元素,下级所有,递归

```
table td { } 
div.sub a { } 
```

#### 1.2.2 子对象选择符

``E > F`` : 选择所有作为E元素的子元素F,下级所有,不递归

```
body > p { } /* 所有作为body的子对象的p对象 */ 
div ul>li p { } 
```

#### 1.2.3 相邻选择符

``E + F`` : 选择紧贴在E元素之后F元素, 同级, 第一个

```
h3 + p { }

```

#### 1.2.4 兄弟选择符

``E ~ F`` : 选择E元素所有兄弟元素F, 同级, 多个

```
h3 ~ p { }
```

#### 1.2.5 选择符分组

``E1,E2,E3`` : 多个选择器

```
.td1,div a,body { } 
```

### 1.3 伪类选择器

语法 | 标准 | 说明
----|----|----
E:link	      			| 1	| 超链接a在未被访问前的样式
E:visited	   			| 1	| 超链接a在已被访问过时的样式
E:hover	   			| 1/2 | 元素在其鼠标悬停时的样式
E:active	   			| 1/2 | 元素在被用户激活(在鼠标点击与释放之间发生的事件)时的样式
E:focus	   			| 1/2 | 元素在成为输入焦点(onfocus事件发生)时的样式
E:checked	   			| 3	| 匹配界面上处于选中状态的元素E(radio与checkbox)
E:enabled	   			| 3	| 匹配界面上处于可用状态的元素E
E:disabled			| 3	| 匹配界面上处于禁用状态的元素E
E:lang()	   			| 2	| 匹配使用特殊语言的E元素
E:not(s)	   			| 3	| 匹配不含有s选择符的元素E
E:root	      			| 3	| 匹配E元素在文档的根元素
E:target	   			| 3	| 匹配相关URL指向的E元素
E:empty	   			| 3	| 匹配没有任何子元素(包括text节点)的元素E
E:first-child			| 2	| 匹配父元素的第一个子元素E
E:last-child			| 3	| 匹配父元素的最后一个子元素E
E:only-child			| 3	| 匹配父元素仅有的一个子元素E
E:nth-child(n)	   		| 3	| 匹配父元素的第n个子元素E
E:nth-last-child(n)		| 3	| 匹配父元素的倒数第n个子元素E
E:first-of-type	    	| 3	| 匹配同类型中的第一个同级兄弟元素E
E:last-of-type	    	| 3	| 匹配同类型中的最后一个同级兄弟元素E
E:only-of-type	    	| 3	| 匹配同类型中的唯一的一个同级兄弟元素E
E:nth-of-type(n)	  		| 3	| 匹配同类型中的第n个同级兄弟元素E
E:nth-last-of-type(n)	| 3	| 匹配同类型中的倒数第n个同级兄弟元素E

#### 1.3.1 结构性

伪类选择器是作用在子元素，而不是父元素上

* E:first-child/E:last-child
* E:first-of-type/E:last-of-type

```
p a:first-child { }
table td:first-child { } 
ul li:last-child { }

p:first-of-type { }
p:last-of-type { }
```

* E:nth-child(n)/E:nth-last-child(n)

匹配父元素的第n个/倒数第n个子元素E。n从1开始

```
li:nth-child(2) { }
li:nth-last-child(1) { }
```

* E:nth-of-type(n)/E:nth-last-of-type(n)

匹配同类型中的第n个/倒数第n个同级兄弟元素E。n从1开始

```
p:nth-of-type(2) { }
p:nth-last-of-type(1) { }
```

* E:only-child

匹配父元素仅有的一个子元素E

```
li:only-child { }
```

```
<h1>只有唯一一个子元素</h1>
<ul>
	<li>结构性伪类选择符 E:only-child</li>
</ul>
<h1>有多个子元素</h1>
<ul>
	<li>结构性伪类选择符 E:only-child</li>
	<li>结构性伪类选择符 E:only-child</li>
	<li>结构性伪类选择符 E:only-child</li>
</ul>
```

* E:only-of-type

匹配同类型中的唯一的一个同级兄弟元素E。

```
p:only-of-type { }
```

* E:empty

```
p:empty { height:25px;border:1px solid #ddd;background:#eee; }

<p>结构性伪类选择符 E:empty</p>
<p><!--我是一个空节点p，请注意我与其它非空节点p的外观有什么不一样--></p>
<p>结构性伪类选择符 E:empty</p>
```

#### 1.3.2 目标

* E:target

匹配相关URL指向的E元素

```
div#content-primary:target {background-color:#FF0; font-weight:bold;line-height:24px } 
```

```
<div id="nav-primary">#nav-primary</div> 
<div id="content-primary">#content-primary</div> 
<div id="content-secondary">#content-secondary</div> 
<div id="tertiary-content">#tertiary-content</div> 
<div id="nav-secondary">#nav-secondary</div>
<p>提示：在地址栏的url后面输入#content-secondary，可以看到#content-primary的div出现黄色背景</p>
```


#### 1.3.3 状态

* E:focus

```
input:focus { background:#f6f6f6;color:#f60;border:1px solid #f60;outline:none; }
```

* E:checked

```
input:checked+span { background:#f00; }
input:checked+span:after { content:" 我被选中了"; }
<label><input type="checkbox"/><span>蓝色</span></label>
```

* E:enabled/E:disabled

```
input[type="text"]:enabled { border:1px solid #090;background:#fff;color:#000; }
input[type="text"]:disabled { border:1px solid #ccc;background:#eee;color:#ccc; }
```

#### 1.3.4 其他

* E:root

```
html:root { color:#f00; }
```

* E:lang()

匹配特定语言

```
p:lang(zh-cn) { color:#f00; }
```

* E:not()

匹配不含有s选择符的元素E。

```
p:not(.abc) { color:#f00; }

<p class="abc">否定伪类选择符 E:not()</p>
<p id="abc">否定伪类选择符 E:not()</p>
<p class="abcd">否定伪类选择符 E:not()</p>
<p>否定伪类选择符 E:not()</p>
```

:not()不能嵌套，但是可以并列使用

```
.sibcont ul li{
    color:#C91010;
    font-size:13px;
    line-height:26px;
}
.sibcont ul li:not(:first-child):not(:last-child){
    color:#0C58A7;
}
```

```
.view-button
{
	&.button-block:not(.white-bg):not(.whitesmoke-bg)
	{
        color: $white-color;
   }
}
```


### 1.4 伪对象选择器

CSS3将伪对象选择符前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择符，但以前的写法仍然有效。

名称 | 标准 | 说明
----|----|----
E::first-letter	| 1/3	| 对象内的第一个字符的样式
E::first-line		| 1/3	| 对象内的第一行的样式
E::before			| 2/3	| 在对象前发生的内容
E::after			| 2/3	| 在对象后发生的内容
E::selection		| 3		| 对象被选择时的样式


#### 1.4.1 ::first-letter / ::first-line

设置对象内的第一个字符/第一行的属性。 

```
div::first-letter {  } 
div::first-line {  } 
```

#### 1.4.2 ::selection

设置对象被选择时的样式。

```
p::-moz-selection { }
p::selection { }
```


# 二. 单位与取值

### 2.1 单位

* 频率单位

单位换算：1kHz = 1000 Hz 

名称 | 标准 | 说明
----|----|----
kHz		| 2	| 千赫 
Hz		| 2	| 赫兹

* 时间单位

单位换算：1s = 1000ms

名称 | 标准 | 说明
----|----|----
s 		| 2	| 秒  
ms		| 2	| 微秒

* 角度单位

单位换算：90deg = 100grad = 0.25turn ≈ 1.570796326794897rad

名称 | 标准 | 说明
----|----|----
deg	  	| 2	| 度。一个圆圈的360等分之一
grad	| 2	| 梯度。一个直角的100等分之一
rad	  	| 2	| 弧度。把一个圆圈分成2*PI单位
turn	| 3	| 转、圈。一个圆共1圈

* 长度单位

单位换算：1in = 2.54cm = 25.4 mm = 72pt = 6pc 

* 相对长度单位

名称 | 标准 | 说明
----|----|----
em		| 1	| 相对于当前对象内文本的字体尺寸
ex		| 1	| 相对于字符"x"的高度。通常为字体高度的一半
ch		| 3	| 数字“0”的宽度
rem		| 3	| 相对于根元素(即html元素)font-size计算值的倍数

* 绝对长度单位

名称 | 标准 | 说明
----|----|----
cm		| 1	| 厘米（Centimeter）
mm		| 1	| 毫米（Millimeter）
pt		| 1	| 点（points）; 1pt = 1/72in
pc		| 1	| 派卡（picas）; 1pc = 12pt
in		| 1	| 英寸（inches）; 1in = 2.54cm
px		| 1	| 像素（pixels）; 1px = 1/96in

### 2.2 取值

#### 2.2.1 颜色值

名称 | 标准 | 说明
----|----|----
Color-Name	| 1		| 用颜色名称来指定颜色
HEX	        	| 1		| 十六进制记法
RGB	        	| 2		| rgb记法
RGBA	      	| 3		| rgba记法
HSL	        	| 3		| hsl记法
HSLA	      	| 3		| hsla记法
transparent	| 1/3 	| 全透明

* Color-Name

包括基本颜色关键字、系统颜色、SVG颜色关键字等

* HEX
语法：#RRGGBB 或 #RGB

三个两位十六进制正整数。取值范围为：00-FF。参数必须是两位数。对于只有一位的，应在前面补零。
如每个参数各自在两位上的数字都相同，也可缩写为 #RGB 的方式。例如：#FF8800 可以缩写为 #F80。

* RGB/RGBA
语法: RGB(R,G,B),RGBA(R,G,B,A)

红，绿，蓝的正整数或百分数数值
正整数值的取值范围为：0-255。百分数值的取值范围为：0.0%-100.0%。
超出范围的数值将被截至其最接近的取值极限。如：rgb(300,0,0)会被解析为rgb(255,0,0)
正整数值255对应百分比数值100%，如：rgb(255,255,255) = rgb(100%,100%,100%) = #FFFFFF = #FFF
Alpha透明度。取值0~1之间

* HSL/HSLA
语法: HSL(H,S,L),HSLA(H,S,L,A)

Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0-360
Saturation(饱和度)。取值为：0.0% - 100.0%
Lightness(亮度)。取值为：0.0% - 100.0%
Alpha透明度。取值0~1之间。

* transparent

用来指定全透明色彩。
transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。


#### 2.2.2 文本值

名称 | 标准 | 说明
----|----|----
``<string>``	    	| 2	| 字符串(含转义字符串)。
``<url>``	        	| 2	| 资源地址
``<identifier>``		| 2	| 使用用户自定义标识名作为组件取值。


* ``<identifier>``
使用用户自定义标识名作为组件取值。
自定义标识区分大小写
自定义标识不能使用与CSS属性及属性值相同的名字

```
li {counter-increment:testname;}
li {counter-reset:testname2;}
@keyframes testanimations {
	from{opacity:1;}
	to{opacity:0;}
}
```

* ``<string>``
字符串(含转义字符串)。
字符串可以由双引号或单引号包起来。
转义字符串由 反斜杠(\) 开始，如：\', \"

```
div:after { content:'任意字符串'; }
a[title="external"] { }

div:after{content:'任意字符串\'String\'';}
div{font-family:'\5b8b\4f53';} /* \5b8b\4f53 = 宋体 */
```

* ``<url>``
在网页上提供一个资源地址。（图像，声频，视频或浏览器支持的其他任何资源）,资源地址可以由单引号或双引号包起来，也可以不用任何引号。

```
div { background:url("1.gif"); }
div { background:url(1.gif); }
```
使用在@import上时，甚至url()都可以省略，而直接是一个资源地址。

```
@import url("global.css");
@import url(global.css);
@import "global.css";
```

#### 2.2.3 函数值

名称 | 标准 | 说明
----|----|----
counter()		| 2/3	| 插入计数器。
attr()			| 2/3	| 插入元素的属性值。
calc()			| 3		| 用于动态计算长度值。
min()			| 3		| 用于比较数值的大小并取出最小的那个。
max()			| 3		| 用于比较数值的大小并取出最大的那个。
cycle()		| 3		| 允许子孙元素使用取值序列中的值循环替换继承而来的值。

* attr()
插入元素的属性值。
在CSS2中attr()总是返回一个字符串。
在CSS3中attr()可以返回多种不同的类型。

```
div:after { content: attr(title); }
div { width: attr(width, px, auto); } 
```

* calc()
用于动态计算长度值。
任何长度值都可以使用calc()函数进行计算。
calc()函数支持+, -, *, /, mod运算，以后还可能加入对min()/max()等运算。

```
.test
{ width: -moz-calc(100% - 50px);width: calc(100% - 50px); background: #eee; }
```

* counter()
插入计数器。
在CSS2中counter()只能被使用在content属性上。

* max()/min()
用于比较数值的大小并取出较大/小的那个。

```
div { font-size:max(30px, 3em); }
div { width:max(10% + 20px, 300px); }

div { font-size:min(30px, 3em); }
div { width:min(10% + 20px, 300px); }
```

#### 2.2.4 图像值

名称 | 标准 | 说明
----|----|----
linear-gradient()				| 3	| 用线性渐变创建图像
radial-gradient()				| 3	| 用径向渐变创建图像
repeating-linear-gradient()	| 3	| 用重复的线性渐变创建图像
repeating-radial-gradient()	| 3	| 用重复的径向渐变创建图像

#### 2.2.5 数字值

名称 | 标准 | 说明
----|----|----
``<number>``	| 2	| 浮点数
``<integer>``	| 2	| 整数

```
div{ z-index:10; }
div{ line-height:1.5; }
div{ opacity:0.5; }
```

#### 2.2.6 其他

名称 | 标准 | 说明
----|----|----
``<length>``		| 2	| ``<number>``接长度单位
``<percentage>``	| 2	| ``<number>``接%
``<angle>``		| 3	| ``<number>``接角度单位
``<time>``		| 3	| ``<number>``接时间单位
``<frequency>``	| 3	| ``<number>``接频率单位
``<fraction>``	| 3	| ``<number>``接剩余空间数单位
``<grid>``		| 3	| ``<number>``接网格数单位
 


# 三. 语法与规则

名称 | 标准 | 说明
----|----|----
!important	| 1		| 提升指定样式条目的应用优先权
/*comment*/	| 1		| 注释
@import		| 1/3	| 指定导入的外部样式表及目标媒体。该规则必须在样式表头部最先声明
@charset		| 2		| 在外部样式表文件内使用。指定该样式表使用的字符编码。
@media			| 2/3	| 指定样式表规则用于指定的媒体类型和条件。
@font-face	| 3		| 设置嵌入HTML文档的OpenType字体。
@page			| 2		| 设置页面容器的版式，方向，边空等。
@keyframes	| 3		| 指定动画名称和动画效果。

例子：

```
div { color:red!important } 
@charset "utf-8";
@font-face { font-family:name;src:<url>;sRules; }
```


## 3.1 媒体查询

通过不同的媒体类型和条件定义样式表规则。
媒体查询让CSS可以更精确作用于不同的媒体类型和同一媒体的不同条件。
媒体查询的大部分媒体特性都接受min和max用于表达“大于或等于”和“小与或等于”。如：width会有min-width和max-width
媒体查询可以被用在CSS中的@media和@import规则上，也可以被用在HTML和XML中。

### 3.1.1 基础使用

语法:

```
@import <url> <media_query_list>
@media：<media_query_list>

<url>：使用绝对或相对地址指定导入的外部样式表文件。可以是url(url)或者直接是一个url
<media_query_list>： 指定媒体类型和查询条件

<media_query_list>：[<media_query>[',' <media_query>]*]?
<media_query>：[only | not]? <media_type> [and <expression>]* | <expression> [and <expression>]*
<expression>：'('<media_feature>[:<value>]?')'

<media_type>：指定设备类型
<expression>：指定媒体查询使用的媒体特性。这类似于CSS属性，如：max-width:960px。(3)
```

例如

```
@media screen and (width:800px) {  }
@import url(example.css) screen and (width:800px);

<link media="screen and (width:800px)" rel="stylesheet" href="example.css" />
<?xml-stylesheet media="screen and (width:800px)" rel="stylesheet" href="example.css" ?>

@import url(example.css) screen and (min-width:800px);
@import url(example.css) screen and (width:800px),(color);
@import url(example.css) screen and (min-device-width:500px) and (max-device-width:1024px);

```

### 3.1.2 媒体特性


Features | Value| Accepts min&max | Description
---- | ---- | ---- | ----
width 			| ``<length>`` 	| yes | 定义输出设备中的页面可见区域宽度
height 		| ``<length>`` 	| yes | 定义输出设备中的页面可见区域高度
device-width	| ``<length>`` 	| yes | 定义输出设备的屏幕可见宽度
device-height	| ``<length>`` 	| yes | 定义输出设备的屏幕可见高度
orientation	| ``<emu>`` 		| no | 定义'height'是否大于或等于'width'。值portrait代表是，landscape代表否
aspect-ratio 	| ``<ratio>`` 	| yes | 定义'width'与'height'的比率
device-aspect-ratio | ``<ratio>`` | yes | 定义'device-width'与'device-height'的比率。如常见的显示器比率：4/3, 16/9, 16/10
color 			| ``<integer>`` 	| yes | 定义每一组输出设备的彩色原件个数。非彩色设备，则值等于0
color-index 	| ``<integer>`` 	| yes | 定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于0
monochrome 	| ``<integer>`` 	| yes | 定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于0
resolution 	| ``<resolution>`` 	| yes | 定义设备的分辨率。如：96dpi, 300dpi, 118dpcm
scan 			| ``<emu>`` 		| no | 定义电视类设备的扫描工序 progressive/interlace
grid 			| ``<integer>`` 	| no |	用来查询输出设备是否使用栅格或点阵。只有1和0才是有效值，1代表是，0代表否

例如

```
@media all and (width:1024px){
	body{color:#f00;}
}
@media all and (device-height:800px){ … }
@media all and (orientation:landscape){ … }
@media all and (device-aspect-ratio:16/10){ … }
@media all and (min-color:1){ … }
@media all and (monochrome:0){ … }
@media all and (grid:0){ … }
```





## 3.2 动画


### 3.2.1 动画定义

```
@keyframes <identifier> '{' <keyframes-blocks> '}';
<keyframes-blocks>：[ [ from | to | <percentage> ]{ sRules } ] [ [ , from | to | <percentage> ]{ sRules } ]*
```

取值：
<identifier>：identifier定义一个动画名称
<keyframes-blocks>：定义动画在每个阶段的样式，即帧动画。
说明：
指定动画名称和动画效果。
@keyframes定义的动画名称用来被animation-name所使用。
定义动画时，简单的动画可以直接使用关键字from和to，即从一种状态过渡到另一种状态：

```
@keyframes testanimations{
	from{opacity:1;}
	to{opacity:0;}
}
```
如果复杂的动画，可以混合<percentage>去设置某个时间段内的任意时间点的样式：
也可以不适用关键字from和to，而都使用<percentage>

```
@keyframes testanimations{
	from{transform:translate(0,0);}
	20%{transform:translate(20,20);}
	40%{transform:translate(40,0);}
	60%{transform:translate(60,20);}
	80%{transform:translate(80,0);}
	to{transform:translate(100,20);}
}
@keyframes testanimations{
	0%{transform:translate(0,0);}
	20%{transform:translate(20,20);}
	40%{transform:translate(40,0);}
	60%{transform:translate(60,20);}
	80%{transform:translate(80,0);}
	100%{transform:translate(100,20);}
}
```


### 3.2.2 变换 Transform

名称 | 标准 | 说明
----|----|----
transform	        	| 3	| 对象的变换
transform-origin		| 3	| 对象中的变换所参照的原点


```
transform：none | matrix(<number>,<number>,<number>,<number>,<number>,<number>)
? translate(<length>[,<length>])? translateX(<length>)? translateY(<length>)
? rotate(<angle>)? scale(<number>[,<number>])? scaleX(<number>)? scaleY(<number>)
? skew(<angle>[,<angle>])? skewX(<angle>) || skewY(<angle>)?

none：无转换

matrix(<number>,<number>,<number>,<number>,<number>,<number>)：
以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个[a,b,c,d,e,f]变换矩阵

translate(<length>[, <length>])：
指定对象的2D translation（2D平移）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
translateX(<length>)：指定对象X轴（水平方向）的平移
translateY(<length>)：指定对象Y轴（垂直方向）的平移

rotate(<angle>)：
指定对象的2D rotation（2D旋转），需先有transform-origin属性的定义

scale(<number>[, <number>])：
指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值
scaleX(<number>)：指定对象X轴的（水平方向）缩放
scaleY(<number>)：指定对象Y轴的（垂直方向）缩放

skew(<angle> [, <angle>])：
指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0
skewX(<angle>)：指定对象X轴的（水平方向）扭曲
skewY(<angle>)：指定对象Y轴的（垂直方向）扭曲
```

```
transform-origin：[ <percentage> | <length> | left | center① | right ] [ <percentage> | <length> | top | center② | bottom ]?
默认值：50% 50%，效果等同于center center

<percentage>：用百分比指定坐标值。可以为负值。
<length>：用长度值指定坐标值。可以为负值。
left：指定原点的横坐标为left
center①：指定原点的横坐标为center
right：指定原点的横坐标为right
top：指定原点的纵坐标为top
center②：指定原点的纵坐标为center
bottom：指定原点的纵坐标为bottom
```


### 3.2.3 过渡 Transition


名称 | 规范 | 说明
------- | ------- |-------
transition 					| 3 | 复合属性。对象变换时的过渡效果
transition-property 		| 3 | 对象中的参与过渡的属性
transition-duration 		| 3 | 对象过渡的持续时间
transition-timing-function	| 3 | 对象中过渡的类型
transition-delay 			| 3 | 对象延迟过渡的时间


```
transition：[ transition-property ] || [ transition-duration ] || [ transition-timing-function ] || [ transition-delay ]
默认值：看每个独立属性
适用于：所有元素，包含伪对象:after和:before
```

```
transition-delay：<time>[ ,<time> ]*

transition-duration：<time>[ ,<time> ]*

transition-property：all | none | <property>[ ,<property> ]*

transition-timing-function：linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)[ ,linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) ]*
默认值：ease

linear：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
ease：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
ease-in：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
ease-out：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
ease-in-out：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
cubic-bezier(<number>, <number>, <number>, <number>)：
特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
```


### 3.2.4 动画 Animation

名称 | 规范 | 说明
------- | ------- |-------
animation						| 3	| 复合属性。对象所应用的动画特效
animation-name				| 3	| 对象所应用的动画名称
animation-duration			| 3	| 对象动画的持续时间
animation-timing-function	| 3	| 对象动画的过渡类型
animation-delay				| 3	| 对象动画延迟的时间
animation-iteration-count	| 3	| 对象动画的循环次数
animation-direction			| 3	| 对象动画在循环中是否反向运动
animation-play-state		| 3	| 对象动画的状态
animation-fill-mode			| 3	| 对象动画时间之外的状态

```
animation：[[ animation-name ] || [ animation-duration ] || [ animation-timing-function ] || [ animation-delay ] || [ animation-iteration-count ] || [ animation-direction ]] [ , [ animation-name ] || [ animation-duration ] || [ animation-timing-function ] || [ animation-delay ] || [ animation-iteration-count ] || [ animation-direction ]]*
默认值：看每个独立属性
适用于：所有元素，包含伪对象:after和:before
```

```
animation-name：none | <identifier> [ , none | <identifier> ]*
名称由@keyframes定义, 可以为多个

animation-duration：<time> [ , <time> ]*

animation-timing-function：linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) [ , linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) ]*

animation-delay：<time> [ , <time> ]*

animation-iteration-count：infinite | <number> [ , infinite | <number> ]*

animation-direction：normal | alternate [ , normal | alternate ]*
```


## 3.3 动态内容



http://www.cnblogs.com/keyi/p/5943133.html

### 3.3.1 内容 Content

名称 | 标准 | 说明
----|----|----
content	          | 2	| 和:after及:before一起使用,在对象前后显示内容
counter-increment	| 2	| 设定当selector发生时计数器增加的值
counter-reset	    	| 2	| 将指定selector的计数器复位
quotes	          	| 2	| 设置或检索对象内使用的嵌套标记

```
content：normal | none | [<attr> | <url> | <string> | counter(name) | counter(name,list-style-type) | counters(name,string) | counters(name,string,list-style-type) | no-close-quote | no-open-quote | close-quote | open-quote]+
normal：默认值。表现与none值相同
none：不生成任何值。
<attr>：插入标签属性值
<url>：使用指定的绝对或相对地址插入一个外部资源（图像，声频，视频或浏览器支持的其他任何资源）
<string>：插入字符串
counter(name)：使用已命名的计数器
counter(name,list-style-type)：使用已命名的计数器并遵从指定的list-style-type属性
counters(name,string)：使用所有已命名的计数器
counters(name,string,list-style-type)：使用所有已命名的计数器并遵从指定的list-style-type属性
no-close-quote：并不插入quotes属性的后标记。但增加其嵌套级别
no-open-quote：并不插入quotes属性的前标记。但减少其嵌套级别
close-quote：插入quotes属性的后标记
open-quote：插入quotes属性的前标记
```

```
counter-increment：none | [<identifier> <integer>]+
none：阻止计数器增加
<identifier>：identifier定义一个或多个将被增加的selector，id，或者class
<integer>：定义计算器每次增加的数值，可以为负值，默认值是1
```

```
counter-reset：none | [<identifier> <integer>]+
none：阻止计数器复位
<identifier>：identifier定义一个或多个将被复位的selector，id，或者class
<integer>：定义被复位的数值，可以为负值，默认值是0
```

```
quotes：none | [<string> <string>]+
none：content属性的open-quote和close-quote值将不会生成任何标记
<string>：定义content属性的open-quote和close-quote值的标记，2个为一组
```



### 3.3.2 伪对象选择器 ::before / ::after

#### 3.3.2.1 介绍

::before和::after下特有的content，用于在css渲染中向元素逻辑上的头部或尾部添加内容。
这些添加不会出现在DOM中，不会改变文档内容，不可复制，仅仅是在css渲染层加入。
所以不要用:before或:after展示有实际意义的内容，尽量使用它们显示修饰性内容，例如图标。

联系电话前加icon☎

```
.phoneNumber::before { content:'\260E'; font-size: 15px;}
<p class="phoneNumber">12345645654</p>
```

#### 3.3.2.2 content属性

::before和::after必须配合content属性来使用，content用来定义插入的内容，content必须有值，至少是空。
默认情况下，伪类元素的display是默认值inline，可以通过设置display:block来改变其显示。

content可取以下值。

* string
使用引号包一段字符串，将会向元素内容中添加字符串。如：a:after{content:""}

```
p::before{ content: "《"; color: blue;}
p::after{ content: "》"; color: blue;}
<p>平凡的世界</p>
```

* attr()
通过attr()调用当前元素的属性，比如将图片alt提示文字或者链接的href地址显示出来

```
a::after{
    content: "(" attr(href) ")";
}

<a href="http://www.cnblogs.com/starof">starof</a>
```

* url()/uri()
用于引用媒体文件。

举例：“百度”前面给出一张图片，后面给出href属性。

```
a::before{
    content: url("https://www.baidu.com/img/baidu_jgylogo3.gif");
}
a::after{ content:"("attr(href)")"; }
a{ text-decoration: none; }
<a href="http://www.baidu.com">百度</a>
```

* counter()
调用计数器，可以不使用列表元素实现序号功能。

配合counter-increment和counter-reset属性使用：

h2:before { counter-increment: chapter; content: "Chapter " counter(chapter) ". " }

```
body{
    counter-reset: section;
}
h1{
    counter-reset: subsection;
}
h1:before{
    counter-increment:section;
    content:counter(section) "、";
}
h2:before{
    counter-increment:subsection;
    content: counter(section) "." counter(subsection) "、";
}

<body>
<h1>HTML tutorials</h1>
<h2>HTML Tutorial</h2>
<h2>XHTML Tutorial</h2>
<h2>CSS Tutorial</h2>

<h1>Scripting tutorials</h1>
<h2>JavaScript</h2>
<h2>VBScript</h2>

<h1>XML tutorials</h1>
<h2>XML</h2>
<h2>XSL</h2>

</body> 

```

#### 3.3.2.3 使用场景

* 清除浮动

在元素尾部自动清除浮动

```
.cf:before,
.cf:after {
    content: " ";
    display: table; 
}
.cf:after {
    clear: both;
}
.cf {
    *zoom: 1;
}
```


* 模拟float:center的效果

float没有center这个取值，但是可以通过伪类来模拟实现。
左右通过::before float各自留出一半图片的位置，再把图片绝对定位上去。

核心css如下：

```
#page-wrap { width: 60%; margin: 40px auto; position: relative; }
#logo { position: absolute; top: 0; left: 50%; margin-left: -125px; }
#l, #r { width: 49%; }
#l { float: left; }
#r { float: right; }
#l:before, #r:before { content: ""; width: 125px; height: 250px; }
#l:before { float: right; }
#r:before { float: left; }
```


* 做出各种图形效果

举例：一个六角星,#star-six的div是一个正三角行，#star-six::after是一个倒三角形，通过绝对定位，调整其位置即可实现六角星的效果。

```
#star-six {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
  position: relative;
}
#star-six::after {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
  position: absolute;
  content: "";
  top: 30px;
  left: -50px;
}
<div id="star-six"></div>
```

* 不使用图片创建小图标

举例：比如一个电话.很巧妙的应用一个div左border加圆角当机身，::before和::after配合圆角当听筒。

```
#phone{width:50px;height:50px;border-left:6px solid #EEB422;border-radius:20%;transform:rotate(-30deg);-webkit-transform:rotate(-30deg);margin:20px;margin-right:0px;position:relative;display: inline-block;top: -5px;}

#phone:before{width:15px;height:15px;background:#EEB422;border-radius: 20%;content: "";position: absolute;left:-2px;top: 1px;}
#phone:after{width:15px;height:15px;background:#EEB422;border-radius: 20%;content: "";position: absolute;left:-3px;top: 34px;}

<div id="wraper">
    <div id="phone"></div>
</div>
```

这个效果来自：http://www.w3cfuns.com/blog-5444604-5402127.html

有大神用伪元素创建了84种小图标，具体可查看http://nicolasgallagher.com/pure-css-gui-icons/


* 显示打印网页的URL

```
@media print {
  a[href]:after {
    content: " (" attr(href) ") ";
  }
}

<a href="http://www.baidu.com">百度</a>
```

* 给blockquote添加引号

经常用到给blockquote 引用段添加巨大的引号作为背景，可以用 ：:before 来代替 background 。好处是即可以给背景留下空间，还可以直接使用文字而非图片：

```
blockquote::before {
    content: open-quote;
    color: #ddd;
    z-index: -1;
    font-size:80px;
}
<blockquote>引用一个段落,双引号用::before伪元素实现</blockquote>
```

* 超链接特效

举例：配合 CSS定位实现一个鼠标移上去，超链接出现方括号的效果

```
body{
    background-color: #425a6c;
}
    a {
    position: relative;
    display: inline-block;
    outline: none;
    color: #fff;
    text-decoration: none;
    font-size: 32px;
    padding: 5px 20px;
}
a:hover::before, a:hover::after { position: absolute; }
a:hover::before { content: "\5B"; left: -10px; }
a:hover::after { content: "\5D"; right:  -10px; }

<a>鼠标移上去出现方括号</a>
```


## 3.4 盒式布局:框模型 Box Model

名称 | 标准 | 说明
----|----|----

每一个元素的“框（Box）”由几部分组成：

内容（content）
例如：文字、图片或者其他元素等，内容也可以看作是一个长方形的框，width（宽度）和height（高度）2个CSS属性设定的就是内容框的宽度和高度。
边框（border）
边框（也译为边界）是可以具体显示出来的，可以设定宽度、外观样式和颜色。
补白（padding）
补白（也译为填充、内边距、内补丁等）是内容框与边框之间的距离，补白部分显示的是背景。
边距（margin）
边距（也译为边白、外边距、外补丁等）是边框外的透明区域，用来设定本元素与其它元素之间的距离。
 

### 3.5 弹性布局 Flexible Box Layout

名称 | 标准 | 说明
----|----|----



布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
任何一个容器都可以指定为 Flex 布局。

```
.box{
  display: flex;
}
```
行内元素也可以使用 Flex 布局。

```
.box{
  display: inline-flex;
}
```

Webkit 内核的浏览器，必须加上-webkit前缀。

```
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

#### 3.5.1 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。


#### 3.5.2 容器的属性
以下6个属性设置在容器上。
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content

1 flex-direction属性
flex-direction属性决定主轴的方向（即项目的排列方向）

```
flex-direction: row | row-reverse | column | column-reverse;
row(默认值)：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。
```

2 flex-wrap属性
默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

```
flex-wrap: nowrap | wrap | wrap-reverse;

（1）nowrap（默认）：不换行。
（2）wrap：换行，第一行在上方。
（3）wrap-reverse：换行，第一行在下方。
```

3 flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```
flex-flow: <flex-direction> || <flex-wrap>;
```


4 justify-content属性

justify-content属性定义了项目在主轴(左右)上的对齐方式。
```
justify-content: flex-start | flex-end | center | space-between | space-around;

可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```

5 align-items属性

align-items属性定义项目在交叉轴(上下)上如何对齐。

```
align-items: flex-start | flex-end | center | baseline | stretch;

具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```

6 align-content属性
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```
align-content: flex-start | flex-end | center | space-between | space-around | stretch;

flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```
  
#### 3.5.3 项目的属性

以下6个属性设置在项目上。
order
flex-grow
flex-shrink
flex-basis
flex
align-self

1 order属性
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

order: ``<integer>``;

2 flex-grow属性
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

flex-grow: ``<number>``; /* default 0 */

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

3 flex-shrink属性
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

flex-shrink: <number>; /* default 1 */
  
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效。

4 flex-basis属性
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

flex-basis: <length> | auto; /* default auto */

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

5 flex属性
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。


6 align-self属性
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

align-self: auto | flex-start | flex-end | center | baseline | stretch;

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。


#### 3.5.4 实例


http://www.ruanyifeng.com/blog/2015/07/flex-examples.html


##### 骰子的布局

骰子的一面，最多可以放置9个点。

```
|---|---|---|
| 1 | 2 | 3 |
|---|---|---|
| 4 | 5 | 6 |
|---|---|---|
| 7 | 8 | 9 |
|---|---|---|
```

模板如下

```
<div class="box">
  <span class="item"></span>
</div>
```

上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。

1. 单项目

首先，只有左上角1个点的情况。Flex布局默认就是首行左对齐，所以一行代码就够了。

```1
.box {
  display: flex;
}
```

设置项目的对齐方式，就能实现居中对齐和右对齐。

```2
.box {
  display: flex;
  justify-content: center;
}
```

```3
.box {
  display: flex;
  justify-content: flex-end;
}
```

设置交叉轴对齐方式，可以垂直移动主轴。

```4
.box {
  display: flex;
  align-items: center;
}
```

```5
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```8
.box {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
```

```9
.box {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
```

2. 双项目

```1&3
.box {
  display: flex;
  justify-content: space-between;
}
```

```1&7
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

```2&8
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
```

```3&9
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
```

```1&5
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}
```

```1&9
.box {
  display: flex;
  justify-content: space-between;
}

.item:nth-child(2) {
  align-self: flex-end;
}
```

3. 三项目

```159
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}

.item:nth-child(3) {
  align-self: flex-end;
}
```

4. 四项目

```1239
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
}
```

##### 网格布局

1 基本网格布局
最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。


```

<div class="Grid">
  <div class="Grid-cell">...</div>
  <div class="Grid-cell">...</div>
  <div class="Grid-cell">...</div>
</div>

.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}
```

2 百分比布局
某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。

```
<div class="Grid">
  <div class="Grid-cell u-1of4">...</div>
  <div class="Grid-cell">...</div>
  <div class="Grid-cell u-1of3">...</div>
</div>

.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}

.Grid-cell.u-full {
  flex: 0 0 100%;
}

.Grid-cell.u-1of2 {
  flex: 0 0 50%;
}

.Grid-cell.u-1of3 {
  flex: 0 0 33.3333%;
}

.Grid-cell.u-1of4 {
  flex: 0 0 25%;
}
```

##### 圣杯布局

圣杯布局（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。

```
<body class="HolyGrail">
  <header>...</header>
  <div class="HolyGrail-body">
    <main class="HolyGrail-content">...</main>
    <nav class="HolyGrail-nav">...</nav>
    <aside class="HolyGrail-ads">...</aside>
  </div>
  <footer>...</footer>
</body>


.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header,
footer {
  flex: 1;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
}

.HolyGrail-content {
  flex: 1;
}

.HolyGrail-nav, .HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 12em;
}

.HolyGrail-nav {
  /* 导航放到最左边 */
  order: -1;
}

```

如果是小屏幕，躯干的三栏自动变为垂直叠加。

```
@media (max-width: 768px) {
  .HolyGrail-body {
    flex-direction: column;
    flex: 1;
  }
  .HolyGrail-nav,
  .HolyGrail-ads,
  .HolyGrail-content {
    flex: auto;
  }
}
```

##### 输入框的布局

我们常常需要在输入框的前方添加提示，后方添加按钮。


<div class="InputAddOn">
  <span class="InputAddOn-item">...</span>
  <input class="InputAddOn-field">
  <button class="InputAddOn-item">...</button>
</div>

```
.InputAddOn {
  display: flex;
}

.InputAddOn-field {
  flex: 1;
}
```


##### 悬挂式布局
有时，主栏的左侧或右侧，需要添加一个图片栏。


```
<div class="Media">
  <img class="Media-figure" src="" alt="">
  <p class="Media-body">...</p>
</div>

.Media {
  display: flex;
  align-items: flex-start;
}

.Media-figure {
  margin-right: 1em;
}

.Media-body {
  flex: 1;
}
```

##### 固定的底栏
有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部

```
<body class="Site">
  <header>...</header>
  <main class="Site-content">...</main>
  <footer>...</footer>
</body>


.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
```

##### 流式布局
每行的项目数固定，会自动分行。

```
.parent {
  width: 200px;
  height: 150px;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.child {
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 25%;
  height: 50px;
  border: 1px solid red;
}
```



# 四.属性

## 4.1 定位 Positioning

名称 | 标准 | 说明
----|----|----
position	| 2/3	| 对象的定位方式
z-index	| 2	  	| 对象的层叠顺序
t/r/b/l	| 2	  	| 对象与其最近一个定位的父对象顶部/右边/底部/左边相关的位置
clip	   	| 2/3	| 对象的可视区域。区域外的部分是透明的

```
position : static|relative|absolute|fixed|center|page
```

## 4.2 布局 Layout

名称 | 标准 | 说明
----|----|----
display	      	| 2/3	| 对象是否及如何显示
float	          | 1		| 对象是否及如何浮动
clear	          | 1		| 指出了不允许有浮动对象的边
visibility	  	| 2		| 是否显示对象。保留其占据的物理空间
overflow	      	| 2/3	| 对象内容超过其指定高度及宽度时如何管理内容
overflow-x	   	| 2/3	| 对象内容超过其指定宽度时如何管理内容
overflow-y	  	| 2/3	| 对象内容超过其指定高度时如何管理内容
rotation	      	| 3		| 对象的旋转角度
rotation-point	| 3	   	| 对象旋转时所参照的坐标点

```
display：
none | inline | block | list-item | inline-block | 
table | inline-table | table-caption | table-cell | 
table-row | table-row-group | table-column | 
table-column-group | table-footer-group | 
table-header-group | compact | run-in | 
ruby | ruby-base | ruby-text | ruby-base-group | 
ruby-text-group | flex | inline-flex

none：隐藏对象。不保留其物理空间
inline：指定对象为内联元素。
block：指定对象为块元素。
list-item：指定对象为列表项目。
inline-block：指定对象为内联块元素。
如果display设置为none，float及position属性定义将不生效；
如果position既不是static也不是relative，float属性定义将不生效；

float：none | left | right
none：设置对象不浮动
left：设置对象浮在左边
right：设置对象浮在右边
当该属性不等于none引起对象浮动时，对象将被视作块对象(block-level)，即display属性等于block。也就是说，浮动对象的display特性将被忽略。
float在绝对定位和display为none时不会被应用

clear：none | left | right | both
none：允许两边都可以有浮动对象
both：不允许有浮动对象
left：不允许左边有浮动对象
right：不允许右边有浮动对象

visibility：visible | hidden | collapse
visible：设置对象可视
hidden：设置对象隐藏
collapse：主要用来隐藏表格的行或列。隐藏的行或列能够被其他内容使用。
对于表格外的其他对象，其作用等同于hidden。

overflow：<overflow-style>{1,2}
<overflow-style> = visible | hidden | scroll | auto | no-display | no-content
visible：不剪切内容。
hidden：将超出对象尺寸的内容进行裁剪，将不出现滚动条。
scroll：将超出对象尺寸的内容进行裁剪，并以滚动条的方式显示超出的内容。
auto：在需要时剪切内容并添加滚动条，此为body对象和textarea的默认值。
no-display：
当内容不适合当前内容盒子时，整个盒子将被移除，类似display:none。（3）
no-content：
当内容不适合当前内容盒子时，整个内容被隐藏，类似visibility:hidden。（3）
如果只提供一个，其作用等同于overflow-x + overflow-y。
如果提供两个，第一个等同于overflow-x，第二个等同于overflow-y。
对于table来说，假如table-layout属性设置为fixed，则td对象支持带有默认值为hidden的overflow属性。
如果设为hidden，scroll或者auto，那么超出td尺寸的内容将被剪切。如果设为visible，将导致额外的文本溢出到右边或左边（视direction属性设置而定）的单元格。
```


## 4.3 尺寸 Dimension

名称 | 标准 | 说明
----|----|----
width	    	| 1	| 对象的宽度
min-width		| 2	| 对象的最小宽度
max-width	 	| 2	| 对象的最大宽度
height	    	| 1	| 对象的高度
min-height 	| 2	| 对象的最小高度
max-height 	| 2	| 对象的最大高度

## 4.4 外补白 Margin

名称 | 标准 | 说明
----|----|----
margin	      	| 1	| 对象四边的外延边距
margin-top  	| 1	| 对象顶边的外延边距
margin-right	| 1	| 对象右边的外延边距
margin-bottom	| 1	| 对象底边的外延边距
margin-left	| 1	| 对象左边的外延边距

```
margin：[ <length> | <percentage> | auto ]{1,4}
auto：值被设置为相对边的值
<length>：用长度值来定义外补白。可以为负值
<percentage>：用百分比来定义外补白。可以为负值
```

```
如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
如果只提供一个，将用于全部的四边。
如果提供两个，第一个用于上、下，第二个用于左、右。
如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
内联对象可以使用该属性设置左、右两边的外补丁；若要设置上、下两边的外补丁，必须先使该对象表现为块级或内联块级。
外延边距始终透明。
```

```
某些相邻的margin会发生合并，我们称之为margin折叠：

margin折叠常规认知：
margin折叠只发生在块级元素上；
浮动元素的margin不与任何margin发生折叠；
设置了属性overflow且值不为visible的块级元素，将不与它的子元素发生margin折叠；
绝对定位元素的margin不与任何margin发生折叠；
根元素的margin不与其它任何margin发生折叠；
```

## 4.5 内补白 Padding

名称 | 标准 | 说明
----|----|----
padding	    	| 1	| 对象四边的内部边距
padding-top	  	| 1	| 对象顶边的内部边距
padding-right	  	| 1	| 对象右边的内部边距
padding-bottom	| 1	| 对象底边的内部边距
padding-left	  	| 1	| 对象左边的内部边距

```
padding：[ <length> | <percentage> ]{1,4}
<length>：用长度值来定义内补白。不允许负值
<percentage>：用百分比来定义内补白。不允许负值
```

## 4.6 边框 Border

名称 | 标准 | 说明
----|----|----
border	            		| 1 | 复合属性。对象边框的特性
border-width	      		| 1 | 对象边框宽度
border-style	      		| 1 | 对象边框样式
border-color	      		| 1 | 对象边框颜色
border-t/r/b/l	      	| 1 | 复合属性。对象顶边的特性
border-t/r/b/l-width	| 1 | 对象顶边宽度
border-t/r/b/l-style 	| 1 | 对象顶边样式
border-t/r/b/l-color 	| 1 | 对象顶边颜色
border-radius	             	| 3	| 对象使用圆角边框
border-top-left-radius	   	| 3	| 对象左上角圆角边框
border-top-right-radius	   	| 3	| 对象右上角圆角边框
border-bottom-right-radius	| 3	| 对象右下角圆角边框
border-bottom-left-radius	| 3	| 对象左下角圆角边框
border-image	      		| 3	 | 对象的边框样式使用图像来填充
border-image-source		| 3	 | 对象的边框是否用图像定义样式或图像来源路径
border-image-slice		| 3	 | 对象的边框背景图的分割方式
border-image-width		| 3	 | 对象的边框厚度
border-image-outset		| 3	 | 对象的边框背景图的扩展
border-image-repeat		| 3	 | 对象的边框图像的平铺方式
box-reflect	        	| 3	 | 对象的倒影
box-shadow	        	| 3	 | 对象阴影

```
border：[ border-width ] || [ border-style ] || [ border-color ]
```

```
border-width：<border-width>{1,4}
<border-width> = <length> | thin | medium | thick
<length>：用长度值来定义边框的厚度。不允许负值
medium：定义默认厚度的边框。
thin：定义比默认厚度细的边框。
thick：定义比默认厚度粗的边框。
如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
如果只提供一个，将用于全部的四边。
如果提供两个，第一个用于上、下，第二个用于左、右。
如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
如果border-style设置为none，本属性将失去作用。
```

```
border-style：<border-style>{1,4}
<border-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
none：无轮廓。border-color与border-width将被忽略
hidden：隐藏边框
dotted：点状轮廓
dashed：虚线轮廓。
solid：实线轮廓
double：双线轮廓。两条单线与其间隔的和等于指定的border-width值
groove：3D凹槽轮廓。
ridge：3D凸槽轮廓。
inset：3D凹边轮廓。
outset：3D凸边轮廓。
如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
如果只提供一个，将用于全部的四边。
如果提供两个，第一个用于上、下，第二个用于左、右。
如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
如果border-width等于0，本属性将失去作用。
```

```
border-color：<color>{1,4}
如果提供全部四个参数值，将按上、右、下、左的顺序作用于四边。
如果只提供一个，将用于全部的四边。
如果提供两个，第一个用于上、下，第二个用于左、右。
如果提供三个，第一个用于上，第二个用于左、右，第三个用于下。
如果border-width等于0或border-style设置为none，本属性将被忽略。
```

```
border-radius：[ <length> | <percentage> ]{1,4} [ / [ <length> | <percentage> ]{1,4} ]?
<length>：用长度值设置对象的圆角半径长度。不允许负值
<percentage>：用百分比设置对象的圆角半径长度。不允许负值
提供2个参数，2个参数以“/”分隔，每个参数允许设置1~4个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数
水平半径：如果提供全部四个参数值，将按上左(top-left)、上右(top-right)、下右(bottom-right)、下左(bottom-left)的顺序作用于四个角。
如果只提供一个，将用于全部的于四个角。
如果提供两个，第一个用于上左(top-left)、下右(bottom-right)，第二个用于上右(top-right)、下左(bottom-left)。
如果提供三个，第一个用于上左(top-left)，第二个用于上右(top-right)、下左(bottom-left)，第三个用于下右(bottom-right)。
垂直半径也遵循以上4点。
```

```
box-shadow：none | <shadow> [ , <shadow> ]*
<shadow> = inset? && [ <length>{2,4} && <color>? ]
none：无阴影
<length>①：第1个长度值用来设置对象的阴影水平偏移值。可以为负值
<length>②：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值
<length>③：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值
<length>④：如果提供了第4个长度值则用来设置对象的阴影外延值。可以为负值
<color>：设置对象的阴影的颜色。
inset：设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影
```

```
border-image：[ border-image-source ] || [ border-image-slice ] [ / [ border-image-width ]? | / [ border-image-outset ] ]? || [ border-image-repeat ]

border-image-source：设置或检索对象的边框是否用图像定义样式或图像来源路径。
border-image-slice：设置或检索对象的边框背景图的分割方式。
border-image-width：设置或检索对象的边框厚度。
border-image-outset：设置或检索对象的边框背景图的扩展。
border-image-repeat：设置或检索对象的边框图像的平铺方式。
```


## 4.7 背景 Background

名称 | 标准 | 说明
----|----|----
background				| 1/3	| 复合属性。对象的背景特性
background-color			| 1		| 对象背景颜色
background-image			| 1/3	| 对象背景图像。真实图片路径或使用渐变创建的“背景图像”
background-repeat		| 1/3	| 对象背景图像如何铺排填充
background-attachment	| 1/3	| 对象背景图像是随对象内容滚动还是固定的
background-position	  	| 1/3	| 对象背景图像位置
background-origin		| 3		| 对象背景图像显示的原点
background-clip			| 3		| 对象背景向外裁剪的区域
background-size			| 3		| 对象背景图像的尺寸大小

```
background：[ <bg-layer>, ]* <final-bg-layer>
<bg-layer> = [ background-image ] || [ background-position ] [ / background-size ]? || [ background-repeat ] || [ background-attachment ] || [ [ background-origin ] || [ background-clip ] ]{1,2}
<final-bg-layer> = [ background-color ] || [ background-image ] || [ background-position ] [ / background-size ]? || [ background-repeat ] || [ background-attachment ] || [ [ background-origin ] || [ background-clip ] ]{1,2}
```

```
background-image：<bg-image> [ , <bg-image> ]*
<bg-image> = none | <url> | <linear-gradient> | <radial-gradient> | <repeating-linear-gradient> | <repeating-radial-gradient>

none：无背景图。
<url>：使用绝对或相对地址指定背景图像。
<linear-gradient>：使用线性渐变创建背景图像。（3）
<radial-gradient>：使用径向(放射性)渐变创建背景图像。（3）
<repeating-linear-gradient>：使用重复的线性渐变创建背景图像（3）
<repeating-radial-gradient>：使用重复的径向(放射性)渐变创建背景图像。（3）
```

```
background-repeat：<repeat-style> [ , <repeat-style> ]*
<repeat-style> = repeat-x | repeat-y | [repeat | no-repeat | space | round]{1,2}

repeat-x：背景图像在横向上平铺
repeat-y：背景图像在纵向上平铺
repeat：背景图像在横向和纵向平铺
no-repeat：背景图像不平铺
round：背景图像自动缩放直到适应且填充满整个容器。（3）
space：背景图像以相同的间距平铺且填充满整个容器或某个方向。（3）
允许提供2个参数，如果提供全部2个参数，第1个用于横向，第二个用于纵向。
如果只提供1个参数，则用于横向和纵向。特殊值repeat-x和repeat-y除外，因为repeat-x相当于repeat no-repeat，repeat-y相当于no-repeat repeat，即其实repeat-x和repeat-y等价于提供了2个参数值
```

```
background-attachment：<attachment> [ , <attachment> ]*
<attachment> = fixed | scroll | local

fixed：背景图像相对于窗体固定。
scroll：背景图像相对于元素固定，也就是说当元素内容滚动时背景图像不会跟着滚动，因为背景图像总是要跟着元素本身。但会随元素的祖先元素或窗体一起滚动。
local：背景图像相对于元素内容固定，也就是说当元素随元素滚动时背景图像也会跟着滚动，因为背景图像总是要跟着内容。（3）
```

```
background-position：<position> [ , <position> ]*
<position> = [ left | center | right | top | bottom | <percentage> | <length> ] | [ left | center | right | <percentage> | <length> ] [ top | center | bottom | <percentage> | <length> ] | [ center | [ left | right ] [ <percentage> | <length> ]? ] && [ center | [ top | bottom ] [ <percentage> | <length> ]? ]
默认值：0% 0%，效果等同于left top

<percentage>：用百分比指定背景图像填充的位置。可以为负值。
<length>：用长度值指定背景图像填充的位置。可以为负值。
center：背景图像横向和纵向居中。
left：背景图像在横向上填充从左边开始。
right：背景图像在横向上填充从右边开始。
top：背景图像在纵向上填充从顶部开始。
bottom：背景图像在纵向上填充从底部开始。
设置或检索对象的背景图像位置。必须先指定background-image属性。
该属性提供2个参数值（3中已允许提供4个值）。
如果提供四个，每个<percentage>或<length>偏移前都必须跟着一个关键字（即left | center | right | top | bottom），偏移量相对关键字位置进行偏移。
示例：假设要定义背景图像在容器中右下方，并且距离右边和底部各有20px

background:url(test1.jpg) no-repeat right 20px bottom 20px;

你也可以设置3个参数值：

background:url(test1.jpg) no-repeat left bottom 10px;

要注意的是：设置3个或4个值，偏移量前必须有关键字。也就是说，形如："10px bottom 20px" ，这样的参数设置是错误的，因为10px前面没有关键字。
如果提供两个，第一个用于横坐标，第二个用于纵坐标。
如果只提供一个，该值将用于横坐标；纵坐标将默认为50%（即center）。
```

```
background-origin：<box> [ , <box> ]*
<box> = border-box | padding-box | content-box
默认值：padding-box

padding-box：从padding区域（含padding）开始显示背景图像。
border-box：从border区域（含border）开始显示背景图像。
content-box：从content区域开始显示背景图像。
```

```
background-clip：<box> [ , <box> ]*
<box> = border-box | padding-box | content-box | text
默认值：border-box

padding-box：从padding区域（不含padding）开始向外裁剪背景。
border-box：从border区域（不含border）开始向外裁剪背景。
content-box：从content区域开始向外裁剪背景。
text：从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果
```

```
background-size：<bg-size> [ , <bg-size> ]*
<bg-size> = [ <length> | <percentage> | auto ]{1,2} | cover | contain

<length>：用长度值指定背景图像大小。不允许负值。
<percentage>：用百分比指定背景图像大小。不允许负值。
auto：背景图像的真实大小。
cover：将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。
contain：将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。
该属性提供2个参数值(特性值cover和contain除外)。
如果提供两个，第一个用于定义背景图像的宽度，第二个用于定义背景图像的高度。
如果只提供一个，该值将用于定义背景图像的宽度，第2个值默认为auto，即高度为auto，此时背景图以提供的宽度作为参照来进行等比缩放。
```

## 4.8 色彩 Color

名称 | 标准 | 说明
----|----|----
color	 	| 1 | 指定颜色
opacity	| 3 | 对象的不透明度

```
opacity：<number>
<number>：使用浮点数指定对象的不透明度。
值被约束在[0.0-1.0]范围内，如果超过了这个范围，其计算结果将截取到与之最相近的值。
```

## 4.9 字体 Font

名称 | 标准 | 说明
----|----|----
font	     	| 1/2 	| 复合属性。对象中的文本特性
font-style	| 1 	| 对象中的字体样式
font-variant	| 1 	| 对象中的文本是否为小型的大写字母
font-weight	| 1 	| 对象中的文本字体的粗细
font-size		| 1 	| 对象中的字体尺寸
font-family	| 1 	| 对象中文本的字体名称序列
font-stretch	| 3		| 对象中的文字是否横向拉伸变形

```
font：[ [ <font-style> || <font-variant> || <font-weight> ]? <font-size> [ / <line-height> ]? <font-family> ] | caption | icon | menu | message-box | small-caption | status-bar

caption：使用有标题的系统控件的文本字体（如按钮，菜单等）（2）
icon：使用图标标签的字体（2）
menu：使用菜单的字体（2）
message-box：使用信息对话框的文本字体（2）
small-caption：使用小控件的字体（2）
status-bar：使用窗口状态栏的字体（2）
使用第一种声明方式参数必须按照如上的排列顺序，且font-size和font-family是不可忽略的。每个参数仅允许有一个值。忽略的将使用其参数对应的独立属性的默认值。
对于如何使用客户端系统可能没有的字体，可以参阅@font-face规则。
```

```
font-style：normal | italic | oblique
italic：指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique
oblique：指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字
```

```
font-variant：normal | small-caps
small-caps：小型的大写字母字体
```

```
font-weight：normal | bold | bolder | lighter | <integer>
bold：粗体。相当于number为700。
bolder：特粗体。也相当于strong和b对象的作用
lighter：细体
<integer>：用数字表示文本字体粗细。取值范围：100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
```

```
font-size：<absolute-size> | <relative-size> | <length> | <percentage>
默认值：medium
<absolute-size>：根据对象字体进行调节。可选参数值：xx-small | x-small | small | medium | large | x-large | xx-large
以 medium 作为基础参照，xx-small相当于medium 3/5 (h6)，x-small: 3/4，small: 8/9 (h5)，medium: 1 (h4)，large: 6/5 (h3)，x-large: 3/2 (h2)，xx-large: 2/1 (h1)，
<relative-size>：相对于父对像中字体尺寸进行相对调节。使用成比例的em单位计算。可选参数值：smaller | larger
<length>：用长度值指定文字大小。不允许负值。
<percentage>：用百分比指定文字大小。其百分比取值是基于父对象中字体的尺寸。不允许负值。
```

```
font-family：[ <family-name> | <generic-family> ] [, <family-name> | <generic-family>]*
<family-name> = arial | georgia | verdana | helvetica | simsun and etc.
<generic-family> = cursive | fantasy | monospace | serif | sans-serif

<family-name>：字体名称。按优先顺序排列。以逗号隔开。如果字体名称包含空格或中文，则应使用引号括起
<generic-family>：字体序列名称。
序列可包含嵌入字体。请参阅@font-face规则。
一般字体引用可以不加引号，如果字体名包含了空格、数字或者符号（如连接符）则需加上引号，避免引发错误。
user agent会遍历定义的字体序列，直到匹配到某个字体为止。
```

```
font-stretch：ultra-condensed | extra-condensed | condensed | semi-condensed | normal | semi-expanded | expanded | extra-expanded | ultra-expanded
```

## 4.10 文本 Text

名称 | 标准 | 说明
----|----|----
text-transform	| 1/3 	| 对象中的文本的大小写
white-space		| 1 	| 对象内空格的处理方式
tab-size	      	| 3 	| 对象中的制表符的长度
word-wrap	      	| 3 	| 当内容超过指定容器的边界时是否断行
word-break		| 3 	| 对象内文本的字内换行行为
text-align	   	| 1/3 	| 对象中内容的水平对齐方式
text-align-last	| 3 	| 块内的最后一行或被强制打断的行的对齐方式
text-justify	  	| 3 	| 对象内调整文本使用的对齐方式
word-spacing	  	| 1/3 	| 对象中的单词之间的最小、最大和最佳间隙
letter-spacing	| 1/3 	| 对象中的字符之间的最小、最大和最佳间隙
text-indent	  	| 1/3 	| 对象中的文本的缩进
vertical-align	| 1/2 	| 对象内容的垂直对其方式
line-height	   	| 1 	| 对象的行高。即字体最底端与字体内部顶端之间的距离

```
text-transform：none | capitalize | uppercase | lowercase | full-width
white-space：normal | pre | nowrap | pre-wrap | pre-line
tab-size：<integer> | <length>  默认值：8。不允许负值。
word-wrap：normal | break-word
word-break：normal | keep-all | break-all
text-align：[ [ start | end | left | right | center ] || <string> ] | justify | match-parent | start end
text-align-last：auto | start | end | left | right | center | justify
text-justify：auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida
word-spacing：[ normal | <length> | <percentage> ]{1,3}
letter-spacing：[ normal | <length> | <percentage> ]{1,3}
text-indent：[ <length> | <percentage> ] && [ hanging || each-line ]
vertical-align：baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length>
line-height：normal | <length> | <percentage> | <number>
```


## 4.11 文本装饰 Text Decoration

名称 | 标准 | 说明
----|----|----
text-decoration	      	| 1/3	| 复合属性。对象中文本的装饰
text-decoration-line	| 3		| 对象中文本装饰线条的位置
text-decoration-color	| 3		| 对象中文本装饰线条的颜色。
text-decoration-style	| 3		| 对象中文本装饰线条的形状。
text-shadow	          | 3		| 对象中文本的文字是否有阴影及模糊效果

```
text-decoration：[ text-decoration-line ] || [ text-decoration-style ] || [ text-decoration-color ]
text-decoration-line：none | [ underline || overline || line-through || blink ]
text-decoration-style：solid | double | dotted | dashed | wavy
text-decoration-color：<color>
text-shadow：none | <shadow> [ , <shadow> ]*
<shadow> = <length>{2,3} && <color>?
```

## 4.12 书写模式 Writing Modes

名称 | 标准 | 说明
----|----|----
direction	    	| 2 | 文本流的方向
unicode-bidi		| 2 | 用于同一个页面里存在从不同方向读进的文本显示。与direction属性一起使用
writing-mode		| 3 | 对象的内容块固有的书写方向

## 4.13 列表 List

名称 | 标准 | 说明
----|----|----
list-style	      	| 1	  	| 复合属性。设置列表项目相关内容
list-style-image	  	| 1	  	| 对象的列表项标记的图像
list-style-position	| 1	  	| 对象的列表项标记如何根据文本排列
list-style-type	   	| 1/2	| 对象的列表项所使用的预设标记

```
list-style：[ list-style-image ] || [ list-style-position ] || [ list-style-type ]
list-style-image：none | <url>
list-style-position：outside | inside
list-style-type：disc | circle | square | decimal | lower-roman | upper-roman | lower-alpha | upper-alpha | none | armenian | cjk-ideographic | georgian | lower-greek | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-latin | upper-latin
```

## 4.14 表格 Table

名称 | 标准 | 说明
----|----|----
table-layout	  	| 2	| 表格的布局算法
border-collapse	| 2	| 表格的行和单元格的边是合并在一起还是按照标准的HTML样式分开
border-spacing	| 2	| 表格边框独立时,行和单元格的边框在横向和纵向上的间距
caption-side	  	| 2	| 表格的caption对象是在表格的那一边
empty-cells		| 2	| 当表格的单元格无内容时，是否显示该单元格的边框



## 4.15 用户界面 User Interface

名称 | 标准 | 说明
----|----|----
text-overflow		| 3	| 对象内文本的溢出处理方式
cursor	        	| 2	| 在对象上移动的鼠标指针的光标形状
zoom	          | 3	| 对象的缩放比例
resize	        	| 3	| 对象区域是否允许用户缩放,调节元素尺寸大小
ime-mode	      	| 3	| 是否允许用户激活输入如中文等的输入法状态
outline	   		| 2	| 复合属性。对象外的线条轮廓
outline-width	 	| 2	| 对象外的线条轮廓的宽度
outline-style	 	| 2	| 对象外的线条轮廓的样式
outline-color	  	| 2	| 对象外的线条轮廓的颜色
outline-offset	| 3	| 对象外的线条轮廓偏移位置的数值


```
cursor：[<url> [<x> <y>]?,]*[ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll]

ime-mode: auto | normal | active | inactive | disabled
text-overflow：clip | ellipsis 裁切掉/省略标记(...)
```








