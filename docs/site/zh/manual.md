---
title: Manual
---

## Manual

语法指南

- 通用
- 组件
- 服务
- 指令
- 过滤器
- 混合
- 完整例子



### ionic项目

* 源码

https://github.com/ionic-team/ionic

* 发布

http://code.ionicframework.com/1.3.2/ionic-v1.3.2.zip


### TODO

1. Radio图标只能右边,不能左边
2. Check图标只能左边,不能右边
3. Progress
4. Picker做成通用的

----------

### 1.通用

- [ ] 颜色 Color
- [ ] 字体 Font
- [ ] 多主题 Theme
- [x] 国际化 Locale
- [x] 动画 Animation
- [x] 过渡 Transition
- [x] 校验 Validator

----------

#### 概述

**view** 加载完成后，一部分组件已通过`Vue.component`方法注册为**全局组件**，以 Vue 标准组件方式进行使用；
另一部分组件则注册为**全局组件服务**，调用其方法即可使用，如：`$toast`、`$dialog` 等。

下面以 MdButton、$toast 为例进行说明：

```html
<template>
  <div class="page has-navbar" v-nav="{'title': 'Component and Service'}">
    <div class="page-content padding padding-top">
      <md-button class="button button-assertive button-block">
        just a button
      </md-button>

      <md-button class="button button-balanced button-block" @click.native="onClick()">
        show toast
      </md-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      onClick() {
        $toast.show("button clicked.")
      }
    }
  }
</script>
```

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/component_and_service.html" frameborder="0"></iframe>
</div>


#### 应用(App)

**view** 通过 `.view-app` 来定义应用容器

```html
<template>
  <div view-app>
    <router-view></router-view>
  </div>
</template>
```

#### 颜色(Color)

包含以下颜色

* Ionic系列

<div class="color light">Light <span>#FFFFFF</span></div>
<div class="color stable">Stable <span>#F5F5F5</span></div>
<div class="color positive">Positive <span>#4A90E2</span></div>
<div class="color calm">Calm <span>#11C1F3</span></div>
<div class="color balanced">Balanced <span>#44CC00</span></div>
<div class="color energized">Energized <span>#FFBD17</span></div>
<div class="color assertive">Assertive <span>#EA5A49</span></div>
<div class="color royal">Royal <span>#B5B5B5</span></div>
<div class="color dark">Dark <span>#484746</span></div>

* BootStrap系列

<div class="color primary">Primary <span>#2d8cf0</span></div>
<div class="color success">Success <span>#19be6b</span></div>
<div class="color info">Info <span>#2db7f5</span></div>
<div class="color warning">Warning <span>#ff9900</span></div>
<div class="color danger">Danger <span>#ed3f14</span></div>

* Black系列

<div class="color black">Black <span>#000000</span></div>
<div class="color dimgray">Dimgray <span>#696969</span></div>
<div class="color gray">Gray <span>#808080</span></div>
<div class="color darkgray">Darkgray <span>#a9a9a9</span></div>
<div class="color silver">Silver <span>#c0c0c0</span></div>
<div class="color lightgrey">Lightgrey <span>#d3d3d3</span></div>
<div class="color gainsboro">Gainsboro <span>#dcdcdc</span></div>
<div class="color whitesmoke">Whitesmoke <span>#f5f5f5</span></div>
<div class="color white">White <span>#ffffff</span></div>

<p class="tip">
这些场景色将作为主题元素可以直接应用到很多组件中。
</p>

----------

#### 字体(Font)

沿用了 **ionic** 跟随苹果系统的字体栈

```css
font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", 'sans-serif';
```

----------

#### 多主题(Theme)

```css

```

----------

#### 国际化(Locale)

* 准备语言包

```js

export default {
    'zh-CN':
    {
        'demo' :
        {
            'vendor': '小竹',
        }
    },
    'zh-TW':
    {
        'demo' :
        {
            'vendor': '小築',
        }
    },
    'en-US':
    {
        'demo' :
        {
            'vendor': 'zuv',
        }
    },
}

```

* 导入依赖时指定语言

```js

import View from 'zuv-view';
import 'zuv-view/dist/view.min.css';
import locales from './lang/locales';

const view_config = {
    debug: true,
    lang: 'zh-CN',
    locales: locales,
};
Vue.use(View, view_config);

```

* 组件语言已经切换为指定语言, 同时可使用自定义语言包

```js

let vendor = vm.$t('demo.vendor');
console.log('vendor', vendor);

```


#### 过渡(Transition)

##### 默认

比如, 使用 *fadeInLeft* and *fadeOutLeft*, 可以这么写
```html
<transition-group name="fadeLeft" tag="ul">
    <li v-for="item in items" v-bind:key="item">
        {{ item }}
    </li>
</transition-group>
```

##### 自定义

  Add *-enter/-leave* to the classes:

```html
<transition
  name="custom-classes-transition"
  enter-active-class="bounceLeft-enter"
  leave-active-class="bounceRight-leave"
>
  <p v-if="show">hello</p>
</transition>
```
  Or use the regular *In/Out* syntax:
  
```html
<transition
  name="bounce"
  enter-active-class="bounceInLeft"
  leave-active-class="bounceOutRight"
>
  <p v-if="show">hello</p>
</transition>
```

##### 支持列表

###### Bounce
  * `bounce`
  * `bounceDown`
  * `bounceLeft`
  * `bounceRight`
  * `bounceUp`

###### Fade
  * `fade`
  * `fadeDown`
  * `fadeDownBig`
  * `fadeLeft`
  * `fadeLeftBig`
  * `fadeRight`
  * `fadeRightBig`
  * `fadeUp`
  * `fadeUpBig`

###### Rotate
  * `rotate`
  * `rotateDownLeft`
  * `rotateDownRight`
  * `rotateUpLeft`
  * `rotateUpRight`

###### Slide
  * `slideDown`
  * `slideLeft`
  * `slideRight`
  * `slideUp`

###### Zoom
  * `zoom`
  * `zoomDown`
  * `zoomLeft`
  * `zoomRight`
  * `zoomUp`
  
  
#### 校验(Validetor)  

集成vee-validate

----------

### 2. 服务清单

| 服务名称 | 描述 |
|-----|-----|
| `$toast` | 文字提示 | 
| `$loading` | 加载提示 | 
| `$dialog` | 对话框 | 
| `$popup` | 弹层 | 
| `$sidebar` | 侧边栏 | 
| `$modal` | 模态窗 | 
| `$actionsheet` | 操作列表 | 
| `$backdrop` | 遮罩层 | 
| `$storagel` | 本地存储 |
| `$storages` | 会话存储 |

全局方法

取版本
$version

设置方言
$set_locale(locale)

设置调试模式
$set_debug(debug)

信息输出
$info(...message)

错误输出
$error(...message)



#### 服务(Service)
- [x] 全屏遮罩 Backdrop
- [x] 一般提示 Toast
- [x] 加载提示 Loading/Spin
- [x] 操作列表 ActionSheet
- [x] 对话框 Dialog(Alert/Confirm)
- [x] 自定义弹层 Popup
- [x] 侧边栏 Sidebar
- [x] 模态框 Modal
- [ ] 全局提示 Message
- [ ] 通知提醒 Notice
- [ ] 本地存储
- [ ] 会话存储


### 3. 服务语法

----------









----------

### 4.组件清单

----------

#### 基础(Basic)
- [x] 图标 Icon
- [x] 按钮 Button

#### 布局(Layout)
- [x] 栅格 Row/Col
- [x] 列表 List/Item
- [x] 宫格 Cells
- [ ] 表格 Table
- [x] 面板 Panel/Card
- [x] 折叠面板 Accordion/Collapse
- [ ] 树形控件 Tree
- [ ] 时间轴 Timeline
- [ ] 走马灯 Carousel
- [x] 轮播 Swiper
- [x] 容器 Content/Header/Footer/SubHeader/SubFooter

#### 导航(Navigation)
- [ ] 导航菜单 Menu
- [ ] 下拉菜单 Dropdown
- [ ] 分页栏 Pagination
- [ ] 面包屑 BreadCrumb
- [ ] 步骤条 Steps
- [x] 标签页 Tabs
- [ ] 加载进度条(顶部) LoadingBar
- [ ] 工具栏 ToolBar
- [x] 按钮栏 ButtonBar
- [x] 底部栏 Tabbar/Page
- [x] 导航栏 Navbar/Page

#### 表单(Form)
- [x] 输入框 Input
- [x] 单选框 Radio
- [x] 复选框 Check
- [x] 切换器 Toggle
- [x] 下拉框 Select
- [x] 搜索框 Search
- [x] 滑动条 Slider
- [x] 级联选择 Cascade
- [ ] 选择器 Picker
- [x] 日期选择 DatePicker
- [ ] 时间选择 TimerPicker
- [x] 地区选择 RegionPicker
- [ ] 颜色选择 ColorPicker
- [ ] 穿梭框 Transfer
- [ ] 数字输入 Number
- [ ] 星级评分 Rate
- [x] 文件上传 Upload
- [x] 表单 Form

#### 视图(View)
- [x] 进度条 Progress
- [x] 徽标 Badge
- [ ] 标签 Tag
- [ ] 文字提示 Tooltip
- [ ] 气泡提示 Poptip
- [ ] 回到顶部 BackTop

#### 图表(Chart)
- [ ] 进度环 Circle
- [ ] 中国省市图 ChinaMap

#### 其他(Other)
- [x] 编辑器 Editor






----------

### 5.组件语法

----------


#### 按钮(Button)

##### 用法

```html
<Button bg-color="positive">positive</Button>
```

##### 属性

| 属性		| 描述		| 类型		| 必选		| 默认值   |
| ----  	| ----		| ----		| ----		| ----    |
| bg-color| 背景颜色	| color	| 是		| -       |
| color	| 前景颜色	| color	| 否		| -       |
| type  	| 按钮类型 	| String 	| 否 		| -       |


<p class="warning">
  `Button` 的 `type` 属性只支持 `clear`、`block`、`outline`、`fab`、`material`
</p>

> [演示](https://iview.github.io/view/docs/demo/#/button)


---

#### 图标(Icon)

既然 **view** 是以 ionic 样式为基础的，那它当然也包含 [ionicons](http://ionicons.com/) 图标集。

ionicons图标
http://ionicons.com/
https://ionicframework.com/docs/ionicons/

fontawasome图标
http://fontawesome.io/cheatsheet/


##### 用法

```html
<Button bg-color="positive">positive</Button>
```

##### 属性

| 属性		| 描述		| 类型		| 必选		| 默认值   |
| ----  	| ----		| ----		| ----		| ----    |
| bg-color| 背景颜色	| color	| 是		| -       |
| color	| 前景颜色	| color	| 否		| -       |
| type  	| 按钮类型 	| String 	| 否 		| -       |


<p class="warning">
  `Button` 的 `type` 属性只支持 `clear`、`block`、`outline`、`fab`、`material`
</p>

> [演示](https://iview.github.io/view/docs/demo/#/icon)


---

#### 列表(List)

##### 用法

```html
<Button bg-color="positive">positive</Button>
```

##### 属性

| 属性		| 描述		| 类型		| 必选		| 默认值   |
| ----  	| ----		| ----		| ----		| ----    |
| bg-color| 背景颜色	| color	| 是		| -       |
| color	| 前景颜色	| color	| 否		| -       |

> [演示](https://iview.github.io/view/docs/demo/#/list)

---

#### 列表(Item)

##### 用法

```html
<Button bg-color="positive">positive</Button>
```

##### 属性

| 属性		| 描述		| 类型		| 必选		| 默认值   |
| ----  	| ----		| ----		| ----		| ----    |
| bg-color| 背景颜色	| color	| 是		| -       |
| color	| 前景颜色	| color	| 否		| -       |

> [演示](https://iview.github.io/view/docs/demo/#/list)

---












----------

### 6.指令(Directive)

----------

| 指令 | 描述 |
|-----|-----|
| `v-drag`  | 拖动指令 | 
| `v-focus` | 焦点指令 | 
| `v-badge` | 角标指令 |
| `v-gesture` | 手势指令 |
| `v-infinite-scroll` | 动态加载指令 |
| `v-pull-refresh` | 下拉刷新指令 |

----------

#### 拖动(v-drag)

##### 用法

```html
<div v-drag></div>
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/v-drag)

---

#### 焦点(v-focus)

##### 用法

```html
<input v-focus />
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/v-focus)

---

#### 角标(v-badge)

##### 用法

```html
<span v-badge />
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/v-badge)

---

#### 手势(v-gesture)

##### 用法

```html
<div v-gesture />
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/v-gesture)

---

#### 动态加载(v-infinite-scroll)

##### 用法

```html
<div v-infinite-scroll />
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/v-infinite-scroll)

---

#### 下拉刷新(v-pull-refresh)

##### 用法

```html
<div v-pull-refresh />
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/v-pull-refresh)


----------

### 7.过滤器(Filter)

----------

| 过滤器 | 描述 |
|-----|-----|
| `formatdate` | 格式化日期 | 
| `formattime` | 格式化时间 | 
| `capitalize` | 首字母大写 |
| `viewsubstr` | 字符串截取 |
| `formatdatetime` | 格式化日期时间 | 

----------

#### 格式化日期(formatdate)

##### 用法

```html
{{ message | formatdate}}

<div :id="message | formatdate"></div>
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/formatdate)

---

#### 格式化时间(formattime)

##### 用法

```html
{{ message | formattime}}

<div :id="message | formattime"></div>
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/formattime)

---

#### 首字母大写(capitalize)

##### 用法

```html
{{ message | capitalize}}

<div :id="message | capitalize"></div>
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/capitalize)

---

#### 字符串截取(viewsubstr)

##### 用法

```html
{{ message | viewsubstr(10)}}

<div :id="message | viewsubstr(10)"></div>
```

##### 属性

```
```

> [演示](https://iview.github.io/view/docs/demo/#/viewsubstr)



----------

### 8.混合(Mixin)

----------

| 混合 | 描述 |
|-----|-----|
| `code` | 描述 | 

----------

```
```

----------

### 9.完整例子(Sample)

----------

```
```


<div style="height: 300px;"></div>
