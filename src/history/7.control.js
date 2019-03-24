// 表单 提交表单
// 可以获取DOM元素 .value  非受控（没有和状态有关）组件
// 和状态相关的 受控组件 双向数据绑定

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

// 人的组件，需要校验属性 （校验实例上的属性）
// 只是属性校验，不会阻止页面渲染
class Control extends Component{
    state = {
        username: 'zfpx',
        password: '123456'
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }
    render() {
        return (<div>
            {/* form  会自带表单检验 */}
            <form onSubmit={this.handleSubmit}>
                <input required type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                <input required type="text" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button type="submit">提交</button>
            </form>
        </div>)
    }
}

let obj = (<Control ></Control>)
export default obj