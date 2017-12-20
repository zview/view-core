***

[TOC]

***


#Scss语法


# 一.简介

scss vs sass

scss 和 sass语法的相互转换

```
# Convert Sass to SCSS
# sass-convert style.sass style.scss

# Convert SCSS to Sass
# sass-convert style.scss style.sass
```

# 二. 基础用法

### 2.1 变量

* 变量定义

变量以``$``开头。
如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。

```
$blue : #1875e7;　
div 
{
　color : $blue;
}


$side : left;
.rounded 
{
  border-#{$side}-radius: 5px;
}
```

* 插值示例

```
$properties: (margin, padding);
@mixin set-value($side, $value) {
    @each $prop in $properties {
        #{$prop}-#{$side}: $value;
    }
}
.login-box {
    @include set-value(top, 14px);
}
```

* 变量默认值!default

sass编译css是从上到下的，后面会覆盖前面的

假设变量申明带有!default，那么如果在此申明之前没有这个变量的申明，则用这个值，反之如果之前有申明，则用申明的值。
当然如果你先!default申明，然后再申明一次，那就没什么意思了，这就是基本的变量覆盖，第一次申明的有无!default都一样。

```_imagestyle.scss
// 变量 
//--------------------------------- 
$imgStyleBorder: 1px solid #ccc !default; $imgStylePadding: 2px !default; $imgStyleRadius: 8px !default; 
// mixin 
//--------------------------------- 
@mixin img-border($border:$imgStyleBorder,$padding:$imgStylePadding){ border: $border; padding: $padding; } 
@mixin img-rounded($radius:$imgStyleRadius){ border-radius:$radius; } 
//样式 
//--------------------------------- 
.img-border{ @include img-border; } 
.img-rounded{ @include img-rounded; }
```

```
//申明$imgStylePadding为5px 
$imgStylePadding: 5px; 
//导入_imagestyle.scss 
@import 'imagestyle';
```


### 2.2 计算


```
body
{
  margin: (14px/2);
  top: 50px + 100px;
  left: 100px - 50px;
  right: $var * 10%;
}
```

### 2.3 嵌套

* 选择器嵌套


```
div
{
  h1 
  {
    color:red;
  }
}

->

div h1 
{
  color : red;
}

```
在嵌套的代码块内，可以使用&引用父元素。

```
	nav {
	  a {
	    color: red;
	
	    header & {
	      color:green;
	    }
	  }  
	}
	
	->
	
	nav a {
	  color:red;
	}
	
	header nav a {
	  color:green;
	}

```

其中&代表其所在位置的所有长辈元素

* 属性嵌套

比如border-color属性, 注意，border后面必须加上冒号。

```
p 
{
  border: 
  {
    color: red;
  }
}

.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}
```

* 伪类嵌套

比如a:hover伪类，可以写成

```
　　a 
   {
　　　　&:hover { color: #ffb3ff; }
　　}
　　
　　->
　　
　　a:hover { color: #ffb3ff; }
```

```
.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
}

clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
```



### 2.4 注释

标准的CSS注释 ``/* comment */`` ，会保留到编译后的文件。
单行注释 // comment，只保留在SASS源文件中，编译后被省略。
在/*后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。


```
　　/*! 
　　　　重要注释！
　　*/
```

### 2.5 数据类型


* 数字

```
1，10px
```

* 字符串

```
有引号字符串 (quoted strings)，如 "Lucida Grande" 、'http://sass-lang.com'；
无引号字符串 (unquoted strings)，如 sans-serifbold。
```

在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{ }插值语句 (interpolation) 时，有引号字符串将被编译为无引号字符串，这样方便了在混合指令 (mixin) 中引用选择器名。

* 颜色

blue、 #04a3f9、 rgba(255,0,0,0.5)；

* 布尔

true,false

* 空值

null；

* 值列表

用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif



### 2.6 数据结构

#### 数组

#### list

```
$list:();
$list:(#b4d455,42,"awesome");
```

```分隔符
$list-space: "item-1" "item-2" "item-3"; 
$list-space: "item-1","item-2","item-3";
```

```多维
$list: ( ("item-1.1", "item-1.2", "item-1.3"), ("item-2.1", "item-2.2", "item-2.3"), ("item-3.1", "item-3.2", "item-3.3") ); 

$list: "item-1.1" "item-1.2" "item-1.3", "item-2.1" "item-2.2" "item-2.3", "item-3.1" "item-3.2" "item-3.3";
```

```
$properties: (margin, padding);
@mixin set-value($side, $value) {
    @each $prop in $properties {
        #{$prop}-#{$side}: $value;
    }
}
.login-box {
    @include set-value(top, 14px);
}
```

函数名称 | 函数说明 | 函数示例
----|----|----
``length($list)`` | 返回list长度（如果不是list,返回1）
``nth($list,$index)`` | 返回list中第index列表项值（索引值不在范围内会报错）
``index($list,$value)`` | 返回value在list中的位置
``append($list,$value[,$separator])`` | 使用separator分隔符将value列表项添加到list最后（如果没有显式指定separator分隔符，会以当前分隔符分隔）
``join($list-1,$list-2[,$separator])`` | 使用separator分隔符将list-2附加到list-1（如果没有显式指定分隔符，将对list-1中的分隔符）
``zip(*$lists)`` | 将多个list组合在一起成为一个多维列表。如果列表源长度并不是所有都相同，结果列表长度将以最短的一个为准
``reject($list,$value)`` | 将value值从list中删除
``compact(*$args)`` | 返回一个删除非真值的新列表


#### map


```
$map: (
  key1: value1, 
  key2: value2, 
  key3: value3
);


$input: (
  disabled-background: lighten($input-disabled-color, 75%),
  disabled-border: lighten($input-disabled-color, 50%),
  disabled-text: lighten($input-disabled-color, 50%)
);

input[disabled] {
  background-color: map-get($input, disabled-background);
  border-color: map-get($input, disabled-border);
  color: map-get($input, disabled-text);
}
```

```
$map: (
  key1: value1,
  key2: value2,
  key3: value3
);
/* 遍历map */
@each $key, $value in $map {
  .element--#{$key} {
    background: $value;
  }
}
```

```
$background_color: (
    jeremy: #0989cb,
    beth: #8666ae,
    matt: #02bba7,
    ryan: #ff8178
);
$font: (
    jeremy: Helvetica,
    beth: Verdana,
    matt: Times,
    ryan: Arial
);
@each $key, $value in $background_color {
    .#{$key} {
        background: $value;
        font-family: map-get($font, $key);
    }
}
```

函数名称 | 函数说明 | 函数示例
----|----|----
map-keys(map)		| 返回map里面所有的key(list)   |	map-keys(("foo": 1, "bar": 2)) => "foo", "bar"
map-values(map)	| 返回map里面所有的value(list) |	map-values(("foo": 1, "bar": 2)) => 1, 2
map-get(map,key)	| 返回map里面指定可以的value    |	map-get(("foo": 1, "bar": 2), "foo") => 1
map-has-key(map,key)| 返回map里面是否含有指定的key |	map-has-key(("foo": 1, "bar": 2), "foo") => true
map-merge(map1,map2) | 合并map(map) | map-merge(("foo": 1), ("bar": 2)) => ("foo": 1, "bar": 2)
map-remove(map,keys) | 删除指定map中的指定key(map) | 	map-remove(("foo": 1, "bar": 2), "bar") => ("foo": 1)
keywords(args) |	返回一个函数参数组成的map(map) |	``@mixin foo(args...){@debug keywords($args); //=> (arg1: val, arg2: val)}``



## 三. 代码重用

### 3.1 继承

@extend

一个选择器继承另一个选择器

```
.class1 {
　　border: 1px solid #ddd;
}

.class2 {
　　@extend .class1;
　　font-size:120%;
}
```

```
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
  @extend .btn;
}

.btn-second {
  background-color: orange;
  color: #fff;
  @extend .btn;
}
```



### 3.2 宏

* @mixin/@include

可以重用的代码块
使用@include命令，调用这个mixin
mixin的强大之处，在于可以指定参数和缺省值。

```
　　@mixin left {
　　　　float: left;
　　　　margin-left: 10px;
　　}

    div {
　　　　@include left;
　　}
```

```
　　@mixin left($value: 10px) {
　　　　float: left;
　　　　margin-right: $value;
　　}

　　div {
　　　　@include left(20px);
　　}
```

```
　　@mixin rounded($vert, $horz, $radius: 10px) {
　　　　border-#{$vert}-#{$horz}-radius: $radius;
　　　　-moz-border-radius-#{$vert}#{$horz}: $radius;
　　　　-webkit-border-#{$vert}-#{$horz}-radius: $radius;
　　}

　　#navbar li { @include rounded(top, left); }
　　#footer { @include rounded(top, left, 5px); }
```


* @content

@content的调用是: ``@include mixin-name{}``
其他的@mixin调用是: ``@include mixin-name($var1,$var2,...,$varn)``

```
@mixin header{
    #header{
        @content;
    }
}

@include header{
    width:1000px;
    height:200px;
    .logo{
        width:200px;
    }
}
```

@content的使用价值其实体现在css3的media-queries，animation的keyframes定义，还有为浏览器兼容的定义

```
//定义media-queries的最小最大宽度
@mixin screen($res-min, $res-max)
{ 
	@media screen and ( min-width: $res-min ) and ( max-width: $res-max ){ @content; } 
} 

//定义animation的keyframes 
@mixin keyframes($name)
{ 
	@keyframes #{$name} { @content; } 
} 

//定义所有不支持圆角的浏览器使用背景图片 
//得使用[modernizr](http://modernizr.com/)来检测，在html上加class
@mixin no-border-radius
{ 
	.no-border-radius{ @content } 
}


#header{ @include screen(780px,1000px){ color:red; } } 

@include screen(780px,1000px)
{ body{ font-size:14px; } } 

@include keyframes(show)
{ 0% { opacity:0; } 100% { opacity:1; } } 

//注意下面这两个的区别 

@include no-border-radius
{ .box{ background:url(round-bg.gif) no-repeat; } } 

.box{ 
@include no-border-radius{ background:url(round-bg.gif) no-repeat; } 
}
```



### 3.3 占位符%placeholder

通过%placeholder声明的代码，如果不被@extend调用的话，不会产生任何代码

```
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}

.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
```


-| 宏定义 | 占位符 | 继承
----|----|----|----
声明 | @mixin 	| %placeholder 	| .class
调用 | @include 	| @extend 		| @extend
特色 | 可以传参 	| 合并代码 			| 不调用，不产生代码


### 3.4 插入文件

@import

用来插入外部文件。如果插入的是.css文件，则等同于css的import命令

```
@import "path/filename.scss";
@import "foo.css";
```

### 3.5 自定义函数


@function


```
　　@function double($n) {
　　　　@return $n * 2;
　　}
　　#sidebar {
　　　　width: double(5px);
　　}
```

```
@function view-f-px2em($px, $base: 16)
{
    @return ($px / $base) * 1em;
}

height: view-f-px2em(22px);
```


### 3.6 系统函数


#### 3.6.1 单位函数

* unit

``unit($number)``

得到这个数的单位

```
unit(100) => ""
unit(100px) => "px"
unit(3em) => "em"
unit(10px * 5em) => "em*px"
unit(10px * 5em / 30cm / 1rem) => "em*px/cm*rem"
```

* unitless

``unitless($number)``

返回这个数是否没有单位

```
unitless(100) => true
unitless(100px) => false
```

```
type-of($value)	返回一个值的类型	number，string，color，bool
unit($number)	返回一个值的单位	单位
unitless($number)	判断一个值是否带有带位	true/false
comparable($number-1, $number-2)	判断两个值是否可以做加、减和合并	true/false
```


#### 3.6.2 数组函数

* length

``length($list)``

返回一个列表的长度

```
length(10px) => 1
length(#514721 #FFF6BF #FFD324) => 3
```

* nth

``nth($list, $n)``

返回列表里面第n个位置的值

```
nth(10px 20px 30px, 1) => 10px
nth((Helvetica, Arial, sans-serif), 3) => sans-serif
```

* join

可以将多个值列表连结在一起；

* append

可以在值列表中添加值；

```
函数名	描述	注意
length($list)	返回一个列表的长度值	函数中的列表参数之间使用空格隔开，不能使用逗号
nth($list, $n)	返回一个列表中指定的某个标签值	$n 必须是大于 0 的整数
join($list1, $list2, [$separator])	将两个列给连接在一起，变成一个列表	只能将两个列表连接成一个列表，合并多个时嵌套join()，join() 函数中 $separator 除了默认值 auto 之外，还有 comma 和 space 两个值
append($list1, $val, [$separator])	将某个值放在列表的最后	可选参数同上
zip($lists…)	将几个列表结合成一个多维的列表	-
index($list, $value)	返回一个值在列表中的位置值	在 Sass 中，值是从1开始，没有则返回false
```


#### 3.6.3 字符串函数

* unquote

删除字符串中的引号

* quote

给字符串添加引号

* to-upper-case()

* to-lower-case()


#### 3.6.4 数字函数

* percentage

``percentage($value)``

将一个没有单位的数字转成百分比形式

```
percentage(0.2) => 20%
percentage(100px / 50px) => 200%
```

```
round($value)	将数值四舍五入，转换成一个最接近的整数
ceil($value)	将大于自己的小数转换成下一位整数
floor($value)	将一个数去除他的小数部分
abs($value)	返回一个数的绝对值
min($numbers…)	找出几个数值之间的最小值
max($numbers…)	找出几个数值之间的最大值
random()	获取随机
```

#### 3.6.5 三目函数

```
if($condition, $if-true, $if-false)
```

```
>> if(true,1px,2px)
1px
>> if(false,1px,2px)
2px
```



#### 3.6.6 颜色函数

* rgba

``rgba($red, $green, $blue, $alpha)``
``rgba($color, $alpha)``


```
rgba(#102030, 0.5) => rgba(16, 32, 48, 0.5) 
rgba(blue, 0.2) => rgba(0, 0, 255, 0.2)
```

* darken/lighten

``darken($color,$amount)``
``lighten($color,$amount)``

```
lighten(#cc3, 10%) // #d6d65c
darken(#cc3, 10%) // #a3a329
```
* other

```
grayscale(#cc3) // #808080
complement(#cc3) // #33c

saturate($color, 10%);   /* returns a color 10% more saturated than $color */
desaturate($color, 10%); /* returns a color 10% less saturated than $color */
grayscale($color);  /* returns grayscale of $color */
complement($color); /* returns complement color of $color */
invert($color);     /* returns inverted color of $color */
mix($color1, $color2, 50%); /* mix $color1 with $color2 with a weight of 50% */


```


## 四. 运算


* 加、减、乘、除

加减注意单位一致，
乘除注意单位不能同时存在，
运算符和变量，数值中间用空格分开

* 字符运算

用 + 串联
以等号左边的为准

```
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}

p:before {
  content: "Foo Bar";
  font-family: sans-serif; 
}
```



## 五. 高级功能

### 5.1 条件语句

@if
@else
@else if

```
　　p {
　　　　@if 1 + 1 == 2 { border: 1px solid; }
　　　　@if 5 < 3 { border: 2px dotted; }
　　}

　　@if lightness($color) > 30% {
　　　　background-color: #000;
　　} 
   @else {
　　　　background-color: #fff;
　　}
```

### 5.2 循环语句

* @for



```
//2种方式
@for $i from <start> through <end> //包括 end 这个值
@for $i from <start> to <end> //不包括 end 这个数

//$i 表示变量
//start 表示起始值
//end 表示结束值
```

```
　　@for $i from 1 to 10 {
　　　　.border-#{$i} {
　　　　　　border: #{$i}px solid blue;
　　　　}
　　}

　　
$grid-prefix: span !default;
$grid-width: 60px !default;
$grid-gutter: 20px !default;

%grid {
  float: left;
  margin-left: $grid-gutter / 2;
  margin-right: $grid-gutter / 2;
}
@for $i from 1 through 12 {
  .#{$grid-prefix}#{$i}{
    width: $grid-width * $i + $grid-gutter * ($i - 1);
    @extend %grid;
  }
}
　　
```

* @while


```
　　$i: 6;
　　@while $i > 0 {
　　　　.item-#{$i} { width: 2em * $i; }
　　　　$i: $i - 2;
　　}
　　
　　
$types: 4;
$type-width: 20px;

@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}
```

* @each

```
@each $var in <list>

//$var 就是一个变量名，
//<list> 是一个 SassScript 表达式，他将返回一个列表值。
```

```
　　@each $member in a, b, c, d {
　　　　.#{$member} {
　　　　　　background-image: url("/image/#{$member}.jpg");
　　　　}
　　}
```



```
$list: adam john wynn mason kuroir;//$list 就是一个列表

@mixin author-images {
    @each $author in $list {
        .photo-#{$author} {
            background: url("/images/avatars/#{$author}.png") no-repeat;
        }
    }
}

.author-bio {
    @include author-images;
}
```




```

```

