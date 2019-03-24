// jsx 是可以包含js的写法，与HTML的写法还是有一些区别的
// 1.如果渲染两个相邻的jsx元素，需要被外面的一个标签所包裹   =>   标签长这样  <></> 
// 2.行内样式的写法，jsx为了识别是HTML还是js，需要用< { 进行区分
// 3. {}表示的是写js， 三元表达式，取值，（只要内容有返回值就可以显示）
// 4.属性的名字有变化 class=> className  for => htmlFor
// 5.v-html 把内容当成HTML插入到内容中
// 写注释的时候，要写js注释

import React from 'react';

let fn = function() {
    return <span> 你好</span>
}
let src="<img src='https://wx2.sinaimg.cn/mw690/0069OH5egy1g1dnytnkx4j33402c0b2j.jpg'>"
// 第一波例子
let ele = (<>
    <h1 style={{background: 'red'}}>
        标题
    </h1>
    <p>内容{fn} {1 === 1 ? '何隽' : '李玉'}</p>
    <div className="box">盒子</div>
    {/*当前是一个危险的操作 这是js的注释*/}
    <div dangerouslySetInnerHTML={{__html: src}}></div>
</>)

// 第二波例子
// 列表的渲染 一般使用map ，map有返回值 
// 循环谁，就在谁身上取key的值
let arr = ['吃饭', '喝水', '睡觉']
let newArr = arr.map((item,key) => <li key={key}>{item}</li>)
let obj = (<ul>{newArr}</ul>)

// newArr 可以作为数组直接传入rander函数中

// jsx 元素可以进行嵌套
// 封装功能 函数 组件

export default obj