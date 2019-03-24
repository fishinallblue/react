
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'
import axios from 'axios'
import {Provider} from './Context'
axios.interceptors.response.use(function(res) {
    return res.data
})
// fetch 原生提供的 基于promise 太底层
// axios 基于promise拦截器
class MessageBox extends Component{
    state = {
        lists: [],
        total: 0
    }
    handClick = (val) => {
        this.setState({
            total: this.state.total + val
        })
    }
    resetClick = () => {
        this.setState({
            total: 0
        })
    }
    async componentDidMount() {
        let lists = await axios.get('/list.json');

        this.setState({
            lists: lists.data
        })
        console.log('list', this.state.list)
    }
    render() {
        return (
            // 提供的值必须叫value属性
            <Provider value={{r: this.resetClick}}>
        <div className="container">
            <div className="panel panel-danger">
            <div className="panel-heading"></div>
            <div className="panel-body">
                <MessageRight lists = {this.state.lists} fn={this.handClick}></MessageRight>
            </div>
            <div className="panel-footer">
                <MessageLeft total = {this.state.total}></MessageLeft>
            </div>
            </div>
        </div></Provider>)
    }
}

let obj = (<MessageBox ></MessageBox>)
export default obj