// first 引入react库， 引入库后才能创建组件
import React from "react";

// 在app中引用Home， 组件之间可以相互引用
import Home from './Home';
import StateComponet from "./StateComponent";


// 在app中引用MyNav
import MyNav from "./MyNav";
// *** 组件复用的例
// *** 在引用组件的地方定义props
const nav1 = ['首页', '音乐', '视频'];
const nav2 = ['动画', '小说', '综艺'];


// 创建组件 1，用类的形式  2，用Hook形式
// 用类的形式 
class App extends React.Component {
    // 渲染函数
    render () {
        return (
        <div>
            {/*
            <h1> hello, react component!</h1>
            // 引用Home组件
            <Home/>
            // 引用MyNav组件，在引用组件处给组件填加属性
            // 追加了nav 和title两个props
            <MyNav nav = {nav1} title = "大人导航"/>
            <MyNav nav = {nav2} title = "小孩导航"/>
            */}
            <StateComponet/>
        </div>
        )

    }
}

// 外部引用需要导出
export default App