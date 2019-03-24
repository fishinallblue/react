import React, { Component } from 'react';
import jsx2 from'./history/2.jsx'
import component1 from'./history/3.component'
import component2 from'./history/4.class'
import component3 from'./history/5.setState'
import props1 from'./history/6.props'
import control1 from'./history/7.control'
import control2 from'./history/8.control'
import MessageBox from'./component/MessageBox'
import life1 from'./life/life1'
// redux相关
import redux2 from'./redux/2.redux'
import counter from'./component/reduxDemo/Counter'

import './App.css';

class App extends Component {
  render() {
    return counter
  }
}

export default App;
