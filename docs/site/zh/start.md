---
title: 起步
---

## 起步

### 安装

- 安装依赖包

```
    "vue": "^2.5.2",
    "vue-i18n": "^5.0.3"
```

- 安装View

```
npm install zuv-view

or

yarn add zuv-view
```

<hr/>


### 使用


- 导入类库

```js
import View from 'zuv-view';
import 'zuv-view/dist/view.min.css';
Vue.use(View);
```

- 应用入口

```vue
<div view-app>
    <router-view></router-view>
</div>
```

- 使用组件

```vue
<Button type="block" bg-color="calm" @click="_on_button_click('calm')">Hello world</Button>
```

没错，就这么简单。

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/index.html" frameborder="0"></iframe>
</div>

<hr/>
