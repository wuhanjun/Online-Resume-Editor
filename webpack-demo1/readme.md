## Babel

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
本例较为简单，所以配置Bable的文件在webpack.config.js里。

page.html在这里的功能就是加载打包后的bundle.js

每次重新运行webpack，bundle.js里都会重新生成新的内容

.gitignore的作用是防止你把这个目录上传到 GitHub 上。你在新建项目的时候选择 Node，也可以达到同样目的。

## 导入

- 导入的模型写法主要分以下4种

1. defaultMember（myDefault）
2. `*` as (随意名字)
3. {a1 as alias2（别名）}
4. {变量1， 变量2， 变量3...}

- 注意点

1. 在app.js中，默认导入的放在最前面，否则报错。
2. 用MyModule和{显式命名的成员foo1, foo2}同时导入时，
myModule.foo1  和 foo1完全相同 

## 导出

命名导出
默认导出（一个脚本只能有一个）
