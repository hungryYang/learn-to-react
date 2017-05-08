import React,{Component,PropTypes} from 'react'
import '../css/style.scss'
class Tabs extends Component {
    constructor(props){
        super(props)
        
        const currProps = this.props
        let activeIndex = 0

        if('activeIndex' in currProps){
            //外部更新组件
            activeIndex = currProps
        }else if('defaultActiveIndex' in currProps){
            //内部更新组件
            activeIndex = currProps.defaultActiveIndex
        }

        this.state = {
            activeIndex,
            prevIndex:activeIndex,
        }
    }
    render(){
        return <div className ="ui-tabs"></div>
    }
}

export default Tabs