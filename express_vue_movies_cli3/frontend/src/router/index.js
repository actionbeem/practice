import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '@/components/IndexPage'
import Show from '@/components/ShowPage'
import Test from '@/components/Test'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/:id',
      name: 'show',
      component: Show
    },
  ]
})