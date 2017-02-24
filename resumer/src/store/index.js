/**
 * Created by lenovo on 2017/2/23.
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    selected: 'profile',
    resume: {
      // visibleItems: ['profile', 'work history', 'education', 'projects', 'awards', 'contacts', 'others'],
      config: [
        { field: 'profile', icon: 'id' }, //这里将上面的数组换成这里的对象原因是，如果将icon放在下面的
        { field: 'workHistory', icon: 'work' },//单独存储数据的对象中，进行for遍历的时候会因为浏览器js引擎
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
      'workHistory': [
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
  },
  getters: {
    retur: state=>{
      return state.resume
    }
  },
  mutations: {
    isActive (state,idx) {
     state.selected = state.resume.config[idx].field
      console.log(state);
    }

  }
})
