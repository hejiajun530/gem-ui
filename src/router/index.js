import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决路由重复报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/radio',
    component: () => import('../views/Home.vue'),
    children: [{
      path: '/radio',
      name: 'radio',
      component: () => import('../views/radio.vue')
    }, {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('../views/checkbox.vue')
    }]
  }
]

export default new VueRouter({
  routes: [
    ...routes
  ]
})
