# ReactDOM

## findDOMNode
DOM真正被添加到HTML生命周期中是`componentDidMount`和`componentDidUpdate`方法。在这两个方法中，我们可以获取真正的DOM元素。

React提供的获取DOM元素的方法有两种，其中一种就是`findDOMNode`。返回该React组件实例对应的DOM节点。用于获取表单value以及用于DOM的测量。

## render
`render`方法把元素挂载到`container`中，并且返回element的实例（即refs引用）。如果是无状态组件，`render`会返回`null`。组件装载完毕时，`callback`就会被调用。

## refs
`refs`可以附加到任何一个组件上，组件被调用时会新建一个该组件的实例，而`refs`就会指向这个实例。

它可以是一个回调函数，这个回调函数会在组件被挂载后立即执行。例如：

```
import React,{Component} from `react`

class App extends Component{
    constructor(props){
        super(props){
            super(props)

            this.handleClick = this.handleClick.bind(this)
        }
    }
    handleClick(){
        if(this.myTextInput !== null){
            this.myTextInput.focus()
        }
    }

    render(){
        return(
            <div>
                <input type="text" ref={(ref)=>this.myTextInput = ref}>
                <input
                    type = "button"
                    value = "Focus the text input"
                    onClick = {this.handleClick}
                >
            </div>
        )
    }
}
```

这个例子把`refs`放到原声的DOM组件`input`中，就可以通过`refs`得到DOM节点；而如果把`refs`放到React组件中，就可以获得组件实例并调用组件的方法。

`refs`同样支持字符串。对于DOM操作，不仅可以使用`findDOMNode`获得该组件DOM，还可以使用`refs`获得组件内部的DOM。例如：
```
import React,{Component} from `react`
import ReactDOM from `react-dom`

class App extends Component{
    componentDigMOunt(){
        // myComp是Comp的一个实例，因此需要用`findDomNode`转换为相应的DOM
        const myComp = this.refs.myComp
        const dom = findDOMNode(myComp)
    }
    render(){
        return (
            <div>
                <Comp ref = "myComp">
            </div>
        )
    }
}
```

不推荐用`ReactDOM.findDOMNode`来找DOM节点，会破坏封装性。

## React之外的DOM操作