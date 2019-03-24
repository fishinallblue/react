import React, {Component} from 'react';
import {createStore} from 'redux';
import store from '../../store'
import actions from '../../store/action'
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
        store.dispatch(actions.add)
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