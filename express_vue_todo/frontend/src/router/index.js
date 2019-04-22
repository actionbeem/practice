import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '../components/TodoPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/todos'
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoPage
    },
  ]
})
