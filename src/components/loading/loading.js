import Vue from 'vue';
import loading from './index.vue';

const loadExtend = Vue.extend(loading);

let loadConfirm = function (text) {
  return new Promise((res, rej) => {
    let loadDom = new loadExtend({
      el: document.createElement('div')
    })

    loadDom.text = Object.assign(loadDom.text, text); // 合并对象
    // console.log(text)
    if (text.show) {
      document.body.appendChild(loadDom.$el); // 把元素添加到页面中
    } else {
      document.querySelector('#g-loadingMask-tyq').remove(); // 删除元素
    }

    loadDom.ok = () => {
      res()
    }
    loadDom.close = () => {
      rej()
    }
  })
}

export default loadConfirm;