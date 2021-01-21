import Vue from 'vue';
import notif from './index.vue';

const notifExtend = Vue.extend(notif);

let notifConfrim = function (text) {
  return new Promise((res, rej) => {
    let notifDom = new notifExtend({
      el: document.createElement('div')
    })

    document.body.appendChild(notifDom.$el); // 页面添加元素
    notifDom.text = Object.assign(notifDom.text, text); // 合并对象

    notifDom.ok = () => {
      res()
    }
    notifDom.close = () => {
      rej()
    }
  })
}

export default notifConfrim;