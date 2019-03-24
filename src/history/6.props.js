import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

// 人的组件，需要校验属性 （校验实例上的属性）
// 只是属性校验，不会阻止页面渲染
class Person extends Component{
    // 默认属性，必须名字叫defaultProps 属于类上的属性
    static defaultProps = {
        name: 'zfpx'
    }
    static propTypes = { // 专门用于校验类型的
        age: PropTypes.number.isRequired,
        hobby: PropTypes.oneOf(['写代码', '看文档']),
        positon: PropTypes.shape({
            x: PropTypes.number
        })
    }
    render() {
        return <div>
            {this.props.name}
        </div>
    }
}

let prop = {
    age: 9,
    positon: {
        x: 100,
        y: 100
    },
    gender: ['女'],
    hobby: '写代码'
}
let obj = (<Person {...prop}></Person>)
export default obj