---
title: Manual
---

## Manual

语法指南



----------

### 1.清单

----------

#### 基础(Basic)
- [ ] 颜色 Color
- [ ] 字体 Font
- [ ] 多主题 Theme
- [ ] 国际化 Locale
- [x] 图标 Icon
- [x] 按钮 Button

#### 布局(Layout)
- [x] 栅格 Row/Col
- [x] 列表 List/Item
- [ ] 表格 Table
- [ ] 卡片 Card
- [ ] 面板 Panel
- [ ] 折叠面板 Collapse
- [ ] 树形控件 Tree
- [ ] 时间轴 Timeline
- [ ] 走马灯 Carousel
- [x] 容器 Content/Header/Footer/SubHeader/SubFooter

#### 导航(Navigation)
- [ ] 导航菜单 Menu
- [ ] 下拉菜单 Dropdown
- [ ] 分页栏 Pagination
- [ ] 面包屑 BreadCrumb
- [ ] 步骤条 Steps
- [x] 标签页 Tabs
- [x] 标签页(下划线) TabsStriped
- [ ] 加载进度条(顶部) LoadingBar
- [x] 按钮栏 ButtonBar
- [ ] 工具栏 ToolBar
- [x] 底部栏 Tabbar/Page
- [x] 导航栏 Navbar/Page
- [ ] 侧边栏 Sidebar

#### 表单(Form)
- [x] 输入框 Input
- [x] 单选框 Radio
- [x] 复选框 Check
- [x] 切换器 Toggle
- [x] 下拉框 Select
- [x] 搜索框 Search
- [x] 滑动条 Slider
- [ ] 选择器 Picker
- [ ] 日期选择 DatePicker
- [ ] 时间选择 TimerPicker
- [ ] 地区选择 RegionPicker
- [ ] 颜色选择 ColorPicker
- [ ] 级联选择 Cascader
- [ ] 穿梭框 Transfer
- [ ] 数字输入 Number
- [ ] 星级评分 Rate
- [x] 文件上传 Upload
- [x] 表单 Form

#### 视图(View)
- [x] 告警提示 Alert
- [ ] 确认提示 Confirm
- [x] 一般提示 Toast
- [ ] 全局提示 Message
- [ ] 通知提醒 Notice
- [ ] 模态框 Modal
- [x] 进度条 Progress
- [x] 徽标 Badge
- [ ] 标签 Tag
- [ ] 文字提示 Tooltip
- [ ] 气泡提示 Poptip
- [ ] 加载提示 Loading/Spin
- [ ] 回到顶部 BackTop

#### 图表(Chart)
- [ ] 进度环 Circle
- [ ] 中国省市图 ChinaMap

#### 其他(Other)
- [x] 编辑器 Editor


----------

### 2.组件

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

### 3.指令(Directive)

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

### 4.过滤器(Filter)

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

### 5.混合(Mixin)

----------

```
```


----------

### 6.动画与过渡(Animation & Transition)

----------

```
```

https://vuefe.cn/v2/guide/transitions.html


https://vuefe.cn/v2/guide/transitioning-state.html
