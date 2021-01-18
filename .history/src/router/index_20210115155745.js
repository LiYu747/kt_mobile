import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    chilchen:[
      {
        path: '/home',
        name: 'Home',
        component: Home,
      }
    ]
  },
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
