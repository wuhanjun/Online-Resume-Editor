<template>
  <div id="top-bar">
    <div class="wrapper">
      <span class="logo">Resumer</span>

      <div class="actions">
        <button class="primary">保存</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #top-bar {
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);

    >.wrapper {
      max-width: 1440px;
      min-width: 1024px;
      height: 64px;
      margin: 0 auto;
      padding: 0 16px;
    }
    >.wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 24px;
      font-family: "Arial";
    }
  }
  button {
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    color: #222;
    &:hover {
      box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
     }
    &.primary {
    background: #02af5f;
    color: #fff;
    }
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
