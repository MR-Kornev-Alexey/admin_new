import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSidebarMenu from '../src/index'

import vDashboard from './components/v-dashboard.vue'
import vBase from './components/v-base'
import vSorting from './components/v-sorting'
import vDelete from './components/v-delete'
import vUsers from './components/v-users'
import vTop100 from './components/v-top100'
import vChart from './components/v-chart'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'v-dashboard',
      component: vDashboard
    },
    {
      path: '/base',
      name: 'v-base',
      component: vBase
    },
    {
      path: '/sorting',
      name: 'v-sorting',
      component: vSorting
    },
    {
      path: '/delete',
      name: 'v-delete',
      component: vDelete
    },
    {
      path: '/users',
      name: 'v-users',
      component: vUsers
    },
    {
      path: '/top100',
      name: 'v-top100',
      component: vTop100
    },
    {
      path: '/chart',
      name: 'v-chart',
      component: vChart
    }
  ]
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})
