在React中，数据是自定向下流动的，即从父组件到子组件。

`state`与`props`是React中最重要的概念。如果顶层组件初始化`props`，那么React会向下遍历整个组件树，重新尝试渲染所有相关子组件。而`state`只关心每个组件自己内部状态。

# state
当组件内部使用库内置的`setState`方法时，最大的表现行为就是该组件会尝试重新渲染。值得注意的是`setState`是一个异步方法，一个生命周期内所有的`setState`方法会合并操作。

# props 
`props`是React用来让组件之间互相联系的一种机制。

React的单向数据流，主要的流动管道就是`props`。`props`本身是**不可变的**。组件的`props`一定来自于默认属性或通过父组件传递而来。如果说要渲染一个对`props`加工后的值，最简单的方法就是使用局部变量或者直接在JSX中计算结果。

假设组件的数据都是通过`data prop`传入的，那么，组件的`props`一般一定会有以下几项：

* `className`：根节点的`class`。为了方便覆盖其原始样式，我们都会在根节点定义`class`。

* `classPrefix`：`class`前缀。对于组件来说，定义一个统一的`class`前缀，对样式交互与交互分离起了非常重要的作用。

* `onChange`：回调函数。

##　子组件prop
在React组件中有一个重要且内置的`prop----children`，它代表组件的子组件集合。`children`可以根据传入子组件的数量决定是否是数组类型。

##　组件props

## 用function prop与父组件通信

## propTypes
`propTypes`用于规范`props`的类型与必须的状态。如果组件定义了`propTypes`，那么在开发环境下，就会对组件的`props`值的类型做检查，如果传入的`props`不能与之匹配，React将会报waring。生产环境下不检查。

[参考](http://www.myexception.cn/web/2016594.html)