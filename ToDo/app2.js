/**
 * Created by lenovo on 2017/1/18.
 */
/**
 * Created by lenovo on 2017/1/10.
 */
import Vue from './node_modules/vue/dist/vue.common';//如果只写vue，会自动去modules目录下找，根据的是webpack.config.js中的alias制动的目录。
import style from './style.css'  //如果写完整路径，就必须写vue.js||vue.common.js||vue.min.js而不是runtime的js
var app = new Vue({
    el: '#app',
    data: {
        newTodo: '', //输入值和newTodo的值通过v-model双向绑定
        todoList: [], //v-on回车之后将值传入数组内
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
                    + ( (day < 10) ? '0': '' ) + day + ' '
                    + ( (hour < 10) ? '0' : '' ) +  hour + ':'
                    + ( (minute < 10) ? '0': '' ) + minute + ':'
                    + ((second < 10) ? '0' : '') + second;
            if(this.newTodo){
                this.todoList.push({
                    title: this.newTodo,
                    createdAt: time,
                    done: false,  //生成的对象的done属性和input通过v-model双向绑定
                });
            }
            this.newTodo = '';
        },
        removeTodo: function (todo) {
            var idx = this.todoList.indexOf(todo);
            this.todoList.splice(idx, 1); //splice 结婚，使结合，功能却是删除。
        },
    },
    created: function(){  //在实例生成之后执行函数
        // onbeforeunload文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = ()=>{  //当页面关闭或刷新的时候执行一个方法
            let dataString = JSON.stringify(this.todoList)
            window.localStorage.setItem('myTodos', dataString)

            window.localStorage.setItem('save', this.newTodo)//页面关闭的时候保存在输入框中的值

        };//localStorage里面都是字符串。

        let oldDataString = window.localStorage.getItem('myTodos')  //用户进入页面之后立即读取localStorage中的数据
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []

        this.newTodo = window.localStorage.getItem('save') || '';

    }
});

