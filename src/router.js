import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: () => import('./views/index.vue')
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
