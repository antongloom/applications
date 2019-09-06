import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/loginPerformer',
      name: 'loginPerformer',
      meta: {layout: 'empty'},
      component: () => import('./views/LoginPerformer.vue')
    },
    {
      path: '/сustomer',
      name: 'сustomer',
      meta: {layout: 'main'},
      component: () => import('./views/Сustomer.vue')
    },
    {
      path: '/loginCustomer',
      name: 'loginCustomer',
      meta: {layout: 'empty'},
      component: () => import('./views/loginCustomer.vue')
    }
  ]
})
