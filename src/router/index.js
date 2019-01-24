import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/day01/HelloVue'
// import ElementUI from 'element-ui'

Vue.use(Router)
// Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day01',
      name: 'HelloVue',
      component: HelloVue
    }
  ]
})
