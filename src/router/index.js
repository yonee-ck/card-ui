import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages'
import Card from '@/pages/card'
import Input from '@/pages/input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
