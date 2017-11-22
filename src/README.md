
# 自定义控件相关使用


* props 传递数据


使用:prop传递数据格式为 数字、布尔值或函数时，必须带:(兼容String除外，具体看组件文档)


prop默认规则

调用地方如  class-name='cls'
组件实现为  className


* slot 内容分发

```
```


* 事件传递

events $emit @click 事件

```

```

* v-model 传递数据

相当于

```
<input v-model="sth" />
<input v-bind:value="sth" v-on:input="sth = $event.target.value" />
```

# TODO

1. Range的range-color无效
2. Input的item-floating-label无效
