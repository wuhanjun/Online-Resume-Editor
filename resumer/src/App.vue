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
import './assets/reset.css'
import 'normalize.css/normalize.css'
import TopBar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
export default {
  name: 'app',
  data: function () {
    return {
      text: '你的名字'
    }
  },
  components: {TopBar, ResumeEditor, ResumePreview}
}
</script>

<style>
  .page {
    height: 100vh;/*相对视窗*/
    display: flex;
    flex-direction: column;  /*主轴为列*/
    background-color: #eaebec;
  }
  .page>main {
    flex-grow: 1; /*主轴上伸缩项目按照比例占据剩余空间。*/
    max-width: 1440px;
    min-width: 1024px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;/*注意这里的main也为容器，默认主轴为X方向。伸缩项目平均分布，剩余空间宽度值为项目间距一半*/
    width: 100%;/*如果没有这句main宽度就是1024px。自动收缩*/
    align-self: center;  /*注意别看错了，让整个main居中。写在伸缩项目中，可覆盖父层align-items属性。*/

  }
  #top-bar {

  }
  #resume-editor {
    background-color: #fff;
    width: 35%;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.25);
  }
  #resume-preview {
    width: 61.66667%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.25);
  }
</style>
