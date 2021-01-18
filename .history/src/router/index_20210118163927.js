import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/aboutus',
        name: 'AboutUs',
        component: () => import('../views/aboutus/AboutUs.vue'),
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: () => import('../views/contactus/ContactUs.vue'),
      },
      {
        path: '/product/faceRecognition',
        name: 'product',
        component: () => import('../views/product/Product.vue'),
        children:[
          {
            path: '/product/faceRecognition',
            name: 'faceRecognition',
            component: () => import('../views/product/FaceRecognition.vue'),
          },
          {
            path: '/product/wingbrake',
            name: 'wingbrake',
            component: () => import('../views/product/WingBrake.vue'),
          },
          {
            path: '/product/pendulumbrake',
            name: 'pendulumbrake',
            component: () => import('../views/product/PendulumBrake.vue'),
          },
          {
            path: '/product/threegates',
            name: 'threegates',
            component: () => import('../views/product/ThreeGates.vue'),
          },
          {
            path: '/product/panbrake',
            name: 'panbrake',
            component: () => import('../views/product/PanBrake'),
          },
          {
            path: '/product/qualcommbrake',
            name: 'qualcommbrake',
            component: () => import('../views/product/QualcommBrake'),
          },
          {
            path: '/product/standcolumn',
            name: 'standcolumn',
            component: () => import('../views/product/StandColumn'),
          },
        ]
      }
    ]
  },
   
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
