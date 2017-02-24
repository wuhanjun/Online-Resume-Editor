<template>
  <div id="resume-preview">
   <section data-name="profile" v-show="resume.profile">
      <h1>
        {{resume.profile.name}}
      </h1>
      <h2>{{resume.profile.title}}</h2>
      <p>
        <small>{{resume.profile.city}}</small>
        <small>{{resume.profile.birthday}}</small>
      </p>
    </section>

    <section data-name="projects" v-show="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show="item.content"> - {{item.content}} </span>
          </h3>
        </li>
      </ol>
    </section>

    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.content"> {{item.content}} </p>
        </li>
      </ol>
    </section>

    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item.contact}}</td>
          <td v-show="item.content"> {{item.content}} </td>
        </tr>
      </table>
    </section>

  </div>
</template>
import { mapGetters } from 'vuex'
<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume() {
        //return this.$store.state.resume   //也可以直接返回state.resume，下面的getters是store中进行处理，数据发生变化中应用
      return this.$store.getters.retur;

    },
  }
  }
</script>
<style lang="scss">
  #resume-preview {
    background:white;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    padding: 2em;  /*所有字体间距调整都用em，方便控制。*/
    color: #333;
    line-height: 1.2;
    overflow: auto;
    * {
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal;/*将标题文字的bold变为normal。文字变细*/
    }
    ol{
      list-style: none;
    }
    section + section{
      margin-top: 2em; /*这样的话，最上面一个就不会有margin-top，避免了外边距合并的问题*/
    }
   p{
     white-space: pre-line;
   }
    section {
      >h2:first-child{
          background: #ddd; display: inline-block; padding: .2em;
          margin-bottom: .5em;
        }
    }
    section[data-name="profile"]{
      >h1{
          margin: .1em 0;
          font-size: 4em;
      }
    }
    section[data-name="workHistory"]{
      li + li {
        margin-top: 1em;
      }
      li {
        h3{
          border-bottom: 1px solid #999;
          padding-bottom: .3em;
          margin-bottom: .3em;
        }
      }
    }
    section[data-name="education"]{
      li{
        line-height: 1.5;
      }
    }
  }

</style>

