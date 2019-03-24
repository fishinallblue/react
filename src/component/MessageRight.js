
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './MessageItem'

// fetch 原生提供的 基于promise 太底层
// axios 基于promise拦截器
class MessageRight extends Component{
    render() {
        return (<ul className="list-group" >
        {/* {JSON.stringify(this.props.lists)} */}
                {this.props.lists.map((item, index) => (
                    <MessageItem title={item.title} key={index} fn={this.props.fn}></MessageItem>
                ))}
        </ul>)
    }
}

export default MessageRight