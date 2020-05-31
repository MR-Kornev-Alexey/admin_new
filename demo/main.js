import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSidebarMenu from '../src/index'
import store from './components/vuex/store'
import vDashboard from './components/main-menu/v-dashboard.vue'
import vBase from './components/main-menu/v-base'
import vSorting from './components/main-menu/v-sorting'
import vDelete from './components/main-menu/v-delete'
import vUsers from './components/main-menu/v-users'
import vTop100 from './components/main-menu/v-top100'
import vChart from './components/main-menu/v-chart'
import inputUser from './components/input/input-user'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
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
    },
    {
      path: '/input-user',
      name: 'input-user',
      component: inputUser
    }
  ]
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
