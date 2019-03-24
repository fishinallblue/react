// 组件的特点和好处

// react中，函数就是一个组件 （组件名必须大写）是为了和jsx元素进行区分
// react看到大写的的，就知道这个是组件, 小写的就是jsx元素

// 组件的特点： 方便复用，方便维护和管理
// 组件的分类： 1，函数型组件   2.类组件
// 函数组件： 没有this指向  没有生命周期  没有状态
// 所有的组件都有属性 props

import React from 'react';

function Clock(props) {
    console.log(this); //undefined
    return <h1>当前时间 {props.date.toLocaleString()}</h1>
}
let obj = (<div><Clock date={new Date()}></Clock></div>)

export default obj