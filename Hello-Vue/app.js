/**
 * Created by lenovo on 2017/1/10.
 */
import bar from './bar';
import Vue from 'vue'; //这里的vue哪里来的？
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
console.log(app);