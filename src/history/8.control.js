// 表单 提交表单
// 可以获取DOM元素 .value  非受控（没有和状态有关）组件
// 和状态相关的 受控组件 双向数据绑定

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

// 如果使用非受控组件 可以跟第三方库合作
class Control extends Component{
    password = React.createRef();
    state = {
        username: 'zfpx',
        password: '123456'
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.username.value);
        console.log(this.password.current.value)
    }
    render() {
        return (<div>
            {/* form  会自带表单检验 */}
            <form onSubmit={this.handleSubmit}>
                <input required type="text" name="username" ref={(dom) => this.username = dom}></input>
                <input required type="text" name="password" ref={this.password}></input>
                <button type="submit">提交</button>
            </form>
        </div>)
    }
}

let obj = (<Control ></Control>)
export default obj