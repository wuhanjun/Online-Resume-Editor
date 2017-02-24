<template>
  <div class="page">
    <header>
      <TopBar></TopBar>
    </header>
    <main>
      <ResumeEditor></ResumeEditor>
      <ResumePreview></ResumePreview>
    </main>
  </div>
</template>

<script>
  import '../assets/reset.css'
  import 'normalize.css'
  import TopBar from './TopBar'
  import ResumeEditor from './ResumeEditor'
  import ResumePreview from './ResumePreview'
  import icons from '../assets/icons'
  import store from '../store/index.js'
  export default {
    name: 'app',
    store,
    components: {TopBar, ResumeEditor, ResumePreview},
    created: function() {
      document.body.insertAdjacentHTML('afterbegin', icons)
    }
  }
</script>

<style lang="scss">
  .page {
    height: 100vh; /*相对视窗*/
    display: flex;
    flex-direction: column; /*主轴为列*/
    background-color: #eaebec;
    >main {
      flex-grow: 1; /*主轴上伸缩项目按照比例占据剩余空间。*/
    }
    >main {
      max-width: 1440px;
      min-width: 1024px;
      margin-top: 16px;
      margin-bottom: 16px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between; /*注意这里的main也为容器，默认主轴为X方向。伸缩项目平均分布，剩余空间宽度值为项目间距一半*/
      width: 100%; /*如果没有这句main宽度就是1024px。自动收缩*/
      align-self: center; /*注意别看错了，让整个main居中。写在伸缩项目中，可覆盖父层align-items属性。*/

    }

  #resume-editor {
    background-color: #fff;
    min-width: 35%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .25);
  }

  #resume-preview {
    flex-grow: 1; /*位于主轴的项目进行拉伸。上级盒子新定义了flex,默认主轴方向为横向。*/
    margin-left: 16px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .25);
  }

  }
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }

</style>
