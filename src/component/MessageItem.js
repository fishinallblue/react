
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Consumer }from './Context'

// fetch 原生提供的 基于promise 太底层
// axios 基于promise拦截器
class MessageItem extends Component{
    handleClick =() => {
        this.props.fn(3);
    }
    render() {
        return (
            <Consumer>
                {({r}) => {
                    return (
                        <li className="list-group-item">
                        <h4>{this.props.title}</h4>
                        <button className="btn btn-primary" onClick={this.handleClick}>点赞</button>
                        <button className="btn btn-default" onClick={()=> {
                            r();
                        }}>取消</button>
                        </li>)
                    }
                }
            </Consumer>
        )
    }
}
// 父传子考的是属性
// 平级靠的是共同的父组件
// 跨级靠的是API
export default MessageItem