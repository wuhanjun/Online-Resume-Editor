// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
// 如果是运行时构建这里就不一样了，要用render。
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
console.log(App.data())
