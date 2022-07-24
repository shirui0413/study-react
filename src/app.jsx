// first 引入react库， 引入库后才能创建组件
import React from "react";

// 创建组件 1，用类的形式  2，用Hook形式
// 用类的形式 
class App extends React.Component {
    // 渲染函数
    render () {
        return <h1> hello, react component!</h1>
    }
}

// 外部引用需要导出
export default App