import React from "react";

export default class StateComponet extends React.Component {
    /**
     *  组件中的状态 state
     *  以前我们操作页面的元素的变化，是通过修改DOM，操作DOM
     *  在React框架，不推荐操作DOM，通过修改state来操作页面元素的变化
     */

    // 定义state
    constructor(props){
        // 因为在这里重新定义的constructor，所以为了不影响props的功能，需要把props传给父class
        super(props);

        // 定义state
        this.state = {
            count : 10,
            // 可以定义复数个，用 ， 隔开
        }
    }
    
    increment () {
        // React规定修改state时用setState
        this.setState({
            // 和定义时的赋值写法一样
            count : this.state.count += 1,
        })
    }
    
    discrement () {
        // React规定修改state时用setState
        this.setState({
            // 和定义时的赋值写法一样
            count : this.state.count -= 1,
        })
    }

    render(){
        return (
            <div>
                <h3>组件的state</h3>
                

                <div>
                {
                    /** state的使用 */
                    this.state.count
                }
                </div>
                <p></p>
                {/* 为按钮定义点击property*/}
                <button onClick={this.increment.bind(this)}>增加</button>
                <button onClick={this.discrement.bind(this)}>减少</button>
            </div>
        )
    }
}