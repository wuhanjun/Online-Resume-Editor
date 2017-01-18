/**
 * Created by lenovo on 2017/1/10.
 */
import Vue from 'vue';
import style from './style.css'
var app = new Vue({   //¿¿github¿¿¿¿¿
    el: '#app',
    data: {
        newTodo: '', //ÊäÈëÖµºÍnewTodoµÄÖµÍ¨¹ıv-modelË«Ïò°ó¶¨
        todoList: [] //v-on»Ø³µÖ®ºó½«Öµ´«ÈëÊı×éÄÚ
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
                    done: false,  //Éú³ÉµÄ¶ÔÏóµÄdoneÊôĞÔºÍinputÍ¨¹ıv-modelË«Ïò°ó¶¨
                });
            }
            this.newTodo = '';
        },
        removeTodo: function (todo) {
            var idx = this.todoList.indexOf(todo);
            this.todoList.splice(idx, 1); //splice ½á»é£¬Ê¹½áºÏ£¬¹¦ÄÜÈ´ÊÇÉ¾³ı¡£
        },
    },
    created: function(){  //ÔÚÊµÀıÉú³ÉÖ®ºóÖ´ĞĞº¯Êı
        // onbeforeunloadÎÄµµ£ºhttps://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
        window.onbeforeunload = ()=>{  //µ±Ò³Ãæ¹Ø±Õ»òË¢ĞÂµÄÊ±ºòÖ´ĞĞÒ»¸ö·½·¨
            let dataString = JSON.stringify(this.todoList)
            window.localStorage.setItem('myTodos', dataString)
        };//localStorageÀïÃæ¶¼ÊÇ×Ö·û´®¡£

        let oldDataString = window.localStorage.getItem('myTodos')  //ÓÃ»§½øÈëÒ³ÃæÖ®ºóÁ¢¼´¶ÁÈ¡localStorageÖĞµÄÊı¾İ
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []
    }
});

