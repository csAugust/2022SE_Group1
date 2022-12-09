import ReactDOM from "react-dom";
import React from "react";
// 创建容器
const el = document.createElement("div");
document.body.append(el);
el.style.position = "fixed";
el.style.top = "10px";
el.style.zIndex = "999";

// React 18 写法
const root = ReactDOM.createRoot(el);

// ... 定义组件

// 渲染组件，之后还需要传入些参数，这里暂时不写了
root.render(<Component />);