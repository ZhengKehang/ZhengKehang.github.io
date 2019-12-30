# Vue的生命周期
## beforeCreate
在vue实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
### 实例化之前做了什么？

### 那么实例化是做了什么呢？

### beforeCreate里的代码没有执行完，created里的代码会执行吗？

## created
在实例创建完成后被立即调用	。在这一步，实例已完成以下的配置：
数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

### 什么是挂载？
### 什么是虚拟DOM，有什么作用？

## beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用。钩子在服务器端渲染期间不被调用。
### 什么是render函数？
### mounted
```
el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
```
### 是否渲染完成？
注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
```js
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
```
### 挂载和渲染有什么区别？
## beforeUpdate
## updated
## activated
## deactivated
## beforeDestroy
## destroyed
## errorCaptured

## 在项目中如何使用生命周期函数？

## keep-live该如何使用？