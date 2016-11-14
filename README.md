# Toy HTML Compiler
一个玩具级的 HTML 转虚拟 DOM 编译器


## 特性
* 解析 HTML 字符串到 JS 虚拟 DOM 对象
* 50 行内的 Parser

### 支持
* 类似 `<div>123</div> <a>456</a>` 的任意多个标签并列
* 类似 `<h2><small>123</small></h2>` 的任意层嵌套标签

### 不支持
* 类似 `<input/>` 的自闭合标签
* 类似 `<h2>123<small>456</small></h2>` 的混合嵌套


## License
MIT
