import Vue from 'vue'
import Router from 'vue-router'
import Column from '@/components/chart/column/column'
import Pie from '@/components/chart/pie/pie'
import Line from '@/components/chart/line/line'
import Home from '@/components/common/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/column',
          component: Column
        },
        {
          path: '/line',
          component: Line
        },
        {
          path: '/pie',
          component: Pie
        }
      ]
    }    
  ]
})
