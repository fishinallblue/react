
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// fetch 原生提供的 基于promise 太底层
// axios 基于promise拦截器
class MessageLeft extends Component{
    render() {
        return (<div>{this.props.total}</div>)
    }
}

export default MessageLeft