import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// 想改count的值
// 属性传入到组价中不能更改
// 如果有需要改，则把属性变成组件的状态

// 组件的数据来源 状态（自己的）  属性 （外面给的） 组件不能更改属性
class Clock extends Component{
    state = {
        count: this.props.count
    }
    handleClick = () => {
        // this.props.count ++; // 这个会报错的
        // 这个每点一次加3
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 2
        })
        this.setState({
            count: this.state.count + 3
        })
        // 这个每点一次加6

        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        //     this.setState({
        //         count: this.state.count + 2
        //     })
        //     this.setState({
        //         count: this.state.count + 3
        //     })
        // })
        // setState原理： 批量更新操作 下面的每次加6

        // this.setState((prevState) => ({
        //     count: prevState.count + 1
        // }))
        // this.setState((prevState) => ({
        //     count: prevState.count + 2
        // }))
        // this.setState((prevState) => ({
        //     count: prevState.count + 3
        // }))

        this.setState(({count: this.state.count +1}, () => {
            this.setState(({count: this.state.count +2}, () => {
                this.setState(({count: this.state.count +3}, () => {

                }))
            }))
        }))
        console.log(this.state.count)
    }
    render() {
        return (<>
        <button onClick={this.handleClick}>点我添加</button>
        </>
        )
    }
}
let obj = (<Clock count="1"></Clock>)
export default obj