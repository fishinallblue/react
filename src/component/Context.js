// react中的跨组件传递
import React, {Component} from 'react';
// 创建消费者和提供者
let {Provider, Consumer} = React.createContext();

export {Provider, Consumer}