import React from 'react';
import ReactDOM from 'react-dom';

// 组件的引用
import App from './app';


// App是div一样的组件， 所以要放在<>中， 下面的例子是单标签的写法
ReactDOM.render( <App/>, document.getElementById('root'));

// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     DD
//   </React.StrictMode>
// );


// function tick() {
//   // （） -> 如果存在标签结构，并且标签结构要换行，需要用（）括起来
//   const element = (
//     <div>
//       <h1>Hello, react ！</h1>
//       <h2>the time is { new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   // 没加（）也没有报错，版本问题？
//   const element2 = 
//   <div>
//     <h1> ???</h1>
//     <h2>!!!</h2>
//   </div>

//   // react 渲染
//   ReactDOM.render( element2, document.getElementById('root'));
// }

// // 方法调用
// setInterval(tick, 1000);

