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
    }, {
      path: '/input',
      name: 'input',
      component: () => import('../views/input.vue')
    }, {
      path: '/inputnumber',
      name: 'inputnumber',
      component: () => import('../views/inputnumber.vue')
    }, {
      path: '/select',
      name: 'select',
      component: () => import('../views/select.vue')
    }, {
      path: '/cascader',
      name: 'cascader',
      component: () => import('../views/cascader.vue')
    }, {
      path: '/switch',
      name: 'switch',
      component: () => import('../views/switch.vue')
    }, {
      path: '/star',
      name: 'star',
      component: () => import('../views/star.vue')
    }, {
      path: '/tag',
      name: 'tag',
      component: () => import('../views/tag.vue')
    }, {
      path: '/rili',
      name: 'rili',
      component: () => import('../views/rili.vue')
    }, {
      path: '/timepicker',
      name: 'timepicker',
      component: () => import('../views/timepicker.vue')
    }, {
      path: '/datepicker',
      name: 'datepicker',
      component: () => import('../views/datepicker.vue')
    }, {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/upload.vue')
    }]
  }
]

export default new VueRouter({
  routes: [
    ...routes
  ]
})
