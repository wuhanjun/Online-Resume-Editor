如果是空文件，直接npm install vue 会警告说缺5个东西，
```
npm WARN enoent ENOENT: no such file or directory, open 'E:\前端\repos\test\package.json'
npm WARN test No description
npm WARN test No repository field.
npm WARN test No README data
npm WARN test No license field.
```
1. 用npm init 获取package.json，里面会让你填写一堆东西。写完就可以
2. readme.md
npm -S xxxxx模块名
后来npm i就可以直接安装dependencies里的内容了。
（webpack也会被安装，只不过是被安装在该目录下的node_modules里面）
webpack -v看不出来因为不是全局安装，

`./node_modules/.bin/webpack`这个命令就可以执行wepack