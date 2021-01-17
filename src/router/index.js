import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/pages/content'
import Input from '@/pages/input'

Vue.use(Router)

export default new Router({
  routes: [
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
