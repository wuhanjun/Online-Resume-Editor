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