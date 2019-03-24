import React, {Component} from 'react';
import {createStore} from 'redux';
// redux的原则是一个项目只有一个store，只有一个状态 只有一个reducer（管理员）
function reducer (state = {number: 0}, action) {
    switch(action.type) {
        case 'ADD':
            return {number: state.number + action.count}
    }
    return state;
}
let store = createStore(reducer);

class Counter extends Component{
    state ={
        number: store.getState().number
    }
    componentWillMount() {
        // 为什么放到这里才能刷新内容呢
        this.unsub = store.subscribe(() => {
            this.setState({
                number: store.getState().number
            })
        })
    }
    componentWillUnmount() {
        this.unsub();
    }
    handleClick= () => {
        store.dispatch({type: 'ADD', count:3})
    }
    render() {
        return <div>
            {store.getState().number}
            <button onClick= {this.handleClick}>+点击增加</button>
        </div>
    }
}
let obj = (<Counter age={9}></Counter>)
export default obj