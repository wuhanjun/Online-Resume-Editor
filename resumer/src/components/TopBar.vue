<template>
  <div id="top-bar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
    </div>
  </div>
</template>

<style>
  #top-bar {
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  }
  #top-bar >.wrapper {
    max-width: 1440px;
    min-width: 1024px;
    height: 64px;
    margin: 0 auto;
    padding: 0 16px;
  }
  #top-bar>.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #top-bar .logo {
    font-size: 24px;
    font-family: "Arial";
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
