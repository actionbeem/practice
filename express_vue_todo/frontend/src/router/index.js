import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/IndexPage.vue'
import Show from '../components/ShowPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/:id',
      name: 'show',
      component: Show
    }
  ]
})
