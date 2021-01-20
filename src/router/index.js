import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages'
import Content from '@/pages/content'
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
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
