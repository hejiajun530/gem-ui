import Vue from 'vue';
import alert from './index.vue';

let alertExtend = Vue.extend(alert);

let alertConfirm = function (text) {
  return new Promise((res, rej) => {
    let alertDom = new alertExtend({
      el: document.createElement('div')
    })

    document.body.appendChild(alertDom.$el);

    alertDom.text = Object.assign(alertDom.text, text);

    alertDom.callback = (action) => {
      console.log(action)
      text.callback(action);
    }

    alertDom.ok = () => {
      res()
    }
    alertDom.close = () => {
      rej()
    }
  })
}

export default alertConfirm;