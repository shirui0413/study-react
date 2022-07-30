import React from "react";

export default class MyNav extends React.Component {
    render () {
        console.log(this.props.nav);
        return (
            <div>
                <ul>
                    // 在引用的组件中为这里的props设置不同和值
                    <li>{this.props.nav[0]}</li>
                    <li>{this.props.nav[1]}</li>
                    <li>{this.props.nav[2]}</li>
                </ul>
            </div>
        )
    }
}