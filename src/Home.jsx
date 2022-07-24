import React from 'react';

export default class Home extends React.Component {
    render () {
        //（） -> 如果存在标签结构，并且标签结构要换行，需要用（）括起来
        // 此处不括起来，便不能正常显示
        return (
            <div>
                <h1>这是一个react组件</h1>
                <h2>把创建组件class...和导出组件export...写在一起了</h2>
            </div>
        )
    }
}