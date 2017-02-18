<template>
  <div id="resume-editor">
    <nav>
      <ol>
        <li v-for="item in resume.config"
            :class="{active: item.field === selected}"
            @click="selected = item.field"
        >
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">

        <div v-if="resume[item.field] instanceof Array">
          <div class="resumeField" v-for="subitem in resume[item.field]"><!--resume[item.field]是数组-->
            <div class="subitem" v-for="(value,key) in subitem">  <!--subitem是数组内的对象-->
              <label> {{key}} </label>
              <input type="text" :value="value">
            </div>
          </div>
        </div>

        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]"><!--item对象，subitem是resume下的选中的对象-->
            <label> {{key}} </label>
            <input type="text" :value="value">
        </div>

      </li>
    </ol>
  </div>
</template>

<style lang="scss"  rel="stylesheet/scss" scoped>
  #resume-editor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .25);
    display: flex;
    overflow: auto;

  >nav {
    width: 80px;
    background: #000;
    color: #fff;

  >ol {

  >li {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;

  &.active {
    background: #fff;
    color: #000;
  }

  }
  }
  }
  >.panels {
    flex-grow:1;
       > li {
      padding: 24px;
       }
   }
  svg.icon {
    width: 24px;
    height: 24px;
  }
  }

  ol {
    list-style: none;
  }
  .resumeField{
  > label{
      display: block;
    }
  input[type=text]{
    margin: 16px 0;
    border: 1px solid #ddd;
    box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
  }
</style>
<script>
  export default {
    name: 'ResumeEditor',
    msg: 'Welcome to Your Vue.js App',
    data: function () {
      return {
        selected: 'profile',
        resume: {
          // visibleItems: ['profile', 'work history', 'education', 'projects', 'awards', 'contacts', 'others'],
          config: [
            { field: 'profile', icon: 'id' }, //这里将上面的数组换成这里的对象原因是，如果将icon放在下面的
            { field: 'work history', icon: 'work' },//单独存储数据的对象中，进行for遍历的时候会因为浏览器js引擎
            { field: 'education', icon: 'book' },//的不同而导致不同的结果，导致ICON序列在不同浏览器下不相同。
            { field: 'projects', icon: 'heart' },
            { field: 'awards', icon: 'cup' },
            { field: 'contacts', icon: 'phone' },
          ],

          profile: {
            name: '吴晗君',
            city: '金华',
            title: '我要开始做项目了',
          },
          'work history': [
            { company: '输入', content: '我的第二份工作是' },//因为要出现相同的键值company，所以要放在两个对象中，而外面就需要数组了。
            { company: '公司', content: '我的第一份工作是' },
          ],
          education: [
            { school: '输入', content: '文字' },
            { school: '学校', content: '文字' },
          ],
          projects: [
            { name: '项目', content: '文字' },
            { name: '项目', content: '文字' },
          ],
          awards: [
            { name: '荣誉', content: '文字' },
            { name: '荣誉', content: '文字' },
          ],
          contacts: [
            { contact: 'phone', content: '13180516153' },
            { contact: 'qq', content: '84786827' },
          ],
        }
      }
    }
  }
</script>
