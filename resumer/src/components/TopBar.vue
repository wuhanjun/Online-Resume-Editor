<template>
  <div id="top-bar">
    TopBar
  </div>
</template>

<style>
  #top-bar {
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    height: 64px;
  }
</style>

<script>
  export default {
    name: 'TopBar',
    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
