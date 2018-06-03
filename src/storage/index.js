import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiURL: 'http://localhost:3000',
    user: {
      name: '',
      id: '_12319283912',
      formData: {}
    },
    tasks: [
      {
        id: '12983712897',
        title: 'Task #1',
        desc: 'This task is supposed to do something awesome in some part of the work flow in our company',
        percentage: 80,
        tags: ['math', 'lucky', 'anything']
      },
      {
        id: '1234231094112',
        title: 'Task #2',
        desc: 'This task is supposed to do something awesome in some part of the work flow in our company',
        percentage: 50,
        tags: []
      },
      {
        id: '09876',
        title: 'Task #3',
        desc: 'This task is supposed to do something awesome in some part of the work flow in our company',
        percentage: 60,
        tags: ['js', 'php', 'html']
      },
      {
        id: '9282878272',
        title: 'Task #4',
        desc: 'This task is supposed to do something awesome in some part of the work flow in our company',
        percentage: 3,
        tags: []
      }
    ]
  },
  mutations: {
    setTagsForExistingTag (state, newTask) {
      state.tasks.forEach((task, index) => {
        if (task.id === newTask.id) {
          task.tags = newTask.tags
          return
        }
      })
    },
    setUserFromFormData(state, userFormData) {
      state.user.name = userFormData.username
      state.user.formData = userFormData
    }
  },
  getters: {
    uncategorizedTasks (state) {
      return state.tasks.filter(t => { return t.tags.length === 0 })
    }
  },
  plugins: [createPersistedState()]
})
