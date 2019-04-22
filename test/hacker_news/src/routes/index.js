import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../view/NewsView.vue'
import AskView from '../view/AskView.vue'
import JobsView from '../view/JobsView.vue'
import DetailView from '../view/DetailView.vue'
import UserView from '../view/UserView.vue'

Vue.use(VueRouter);

export const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/ask/:id',
      component: DetailView,
    },
    {
      path: '/user/:user',
      component: UserView,
    },
  ]
})