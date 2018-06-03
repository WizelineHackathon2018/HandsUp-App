import Vue from 'vue'
import VueRouter from 'vue-router'

// Import component for routes
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import UncategorizedTasks from '@/components/user/UncategorizedTasks'
import UserFeed from '@/components/user/UserFeed'

Vue.use(VueRouter)

export default new VueRouter ({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/user/:username/uncategorized',
      name: 'user.uncategorized',
      component: UncategorizedTasks
    },
    {
      path: '/user/:username/feed',
      name: 'user.feed',
      component: UserFeed
    }
  ]
})
