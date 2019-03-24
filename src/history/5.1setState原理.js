// 默认是批量更新的

let transcation = (component) => {
    component.state = this.pendingState;
    component.render();
}

class My {
    constructor(){
        this.state = {number : 0} // 自己的状态
        this.pendingState = {...this.state}
    }
    setState(obj) {
        this.pendingState = {...this.pendingState, ...obj}
    }
    update() {
        this.setState({number: this.number +1});
        this.setState({number: this.number +3});
        this.setState({number: this.number +2});
        transcation(this);
    }
    render() {
        console.log(this.state.number)
    }
}
let my = new My();

my.update();