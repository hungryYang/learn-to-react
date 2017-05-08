import React,{Component} from 'react'

class TabContent extends Component {
    constructor(props){
        super(props)
    }

    //渲染子组件合集
    getTabPanes(){
        const {classPrefix,activeIndex,panels,isActive} = this.props

        return React.Children.map(panels,(child)=>{
            if(!child){return}

            const order = parseInt(child.props.order,10)
            const isActive = activeIndex === order

            return React.cloneElement(child,{
                classPrefix,
                isActive,
                children:child.props.children,
                key:`tabpane-${order}`
            })
        })
    }

    render(){
        return (<div>{this.getTabPanes()}</div>)
    }
}