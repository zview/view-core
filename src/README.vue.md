
# 组件

----

## 0.基础组件

在 Vue 中，父子组件之间的关系可以概述为：props 向下，events 向上。
父组件通过 props 向下传递数据给子组件，子组件通过 events 发送消息给父组件。

### 编写可复用组件

Vue 组件的 API 来自三部分 - props, events 和 slots:

Props 允许外部环境传递数据给组件
Events 允许组件对外部环境产生副作用(side effects)
Slots 允许外部环境将额外的内容组合在组件中。

使用 v-bind(:) 和 v-on(@) 的简写语法：

```html
<my-component
  :foo="baz"
  :bar="qux"
  @event-a="doThis"
  @event-b="doThat"
>
  <img slot="icon" src="...">
  <p slot="main-text">Hello!</p>
</my-component>
```

### 子组件索引

在 JavaScript 中直接访问子组件。为此可以使用 ref 为子组件指定一个索引 ID。例如：
```html
<div id="parent">
  <user-profile ref="profile"></user-profile>
</div>
var parent = new Vue({ el: '#parent' })
// 访问子组件
var child = parent.$refs.profile
```
当 ref 和 v-for 一起使用时，ref 是一个数组，包含相应的子组件。
$refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案 - 应当避免在模板或计算属性中使用 $refs


### 组件命名规范

当注册组件（或者 props）时，可以使用 kebab-case，camelCase，或 PascalCase。

```vue
// 在组件定义中
components: {
  // 使用 kebab-case 形式注册
  'kebab-cased-component': { /* ... */ },
  // register using camelCase
  'camelCasedComponent': { /* ... */ },
  // register using PascalCase
  'PascalCasedComponent': { /* ... */ }
}
```
在 HTML 模板中，请使用 kebab-case 形式：

```html
<!-- 在HTML模板中始终使用 kebab-case -->
<kebab-cased-component></kebab-cased-component>
<camel-cased-component></camel-cased-component>
<pascal-cased-component></pascal-cased-component>
```

----

## 1.Props


### 一般Props命名

子组件需要使用 props 选项显式声明 props，以便它可以从父组件接收到期望的数据。

HTML 属性会忽略大小写(case-insensitive)，因此，在使用非字符串模板(non-string template)时，
驼峰式命名的 prop 名称，需要转换为同等相应的串联式命名（连字符分隔）：

```
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
<!-- HTML 中的串联式命名 -->
<child my-message="hello!"></child>
```

即

```
调用地方如  class-name='cls'
组件实现为  className
```

### 动态Props
    

类似于将一个普通属性绑定到一个表达式，我们还可以使用 v-bind 将 props 属性动态地绑定到父组件中的数据。
无论父组件何时更新数据，都可以将数据向下流入到子组件中：

```
<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>
```

使用 v-bind 简写语法，通常看起来更简洁：

```
<child :my-message="parentMsg"></child>
```

* 使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容String除外，具体看组件文档)
* 如果需要将父组件更新的数据同步在子组件,必须使用:来绑定

```
<!-- 这会向下传递一个普通字符串 "1" -->
<comp some-prop="1"></comp>

<!-- 这会向下传递一个真正的数值 -->
<comp v-bind:some-prop="1"></comp>
```

如果你想要将一个对象中的所有属性都作为 props 传递，可以使用不带参数的 v-bind（将 v-bind:prop-name 替换为 v-bind）。
例如，给定一个 todo 对象：
```
todo: {
  text: 'Learn Vue',
  isComplete: false
}

<todo-item v-bind="todo"></todo-item>
```

等同于如下：

```
<todo-item
  v-bind:text="todo.text"
  v-bind:is-complete="todo.isComplete"
></todo-item>
```

### 单向数据流


所有的 props 都是在子组件属性和父组件属性之间绑定的，按照自上而下单向流动方式构成：
当父组件属性更新，数据就会向下流动到子组件，但是反过来却并非如此。

这种机制可以防止子组件意外地修改了父组件的状态，会造成应用程序的数据流动变得难于推断。
此外，每次父组件更新时，子组件中所有的 props 都会更新为最新值。
也就是说，你不应该试图在子组件内部修改 prop。如果你这么做，Vue 就会在控制台给出警告。

诱使我们修改 prop 的原因，通常有两种：
prop 只是用于传递初始值，之后子组件想要直接将 prop 作为一个局部数据的属性；
prop 作为一个需要转换的原始值传入。

这些场景中，比较合适的应对方式是：
定义一个局部数据的属性，将 prop 属性的初始值作为局部属性的初始值：
```
props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}
```
定义一个计算属性，从 prop 传入的值来取值：
```
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

* 注意，在 JavaScript 中对象和数组会作为引用类型传入，因此，如果 prop 是一个对象或数组，在子组件内部修改对象或数组自身，将会影响父组件的状态。


### Props验证

除了将 props 定义为一个数组或字符串，你还可以将其定义为一个带有验证要求条件的对象：

```
Vue.component('example', {
  props: {
    // 基本类型检查（`null` 表示接受所有类型）
    propA: Number,
    // 多种可能的类型
    propB: [String, Number],
    // 必须传递，一个的字符串
    propC: {
      type: String,
      required: true
    },
    // 数字类型，有一个默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象类型，
    // 应该默认返回一个工厂函数
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
```

type 可以是以下原生构造函数之一：

```
String
Number
Boolean
Function
Object
Array
Symbol
```

除了以上这些，type 还可以是一个自定义构造函数，在通过 instanceof 检测时，此构造函数会被用于进行类型推断。
当 prop 验证失败，（如果使用的是开发构建版本，）Vue 就会在控制台抛出警告。
注意，props 会在组件实例创建之前进行验证，因此在 default 或 validator 函数中，
像 data, computed 或 methods 这些组件实例上的属性还无法访问。

### 非Prop属性

非 prop 属性，就是指无需符合 prop 属性的定义规则，而是可以直接传入到组件的属性。
虽然，我们推荐通过显式定义 props，将信息数据从父组件传递给子组件，
然而组件库的创建者，并无法完全预知到，他们编写的组件可能会被用于什么样的上下文环境中。
这也就是为什么组件可以接收任意属性，并且这些属性将会被添加到组件的根元素中。

例如，假设我们使用一个名为 bs-date-input，用到 BootStrap 插件的第三方组件，
并且需要向此组件内的 input 传入一个 data-3d-date-picker 属性。我们可以将这个属性添加到我们的组件实例中：
```<bs-date-input data-3d-date-picker="true"></bs-date-input>```
然后，data-3d-date-picker="true" 属性就会自动添加到 bs-date-input 组件的根元素上。

假设这是 bs-date-input 组件的模板：
<input type="date" class="form-control">
为了给日期选择器插件指定一个主题，我们可能需要向组件添加一个特定的 class 类名，就像这样：
```
<bs-date-input
  data-3d-date-picker="true"
  class="date-picker-theme-dark"
></bs-date-input>
```
在这种场景中，定义了两个不同的 class 值：
form-control，是在组件模板中设置的 class 类名
date-picker-theme-dark，是从父组件传入的 class 类名
对于大多数属性，传给组件的值将会替换掉组件自身设置的值。
因此，例如，向组件传入 type="large"，将会替换掉组件自身设置的 type="date"，这就很可能破坏组件的一些预设功能！
幸运的是，class 和 style 属性会略微智能，这两个值会被合并，而非替换，而最终的值是：form-control date-picker-theme-dark。

----

## 2.Events


如何将子组件内部发生的一些变化向上通知到父组件呢？这就是 Vue 自定义事件的用途。

### 使用 v-on 的自定义事件

每个 Vue 实例都接入了一个事件接口(events interface)，也就是说，这些 Vue 实例可以做到：

```
使用 $on(eventName) 监听一个事件
使用 $emit(eventName) 触发一个事件
```
注意，Vue 事件系统，不同于浏览器的 EventTarget API。虽然它们之间具有类似的事件机制，但是 $on 和 $emit 并非 addEventListener 和 dispatchEvent 的别名

除此之外，父组件可以直接在模板中调用子组件的地方，使用 v-on 监听子组件触发的事件。
无法在父组件或父实例中使用 $on 来监听子组件触发的事件。必须直接在模板中使用v-on(@)，就像下面的例子：

这里是一个示例：
```
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
```

在这个例子中，需要注意的要点是，子组件仍然是与组件外部环境发生的变化之间完全解耦的。
它需要做的就是将自身内部的信息全部通知到父组件中，以防止父组件主动关注子组件内部信息造成耦合。

### 原生事件绑定

有时候，你可能希望某个组件的根元素能够监听到原生事件。在这种场景中，你可以在 v-on 后面添加 .native 修饰符。例如：
<my-component v-on:click.native="doTheThing"></my-component>



### 使用自定义事件的表单输入组件

#### v-model 传递数据

自定义事件，还可以用于辅助自定义输入框实现 v-model。回顾下：

```
<input v-model="something">
```
其实是下面的语法糖包装而成：
```
<input
  v-bind:value="something"
  v-on:input="something = $event.target.value">
```
  
在一个组件上使用 v-model 时，会简化为：
```
<custom-input
  :value="something"
  @input="value => { something = value }">
</custom-input>
```

因此，对于一个带有 v-model 的组件，它应该如下：
接收一个 value prop
触发 input 事件，并传入新值
让我们通过一个非常简单的货币输入框，看看带有 v-model 的组件的表现：

```
<currency-input v-model="price"></currency-input>
Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)">\
    </span>\
  ',
  props: ['value'],
  methods: {
    // 此方法不是用来直接更新 value，
    // 而是用于对 input 的 value
    // 进行格式化和位数限制
    updateValue: function (value) {
      var formattedValue = value
        // 移除两侧的空白符
        .trim()
        // 保留 2 位小数
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 如果 value 还不是标准格式，
      // 手动将其覆盖以符合规范
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // 向上触发 input 事件，并传递数字值
      this.$emit('input', Number(formattedValue))
    }
  }
})
```


#### 定制v-model


在一个组件中，v-model 默认使用 value 作为 prop，以及默认使用 input 作为监听事件，
但是一些输入框类型，例如 checkbox 和 radio，可能会用到 value。在这种情况下，为了避免冲突，就会需要使用组件的 model 选项：

```
Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    // 这样可以将 `value` prop 释放出来，用作其他用途
    value: String
  },
  // ...
})
<my-checkbox v-model="foo" value="some value"></my-checkbox>
```
以上等同于：
```
<my-checkbox
  :checked="foo"
  @change="val => { foo = val }"
  value="some value">
</my-checkbox>
```
注意，仍然需要显式声明 checked prop 属性。


### 非父子关系通讯

有时候两个组件之间需要进行通信，但是它们彼此不是父子组件的关系。
在一些简单场景，你可以使用一个空的 Vue 实例作为一个事件总线中心(central event bus)：

```
var bus = new Vue()

// 在组件 A 的 methods 方法中触发事件
bus.$emit('id-selected', 1)

// 在组件 B 的 created 钩子函数中监听事件
bus.$on('id-selected', function (id) {
  // ...
})
```

----


## 3.Slots


### 单个 Slot

除非子组件模板中，包含至少一个 <slot> 插口，否则父组件的内容将会被丢弃。
当子组件模板中只有一个没有属性的 slot 时，父组件的内容片段将会整个插入到子组件中 slot 所在的 DOM 位置，并替换掉 slot 标签本身。
最初在 <slot> 标签中的任何内容，都被视为备用内容。备用内容在子组件作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。

```
假定 my-component 组件具有以下模板：
<div>
  <h2>我是子组件的标题</h2>
  <slot>
    只有在没有要分发的内容时
    才会显示。
  </slot>
</div>
然后是，一个调用子组件的父组件：
<div>
  <h1>我是父组件的标题</h1>
  <my-component>
    <p>这是一些初始内容</p>
    <p>这是更多的初始内容</p>
  </my-component>
</div>
渲染结果：
<div>
  <h1>我是父组件的标题</h1>
  <div>
    <h2>我是子组件的标题</h2>
    <p>这是一些初始内容</p>
    <p>这是更多的初始内容</p>
  </div>
</div>
```



### 具名 Slot

<slot> 元素有一个特殊的 name 属性，可以用于深度定制如何分发内容。
可以给多个 slot 分配不同的名字。一个具有名称的 slot，会匹配内容片段中有对应 slot 属性的元素。
还是可以有一个没有名称的 slot 作为默认 slot，这个插口用于将那些未匹配到的内容全部接收进来。
如果没有默认的 slot，这些未匹配到的内容将直接丢弃。

```
例如，假定我们有一个 app-layout 组件，它的模板为：
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
父组件模板：
<app-layout>
  <h1 slot="header">这里可能是一个页面标题</h1>
  <p>主要内容的一个段落。</p>
  <p>另一个主要段落。</p>
  <p slot="footer">这里是一些联系信息</p>
</app-layout>
渲染结果为：
<div class="container">
  <header>
    <h1>这里可能是一个页面标题</h1>
  </header>
  <main>
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
  </main>
  <footer>
    <p>这里是一些联系信息</p>
  </footer>
</div>
```


----


## 4. 动态组件

### Component

可以让多个组件使用同一个挂载点，然后动态地在它们之间切换。
要实现此效果，我们可以使用 Vue 保留的 <component> 元素，
将多个组件动态地绑定到 <component> 元素的 is 属性上：

```
var vm = new Vue({
  el: '#example',
  data: {
    currentView: 'home'
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
<component v-bind:is="currentView">
  <!-- 组件在 vm.currentview 变化时改变！ -->
</component>

也可以直接绑定到组件对象上：
var Home = {
  template: '<p>Welcome home!</p>'
}
var vm = new Vue({
  el: '#example',
  data: {
    currentView: Home
  }
})
```


### keep-alive

如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数：

```
<keep-alive>
  <component :is="currentView">
    <!-- 非活动组件将被缓存！ -->
  </component>
</keep-alive>
```


------
