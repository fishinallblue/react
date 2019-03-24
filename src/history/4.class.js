// 类组件
// 实现一个类，父类提供了一个更改自己状态的方法
// 生命周期 钩子函数 回调函数

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// React.Component 是父类， 提供了例如 setState等方法
class Clock extends Component{
    // constructor(props) {
    //     console.log(props)
    //     this.state = { // this.state这个名字是死的

    //     }
    //     super();
    // }
    // 上面这一堆代码的效果和下面这一行代码的功能是一样的
    state = {
        date: new Date().toLocaleString()
    }
    componentDidMount() {
        // 当前组件已经挂在完成了
        // 这里可以获取DOM元素等一系列的东西,
        setInterval(() => {
            this.setState({
                date: new Date().toLocaleString()
            }); // 调用setState就会更新视图
        }, 1000)
    }
    // handleClick() {
    //     console.log(this); // undefined
    //     alert(1)
    // }
    // 上面方法的升级版
    // 常见的绑定 this的方法, 1.bind 2.箭头函数 3.es7的绑定方式
    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    handleClick = () => {
        console.log(this);
        ReactDOM.unmountComponentAtNode(window.root) // 报错 this.timer定时器没有清空导致会出现内存泄漏的问题 需要调用 componentWillUnmount
    }
    render() {
        return (<><h1>时间是: {this.state.date}
        </h1>
        <button onClick={this.handleClick}> 点击删除 </button></>
        )
    }
}
let obj = (<Clock a="1"></Clock>)
export default obj