# a Vue-Test

## 运行指南

### 简易版

mkdir
```
mkdir vue-demo
```

clone我的项目到你的本地 

```
git@github.com:WuHanJun/Online-Resume-Editor/Hello-Vue.git
```

安装依赖

```
npm install
```

运行
```
./node_modules/.bin/webpack
```

打开page.html


### 啰嗦版

- mkdir

- clone我的项目到你的本地 

```
git@github.com:WuHanJun/Online-Resume-Editor/Hello-Vue.git
```

- 直接npm install
```
1. 不用 [nmp install vue](https://cn.vuejs.org/v2/guide/installation.html) 了，
2. 不用 npm init来获取package.json了，
3. 不用单独安装依赖(webpack vue babel-loader babel-core babel-preset-es2015 babel-preset-react)了我都放在(npm i -S)package.json里面了，所以你执行完这句话就安装好了。四不四很贴心。
4. 不用写readme.md了，这里也有一个，如果没有的话npm里会出警告。
```
- ./node_modules/.bin/webpack 在你的npm里执行这个命令（啊，原来命令是一个文件！你才知道=，=）

注意：因为不是全局安装的，所以你用webpack -v npm会说没有这个命令。

或者你嫌命令太长，npm install -g webpack.全局安装一下，
那么直接输入  webpack    命令就可以了。

- 打开page.html
