我们可以把React生命周期分为两类：

* 当组件在挂载或卸载时
* 当组件接受新的数据时，即组件更新时

# 挂载或卸载过程

## 组件的挂载

组件挂载是最基本的过程，这个过程主要做组件状态的初始化。

推荐以下面的例子为模板写初始化组件：

```
improt React,{Component,PropTypes} from 'react'

class App extends Component{
    static propTypes = {
        
    }
    static defaultProps = {

    }

    constructor(props){
        super(props)
        this.state = {}
    }

    componentWillMount(){}
    componentDidMount(){}
    render(){
        return <div>demo</div>    
    }
```

`propTypes defaultProps`可以在类外访问。

其中`componentWillMount`在`render`方法之前执行，`componentDidMount`在`render`之后执行，分别代表渲染的前后时刻。

如果我们在`componentWillMount`中执行`setState`方法，组件会更新`state`，但组件只渲染一次。因此这是一个无意义的执行，初始化时的`state`都可以放在`this.state`里。

如果在`componentDidMount`中执行`setState`方法，组件会再次更新，不过在初始化过程就渲染两次组件并不好。

## 组件的卸载

组件的卸载只有`componentWillUnmount`这一个卸载前状态。

在`componentWillUnmount`方法中，经常会执行一些清理方法，如时间回收或是清楚定时器。

# 数据更新过程
更新过程指的是父组件向下传递`props`或组件自身执行`setState`方法时发生的一系列更新动作。

```
import React,{Component,PropTypes} from 'react'

class App extends Component{
    componentWillReceiveProps(nextProps){
        //this.setState({})
    }
    shouldComponentUpdate(nextProps,nextState){
        //return true
    }
    componentWillUpdate(nextProps,nextState){

    }
    componentDidUpdate(prevProps,prevState){

    }
    render(){
        return <div>demo</div>
    }
}
```

如果组件自身更新了，那么会一次执行`shouldComponentUpdate componentWillUpdate render componentDidUpdate`。

`shouldComponentUpdate`是一个特别的方法，它接收需要更新的`props`和`state`，让开发者增加必要的判断条件，让其按需更新。因此返回`false`时将不向下执行生命周期方法。

**不能在`componentWillUpdate`中执行`setState`**。

如果组件是由父组件更新`props`而更新的，那么在`shouldComponentUpdate`之前执行`componentWillReceiveProps`方法。此方法可作为React在传入`props`后，渲染之前`setState`的机会。此方法中调用`setState`方法不会二次渲染。   
