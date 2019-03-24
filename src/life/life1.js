// 生命周期
// 记住常见的生命周期， 知道每个生命周期 可以做那些事
// 新的生命周期

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// 来看看，父组件 render的时候，会不会调用子组件的render
// 儿子组件虽然没有改变，但是父亲render的时候，儿子也会被render
class ChildCounter extends Component{
    render() {
        console.log('child render');
        return <div >儿子{this.props.a}</div>
    }
    componentDidMount() {
        console.log('child componentDidMount')
    }
    componentWillReceiveProps(newProps) { // 子组件接收到了新的props(第一次接受的时候不触发)
        // 接受到新的属性后，，一般的人可能会把接收到的属性放到状态上
        // 虽然可以调用setState了，但是建议不要用
        console.log('componentWillReceiveProps', newProps)
    }
    shouldComponentUpdate() {

    }
}
// 哪个周期可以调用setState 
// componentWillMount, componentDidMount, componentWillReceiveProps  只有这三个可以，其他的都不行
class Counter extends Component{
    static defaultProps = {
        name: 'zfpx'
    }
    state = {
        count: 1
    }
    constructor(props) {
        super();
        console.log(props)
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    shouldComponentUpdate (nextProps, nextState) {
        // 如果传入的props 改变  或者state改变 都会触发这个方法
        // return 是false 不会渲染视图，但是，state还是变了
        // 可以做优化 (immntable)
        return nextState.count %2 !== 0
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')

    }
    render() {
        console.log('render')
        return (<div>
            <ChildCounter a = {this.state.count}></ChildCounter>
            <button onClick={() => {
                // 无论数据是否变化(比如设置count = count)，都会重新调用render方法
                this.setState({count : this.state.count + 1})
            }}>添加</button>
        </div>)
    }
    componentDidMount() {
        //将ajax放到这里头，也可以在此处获取DOM元素
        console.log('componentDidMount')
    }
}

let obj = (<Counter age={9}></Counter>)
export default obj