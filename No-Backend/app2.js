/**
 * Created by lenovo on 2017/1/18.
 */
/**
 * Created by lenovo on 2017/1/10.
 */
import Vue from 'vue';
import style from './style.css';
import AV from 'leancloud-storage';

var APP_ID = '5OuGs01QFDaKsM5eCBy2TNcM-gzGzoHsz';
var APP_KEY = 'cNkl1NtvGWAc3K46GEjoKzgA';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var app = new Vue({
        el: '#app',
        data: {
            actionType: 'signUp',
            newTodo: '', //
            todoList: [], //
            currentUser: null,
            formData: {
                username: '',
                password: ''
            },
            item:{
                name:"",
                createTime:"",
                isFinished:""
            },
        },
        watch: {
            todoList: {
                handler: function () {
                    this.saveOrUpdateTodos();
                    console.log(1);
                },
                deep: true
            }
        },
        methods: {
            addTodo: function () {
                var date = new Date(),
                    year = date.getFullYear(),
                    month = date.getMonth() + 1,
                    day = date.getDate(),
                    hour = date.getHours(),
                    minute = date.getMinutes(),
                    second = date.getSeconds(),
                    time = year + '-' + ''
                        + ( (month < 10) ? '0' : '' ) + month + '-' + ''
                        + ( (day < 10) ? '0' : '' ) + day + ' '
                        + ( (hour < 10) ? '0' : '' ) + hour + ':'
                        + ( (minute < 10) ? '0' : '' ) + minute + ':'
                        + ((second < 10) ? '0' : '') + second;
                if (this.newTodo) {
                    this.todoList.push({
                        title: this.newTodo,
                        createdAt: time,
                        done: false,  //
                    });
                }
                this.newTodo = '';
                //this.saveOrUpdateTodos();
            },
            removeTodo: function (todo) {
                var idx = this.todoList.indexOf(todo);
                this.todoList.splice(idx, 1); //splice
                //this.saveOrUpdateTodos();
            },
            signUp: function () {
                let user = new AV.User();
                user.setUsername(this.formData.username);
                user.setPassword(this.formData.password);
                user.signUp().then((loginedUser) => { //
                    this.currentUser = this.getCurrentUser() //
                },(error) => {
                console.log('注册失败') //
                });
            },
            login: function () {
                AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => { //
                    this.currentUser = this.getCurrentUser();
                    this.fetchTodos();
                    console.log(this);  //如果是function跟在then后面，this的值就是undefiened，这个this就是Vue$3
                },function (error) {  //箭头函数则会捕获该函数所在上下文的  this 值，作为自己的 this 值，这样就不用this = _this这样的写法了。
                    console.log('登陆失败');
                });
            },
            getCurrentUser: function () {
                let current = AV.User.current();
                console.log(current);
                if (current) {
                    let {id, createdAt, attributes: {username}} = current;  //解构赋值  我需要的几个参数放到前面的对象里，会自动去后面的对象中去找。
                    console.log({id, username, createdAt});
                    return {id, username, createdAt};

                } else {
                    return null;
                }
            },
            logout: function () {
                AV.User.logOut()
                this.currentUser = null
                window.location.reload()
            },
            saveTodos: function () {
                let dataString = JSON.stringify(this.todoList)
                // window.localStorage.setItem('myTodos', dataString)
                //声明类型
                var AVTodos = AV.Object.extend('AllTodos'); //云端自动创建这个AllTodos类，在存储中可以看到
                //新建对象
                var avTodos = new AVTodos();
                //设置内容
                avTodos.set('content', dataString);  //将todolList的json格式的字符串存储到xxx.attribute.content中

                var acl = new AV.ACL();
                acl.setReadAccess(AV.User.current(), true);  //文档中的setPublicReadAccsess出错
                acl.setWriteAccess(AV.User.current(), true);
                avTodos.setACL(acl);  //设置访问控制

                console.log(avTodos);
                avTodos.save().then((todo) => {  //这个todo就是avTodos
                    this.todoList.id = todo.id;
                    console.log(todo.id);  //
                    console.log(todo);
                },function (error) {
                    console.log('失败');
                });
            },
            updateTodos: function () {  //更新对象有什么用？修改数据有用呀~未更新的字段不会产生变动
                let dataString = JSON.stringify(this.todoList);
                console.log(dataString);  //一个对象数组，每个对象有title done createdAt三个属性
                let avTodos = AV.Object.createWithoutData('AllTodos', this.todoList.id)  //这个ID就是上次saveTodos里面的id ，第一个参数是类名
                avTodos.set('content', dataString)
                avTodos.save().then(() => {
                    console.log('更新成功')
                })
            },
            saveOrUpdateTodos: function () {
                if (this.todoList.id) {
                    this.updateTodos()
                } else {
                    this.saveTodos()
                }
            },
            fetchTodos: function () {
                if (this.currentUser) {
                    console.log(this.currentUser);
                    var query = new AV.Query('AllTodos');
                    query.find().then((todos) => {  //这里为什么必须用箭头函数，不能用function (因为this执指向)
                        let avAllTodos = todos[0];  //为什么是第一个 ，因为现在的逻辑是每个账户只有一个AllTodos类。存储方式为新建或更新。
                    console.log(todos);
                    let id = avAllTodos.id;
                    this.todoList = JSON.parse(avAllTodos.attributes.content) //这个attributes从控制台看到的。
                    this.todoList.id = id; //给这个数组设置id有什么用？
                },
                function (error) {
                    console.log(error);
                });
                }
            }
        },
        created: function(){
            window.onbeforeunload = ()=>{
                let dataString = JSON.stringify(this.todoList)
                //debugger
                window.localStorage.setItem('save', this.newTodo)
            };
            this.currentUser = this.getCurrentUser();
            console.log(this.currentUser);  //createdAt username id
            this.fetchTodos();

            this.newTodo = window.localStorage.getItem('save') || '';
        }
});



