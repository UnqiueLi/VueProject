import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloVue from '@/components/day01/HelloVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/day01',
      name: 'HelloVue',
      component: HelloVue
    }
  ]
})
