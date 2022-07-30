import React from "react";

export default class MyNav extends React.Component {
    render () {
        console.log(this.props.nav);
        return (
            <div>
                <h1> {this.props.title} </h1>
                <ul>
                    // 在引用的组件中为这里的props设置不同和值
                    {/** 在jsx中加注释的方法，外层追加大括号 */}
                    {
                        // map遍历， 第一个参数是当今元素，第二个参数是元素下标
                        this.props.nav.map((element, index) => {
                            // 不加key也可以表示，但是console会出现警告 【Warning: Each child in a list should have a unique "key" prop】
                            return <li key={index}> {element} </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}