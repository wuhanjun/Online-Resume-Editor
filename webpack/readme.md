## 如何运行本 demo
1. clone我的demo到你的本地文件里，然后~【我默认你已经安装过 Node.js 和 NPM，没有的话可以去官网下载】
2. npm i -g webpack
3. npm i babel-loader babel-core babel-preset-es2015 babel-preset-react
4. webpack
5. 打开 page.html

[基础](https://github.com/jirengu-inc/jrg-project-5/issues/1)
[进阶](http://www.jianshu.com/p/42e11515c10f)
## Babel
- 【一点基础知识】
Babel其实是一个编译JavaScript的平台，它的强大之处表现在可以通过编译帮你达到以下目的：
1. 下一代的JavaScript标准（ES6，ES7），这些标准目前并未被当前的浏览器完全的支持；
2. 使用基于JavaScript进行了拓展的语言，比如React的JSX

## Babel的安装与配置

Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，不过webpack把它们整合在一起使用，但是对于每一个你需要的功能或拓展，
你都需要安装单独的包（用得最多的是解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包）。

- npm一次性安装多个依赖模块，模块之间用空格隔开
```
npm i babel-loader babel-core babel-preset-es2015 babel-preset-react
```
## 一些细节
1. 本例没有生产环境中的文件复杂，所以配置Bable的依赖模块信息都在webpack.config.js里。

2. page.html在这里的功能就是加载打包后的bundle.js

3. 每次重新运行webpack，bundle.js里都会重新生成新的内容

3. .gitignore的作用是防止你把依赖模块的目录上传到 GitHub 上【很大。。】。你在新建项目的时候选择 Node，也可以达到同样目的。

## [导入](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
#### [建议你先花2分钟看两眼import和export，至少知道这俩ES6的是干啥的。过完本例后再把MDN里的例子跑一遍。]

- 导入的模型写法主要分以下5种

1. defaultMember（myDefault）
2. `*` as (随意名字)
3. {a1 as alias2（别名）}
4. {变量1， 变量2， 变量3...}
5. 引入整个模块。

- 注意点

1. 在app.js中，默认导入的放在最前面，否则报错。
2. 用MyModule和{显式命名的成员foo1, foo2}同时导入时，
myModule.foo1  和 foo1完全相同 

## [导出](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)

命名导出
默认导出（一个脚本只能有一个）
