


----

## 1. CSS动画

```
ease: 默认值,缓解效果,变化速度逐渐放慢,平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
linear: 线性效果, 匀速变化, 线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
ease-in: 渐显效果, 加速变化, 由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
ease-out: 渐隐效果, 减速变化, 由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
ease-in-out: 渐显渐隐效果, 由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
cubic-bezier(<num>, <num>, <num>, <num>): 自定义变化速度,贝塞尔曲线类型，4个数值需在[0, 1]区间内
```

分为2类,过渡(Transition)和动画(Animation)

过渡:
都支持, 兼容性好;只能定义开始和结束状态;是一次性的,不能重复发生,除非一再触发;需要事件触发
动画:
克服过渡的缺点,过渡可以视为简单版的动画



### 1.1 过渡 Transition


名称 | 规范 | 说明
------- | ------- |-------
transition 					        | 3 | 复合属性。对象变换时的过渡效果
transition-property 		    | 3 | 对象中的参与过渡的属性
transition-duration 		    | 3 | 对象过渡的持续时间
transition-timing-function	| 3 | 对象中过渡的类型
transition-delay 			      | 3 | 对象延迟过渡的时间

```
transition: [ t-property ] || [ t-duration ] || [ t-timing-function ] || [ t-delay ]

-transition-delay: <time>[ ,<time> ]*
-
-transition-duration: <time>[ ,<time> ]*
-
-transition-property: all | none | <property>[ ,<property> ]*
-
  参与过渡的具体属性, 如color,background-color,opacity等
-transition-timing-function: 
linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)
[ ,linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) ]*
-
  默认值：ease
```

* 例子

```
//
transition: 1s height;
transition: 1s 1s height ease;

transition: 1s height ease, 1s width ease-in-out;
transition: 1s 1s height, 1s 1s width;
transition: 1s height, 1s 1s width;
transition: width 1000ms ease, height 2s ease-in;

//
transition-property: height;
transition-duration: 1s;
transition-timing-function: ease;
transition-delay: 1000ms;

transition-property: width,height;
transition-duration: 1s,2s;
```


### 1.2 动画 Animation


名称 | 规范 | 说明
------- | ------- |-------
animation						      | 3	| 复合属性。对象所应用的动画特效
animation-name				    | 3	| 对象所应用的动画名称
animation-duration			  | 3	| 对象动画的持续时间
animation-timing-function	| 3	| 对象动画的过渡类型
animation-delay				    | 3	| 对象动画延迟的时间
animation-iteration-count	| 3	| 对象动画的循环次数
animation-direction			  | 3	| 对象动画在循环中是否反向运动
animation-play-state		  | 3	| 对象动画的状态
animation-fill-mode			  | 3	| 对象动画时间之外的状态
@keyframes	        	    | 3	| 动画定义


```
animation: [[ a-name ] || [ a-duration ] || [ a-timing-function ] || [ a-delay ] || [ a-iteration-count ] || [ a-direction ]] 
          [ , [ a-name ] || [ a-duration ] || [ a-timing-function ] || [ a-delay ] || [ a-iteration-count ] || [ a-direction ]]*
适用于：所有元素，包含伪对象:after和:before

-animation-name: none | <identifier> [ , none | <identifier> ]* 
-
  名称由@keyframes定义, 可以为多个
-animation-duration: <time> [ , <time> ]*
-
-animation-timing-function: 
linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) 
[ , linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) ]*
-
-animation-delay: <time> [ , <time> ]*
-
-animation-iteration-count: infinite | <number> [ , infinite | <number> ]*
-
-animation-direction: normal | alternate [ , normal | alternate ]*
-
-animation-play-state: running | paused [ , running | paused ]*
-
  running: 默认值, 规定动画正在播放
  paused: 规定动画已暂停
-animation-fill-mode: none | forwards | backwards | both [ , none | forwards | backwards | both ]*
-
  none: 默认值, 回到动画没开始时的状态。
  forwards: 让动画停留在结束状态
  backwards: 让动画回到第一帧的状态
  both: 向前和向后填充模式都被应用
```

* 例子

```
animation: 1s rainbow infinite;
animation: 1s rainbow 3;
animation: 1s rainbow forwards;
animation: 1s 1s rainbow linear 3 forwards normal;

//
animation-name: rainbow;
animation-duration: 1s;
animation-timing-function: linear;
animation-delay: 1s;
animation-fill-mode: forwards;
animation-direction: normal;
animation-iteration-count: 3;
```

```
@keyframes <identifier> '{' <keyframes-blocks> '}';
<keyframes-blocks>: [ [ from | to | <percentage> ]{ sRules } ] [ [ , from | to | <percentage> ]{ sRules } ]*

取值:
<identifier>: identifier定义一个动画名称
<keyframes-blocks>: 定义动画在每个阶段的样式，即帧动画。
说明:
指定动画名称和动画效果。
@keyframes定义的动画名称用来被animation-name所使用。
```

* 例子

简单的动画可以直接使用关键字from和to，即从一种状态过渡到另一种状态：

```
@keyframes testanimations{
	from{ opacity:1; }
	to{ opacity:0; }
}
```

复杂的动画，可以混合<percentage>去设置某个时间段内的任意时间点的样式：
也可以不适用关键字from和to，而都使用<percentage>

```
@keyframes testanimations{
	from{ transform:translate(0,0); }
	20%{ transform:translate(20,20); }
	40%{ transform:translate(40,0); }
	60%{ transform:translate(60,20); }
	80%{ transform:translate(80,0); }
	to{ transform:translate(100,20); }
}
@keyframes testanimations{
	0%{ transform:translate(0,0); }
	20%{ transform:translate(20,20); }
	40%{ transform:translate(40,0); }
	60%{ transform:translate(60,20); }
	80%{ transform:translate(80,0); }
	100%{ transform:translate(100,20); }
}
```

### 1.3 变换 Transform

名称 | 标准 | 说明
----|----|----
transform	        	| 3	| 对象的变换
transform-origin		| 3	| 对象中的变换所参照的原点


```
transform: none | matrix(<number>,<number>,<number>,<number>,<number>,<number>)
? translate(<length>[,<length>])? translateX(<length>)? translateY(<length>)
? rotate(<angle>)? scale(<number>[,<number>])? scaleX(<number>)? scaleY(<number>)
? skew(<angle>[,<angle>])? skewX(<angle>) || skewY(<angle>)?

取值:
none: 无转换

-2D变换
matrix(<number>,<number>,<number>,<number>,<number>,<number>):
以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个[a,b,c,d,e,f]变换矩阵

-2D平移
translate(<length>[, <length>]):
指定对象的2D translation。参数对应X轴，Y轴。如果第二个参数未提供，则默认值为0
translateX(<length>)：指定对象X轴（水平方向）的平移
translateY(<length>)：指定对象Y轴（垂直方向）的平移

-2D旋转
rotate(<angle>):
指定对象的2D rotation，需先有transform-origin属性的定义

-2D缩放
scale(<number>[, <number>]):
指定对象的2D scale。参数对应X轴，Y轴。如果第二个参数未提供，则默认取第一个参数的值
scaleX(<number>)：指定对象X轴的（水平方向）缩放
scaleY(<number>)：指定对象Y轴的（垂直方向）缩放

-斜切扭曲
skew(<angle> [, <angle>])：
指定对象skew transformation。参数对应X轴，Y轴。如果第二个参数未提供，则默认值为0
skewX(<angle>)：指定对象X轴的（水平方向）扭曲
skewY(<angle>)：指定对象Y轴的（垂直方向）扭曲
```

```
transform-origin: [ <percentage> | <length> | left | center① | right ] [ <percentage> | <length> | top | center② | bottom ]?
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







--------


## 2. 进入、离开和列表的过渡


### 2.1 单元素/组件的过渡

Vue 提供了 transition 外层包裹容器组件(wrapper component)

可以给下列情形中的任何元素和组件添加进入/离开(enter/leave)过渡
条件渲染（使用 v-if）
条件展示（使用 v-show）
动态组件
组件根节点

这是一个常见行为的简单示例：

```
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
```

当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
自动嗅探目标元素是否使用了 CSS 过渡或动画，如果使用，会在合适的时机添加/移除 CSS 过渡 class。
如果过渡组件设置了 JavaScript 钩子函数，这些钩子函数将在合适的时机调用。
如果没有检测到 CSS 过渡/动画，并且也没有设置 JavaScript 钩子函数，
插入和/或删除 DOM 的操作会在下一帧中立即执行。（注意：这里的帧是指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同）


有 6 种 class 类名会在进入/离开(enter/leave)过渡中处理
v-enter：进入式过渡的开始状态。在插入元素之前添加，在插入元素之后一帧移除。
v-enter-active：进入式过渡的激活状态。应用于整个进入式过渡时期。在插入元素之前添加，过渡/动画完成之后移除。此 class 可用于定义进入式过渡的 duration, delay 和 easing 曲线。
v-enter-to：进入式过渡的结束状态。在插入元素之后一帧添加（同时，移除 v-enter），在过渡/动画完成之后移除。
v-leave：离开式过渡的开始状态。在触发离开式过渡时立即添加，在一帧之后移除。
v-leave-active：离开式过渡的激活状态。应用于整个离开式过渡时期。在触发离开式过渡时立即添加，在过渡/动画完成之后移除。此 class 可用于定义离开式过渡的 duration, delay 和 easing 曲线。
v-leave-to：离开式过渡的结束状态。在触发离开式过渡之后一帧添加（同时，移除 v-leave），在过渡/动画完成之后移除。


对于这些过渡中切换 class，每个都以过渡的 name 作为前缀。
当您使用没有 name 的 <transition> 元素时，会默认前缀为 v-。

举个例子，如果你使用 <transition name="my-transition">，那么默认的 v-enter class 将会被替换为 my-transition-enter。
v-enter-active 和 v-leave-active 可以指定不同的进入/离开过渡 easing 曲线，下面章节可以看到一个示例。


#### CSS过渡(CSS Transitions)

最常用到的过渡类型是使用 CSS 过渡。下面是一个简单示例：

```
<div id="example-1">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>
</div>
new Vue({
  el: '#example-1',
  data: {
    show: true
  }
})
/* 进入和离开动画可以分别 */
/* 设置不同的持续时间(duration)和动画函数(timing function) */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
```

#### CSS动画(CSS Animations)


CSS 动画用法和 CSS 过渡相同，区别是在动画中 v-enter 类名在元素插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。
这里是一个示例，为了简洁省略了 CSS 规则的前缀：

```
<div id="example-2">
  <button @click="show = !show">Toggle show</button>
  <transition name="bounce">
    <p v-if="show">Look at me!</p>
  </transition>
</div>
new Vue({
  el: '#example-2',
  data: {
    show: true
  }
})
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
```


#### 自定义过渡的 class 类名(Custom Transition Classes)

你也可以通过提供一下属性来指定自定义过渡类名
    enter-class
    enter-active-class
    enter-to-class
    leave-class
    leave-active-class
    leave-to-class
它们将覆盖默认约定的类名，这对于将 Vue 的过渡系统和其他现有的第三方 CSS 动画库（如 Animate.css）集成使用会非常有用。
这里是一个示例：
```
<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
<div id="example-3">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">hello</p>
  </transition>
</div>
new Vue({
  el: '#example-3',
  data: {
    show: true
  }
})
```

#### 同时使用过渡和动画(Using Transitions and Animations Together)

Vue 为了知道过渡何时完成，必须附加相应的事件监听器。
它可以是 transitionend 或 animationend，这取决于给元素应用的 CSS 规则。
如果你使用其中任何一种，Vue 能自动识别正确的类型并设置相应的事件监听器。
但是，在一些情况下，你可能需要给同一个元素同时设置过渡和动画，
比如由 Vue 触发 CSS 动画，同时在鼠标悬停时触发 CSS 过渡。
在这种情况下，你可能需要通过 type 属性，来显式声明需要 Vue 监听的类型，值可以是 animation 或 transition。

<transition :type="animation">...</transition>


#### 显式过渡持续时间(Explicit Transition Durations)

在大多数情况下，Vue 可以自动推断出过渡完成时间。
默认情况下，Vue 会过渡根元素的第一个 transitionend 或 animationend 事件触发所需的等待时间。
然而，这可能并不总是我们想要的 - 
例如，我们可能具有设计安排的过渡序列(transition sequence)：
其中一些嵌套的内部元素（在根元素过渡完成后）还具有延续的过渡效果，或比过渡根元素更长的过渡持续时间。
在这种情况下，您可以使用 <transition> 组件上的 duration 属性 ，来指定一个显式的过渡持续时间（以毫秒为单位）：
<transition :duration="1000">...</transition>
您还可以为进入式和离开式持续时间指定不同的值：
<transition :duration="{ enter: 500, leave: 800 }">...</transition

#### JavaScript 钩子函数

可以在属性中声明 JavaScript 钩子

```
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
// ...
methods: {
  // --------
  // 进入时
  // --------
  beforeEnter: function (el) {
    // ...
  },
  // 在与 CSS 结合使用时
  // 此回调函数 done 是可选项
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },
  // --------
  // 离开时
  // --------
  beforeLeave: function (el) {
    // ...
  },
  // 在与 CSS 结合使用时
  // 此回调函数 done 是可选项
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只能配合 v-show 使用
  leaveCancelled: function (el) {
    // ...
  }
}
```
这些钩子函数可以结合 CSS 过渡/动画使用，也可以单独使用。

当仅使用 JavaScript 式过渡的时候， 在 enter 和 leave 钩子函数中，必须有 done 回调函数。否则，这两个钩子函数会被同步调用，过渡会立即完成。

推荐对于仅使用 JavaScript 的过渡显式添加 v-bind:css="false"，以便 Vue 可以跳过 CSS 侦测。这也可以防止 CSS 规则意外干涉到过渡。

#### 在初始渲染时过渡

如果你还想在节点初始渲染时应用过渡，可以添加 appear 属性：
```
<transition appear>
  <!-- ... -->
</transition>
```

### 2.2 多个元素之间切换过渡
   
还是可以使用 v-if/v-else，来对初始元素之间进行切换过渡。最常见的是，一个列表容器和描述列表为空的消息，这两个元素间的切换过渡：
```
<transition>
  <table v-if="items.length > 0">
    <!-- ... -->
  </table>
  <p v-else>Sorry, no items found.</p>
</transition>
```
可以这样使用，但是有一点事项需要注意：
当在具有相同标签名称的元素之间切换时，需要通过给它们分配唯一的 key 属性，以使 Vue 感知它们是不同的元素。否则 Vue 的编译器将因为效率，只会替换元素内部的内容。即使在技术上没有必要，但是，给 <transition> 组件中的多个元素设置 key，被认为是一个最佳实践。

示例:
```
<transition>
  <button v-if="isEditing" key="save">
    Save
  </button>
  <button v-else key="edit">
    Edit
  </button>
</transition>
```
在上面这种场景中，也通过给同一元素的 key 属性，设置不同的状态来进行过渡。而无需使用 v-if 和 v-else，所以上面的示例可以重写为：
```
<transition>
  <button v-bind:key="isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </button>
</transition>
```
实际上，使用 v-if 的多个元素之间的过渡，还可以改为在单个元素上绑定动态属性的方式，来在任意数量的元素之间进行转换。例如：
```
<transition>
  <button v-if="docState === 'saved'" key="saved">
    Edit
  </button>
  <button v-if="docState === 'edited'" key="edited">
    Save
  </button>
  <button v-if="docState === 'editing'" key="editing">
    Cancel
  </button>
</transition>
```
可以重写为：
```
<transition>
  <button v-bind:key="docState">
    {{ buttonMessage }}
  </button>
</transition>
// ...
computed: {
  buttonMessage: function () {
    switch (this.docState) {
      case 'saved': return 'Edit'
      case 'edited': return 'Save'
      case 'editing': return 'Cancel'
    }
  }
}
```

#### 过渡模式

<transition> 的默认行为 - 进入和离开同时发生。可选的过渡模式：
in-out：新元素先过渡进入(transition in)，过渡完成之后，当前元素过渡离开(transition out)。
out-in：当前元素先过渡离开(transition out)，过渡完成之后，新元素过渡进入(transition in)。

```
<transition name="fade" mode="out-in">
<!-- ... the buttons ... -->
</transition>
```



### 2.3 多个组件之间过渡

使用动态组件:

```
<transition name="component-fade" mode="out-in">
  <component v-bind:is="view"></component>
</transition>

new Vue({
  el: '#transition-components-demo',
  data: {
    view: 'v-a'
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
})
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
```


### 2.4 列表过渡

整个列表的每一项（例如使用 v-for）都需要同时进行渲染呢？
在这种情况下，我们将使用 <transition-group> 组件。在我们深入示例之前，先来了解关于这个组件的一些要点：
不同于 <transition>，它会以一个真实元素渲染：默认为 <span>。你也可以通过 tag 属性更换为其他渲染元素
它内部的元素必须具有唯一的 key 属性

#### 进入式/离开式列表过渡
  
现在让我们来深入一个简单的示例，进入式过渡和离开式过渡都使用与之前相同的 CSS 类名：

```
  <div id="list-demo">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
  new Vue({
    el: '#list-demo',
    data: {
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
    }
  })
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active 在低于 2.1.8 版本中 */ {
    opacity: 0;
    transform: translateY(30px);
  }
```

这个示例有个问题，当添加和移除项目时，其周围的项目会瞬间猛地移动到新的位置，而不是平滑过渡，我们稍后会解决这个问题。



### 2.5 可复用的过渡

通过 Vue 的组件系统可以实现复用过渡。要创建一个可复用过渡，你需要做的就是将 <transition> 或者 <transition-group> 作为组件根节点，然后将全部子内容放置在 transition 组件中就可以了。
这里是使用 template 的组件的简单示例：

```
Vue.component('my-special-transition', {
  template: '\
    <transition\
      name="very-special-transition"\
      mode="out-in"\
      v-on:before-enter="beforeEnter"\
      v-on:after-enter="afterEnter"\
    >\
      <slot></slot>\
    </transition>\
  ',
  methods: {
    beforeEnter: function (el) {
      // ...
    },
    afterEnter: function (el) {
      // ...
    }
  }
})
```

函数组件更适合完成这个任务：

```
Vue.component('my-special-transition', {
  functional: true,
  render: function (createElement, context) {
    var data = {
      props: {
        name: 'very-special-transition',
        mode: 'out-in'
      },
      on: {
        beforeEnter: function (el) {
          // ...
        },
        afterEnter: function (el) {
          // ...
        }
      }
    }
    return createElement('transition', data, context.children)
  }
})
```


### 2.6 动态过渡

```
<transition v-bind:name="transitionName">
  <!-- ... -->
</transition>
```

当你使用多个 Vue 过渡类名约定，来定义 CSS 过渡/动画，并在不同的类名约定之间切换时，动态过渡会非常有用。
所有的过渡属性都可以动态绑定。并且不仅是属性，由于事件钩子函数都是 Vue 的方法(methods)，所以可以从 this 上下文访问到所有数据。
这意味着，根据组件的状态，JavaScript 式过渡的表现可能会有所不同。

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<div id="dynamic-fade-demo" class="demo">
 Fade In: <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
 Fade Out: <input type="range" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration">
 <transition
   v-bind:css="false"
   v-on:before-enter="beforeEnter"
   v-on:enter="enter"
   v-on:leave="leave"
 >
   <p v-if="show">hello</p>
 </transition>
 <button
   v-if="stop"
   v-on:click="stop = false; show = false"
 >Start animating</button>
 <button
   v-else
   v-on:click="stop = true"
 >Stop it!</button>
</div>
new Vue({
 el: '#dynamic-fade-demo',
 data: {
   show: true,
   fadeInDuration: 1000,
   fadeOutDuration: 1000,
   maxFadeDuration: 1500,
   stop: true
 },
 mounted: function () {
   this.show = false
 },
 methods: {
   beforeEnter: function (el) {
     el.style.opacity = 0
   },
   enter: function (el, done) {
     var vm = this
     Velocity(el,
       { opacity: 1 },
       {
         duration: this.fadeInDuration,
         complete: function () {
           done()
           if (!vm.stop) vm.show = false
         }
       }
     )
   },
   leave: function (el, done) {
     var vm = this
     Velocity(el,
       { opacity: 0 },
       {
         duration: this.fadeOutDuration,
         complete: function () {
           done()
           vm.show = true
         }
       }
     )
   }
 }
})
```

最后，创建动态过渡的最终方案是，组件通过接受 prop 来动态修改之前的过渡
