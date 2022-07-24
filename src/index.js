import React from 'react';
import ReactDOM from 'react-dom';

// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     DD
//   </React.StrictMode>
// );

// render(参数1 ， 参数2)
// 参数2：document.getElementById('root') -> 获取要插入的容器 -> index.html内的id
// 参数1：jsx语法 <h1>study</h1>    js + xml(html)
//       遇到<>按照html解析，遇到{} 按照js语法解析
const react = "study react";
ReactDOM.render( <h1>{react}</h1>, document.getElementById('root'));