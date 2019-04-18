import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/IndexPage.vue'
import ShowPage from '../components/ShowPage.vue'
import TodoPage from '../components/TodoPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoPage
    },
    {
      path: '/:id',
      name: 'show',
      component: ShowPage
    }
  ]
})
