// first 引入react库， 引入库后才能创建组件
import React from "react";

// 在app中引用Home， 组件之间可以相互引用
import Home from './Home';

// 创建组件 1，用类的形式  2，用Hook形式
// 用类的形式 
class App extends React.Component {
    // 渲染函数
    render () {
        return (
        <div>
            <h1> hello, react component!</h1>
            // 引用Home组件
            <Home/>
        </div>
        )

    }
}

// 外部引用需要导出
export default App