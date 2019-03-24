// redux 把数据集中存放
// state 是当前所有组件的状态

// 1.redux中不能直接操作状态
// 2.如果任意一个组件想更新状态，需要派发一个动作
// 3.每次更新状态，最好用一个新的状态对象覆盖掉 （时间旅行）
function creatStore(reducer) { 
    let state;
    let listeners = [];
    let getState = () => JSON.parse(JSON.stringify(state));
    let dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(fn => fn())
    }
    let subscribe = (fn) => {
        listeners.push(fn);

        return () => {
            listeners = listeners.filter((item) => item !== fn)
        }
    }
    dispatch({type: '@INIT'})
    return {
        getState,
        dispatch,
        subscribe
    }
 }
 let initState  = {
    title: {content: '你好', color: 'red'},
    content: {content: 'hh', color: 'blue'}
}
 let store = creatStore(reducer);
 store.subscribe(renderApp);
 let unsub = store.subscribe(() => console.log('更新了'));

 function reducer(state = initState, action) {
     //reducer 的参数有两个，第一个是用户派发的状态，第二个是当前组件的状态
    switch(action.type) {
        case 'tyep1':
        return {...state, title:{...state.title, color: action.color}}
        case 'content':
        return {...state, content:{...state.content, content: action.content}}
    }
    return state;
 }
 setTimeout(() => {
    unsub()
     store.dispatch({type: 'tyep1', color: 'yellow'})
     store.dispatch({type: 'content', content: 'yellow'})
    //  renderApp()
 },2000)
 setTimeout(() => {
     store.dispatch({type: 'tyep1', color: 'pink'})
     store.dispatch({type: 'content', content: 'pink'})
    //  renderApp()
 },1000)
function renderTitle() {
    let title = document.getElementById('title');
    title.innerHTML = store.getState().title.content;
    title.style.background = store.getState().title.color;
}
function renderContent() {
    let content = document.getElementById('content');
    content.innerHTML = store.getState().content.content;
    content.style.background = store.getState().content.color;
}
function renderApp() {
    renderTitle();
    renderContent();
}
renderApp()