import Vue from 'vue';
import message from './index.vue';

const messageExtend = Vue.extend(message);

let messageConfirm = function (text) {
  return new Promise((res, rej) => { // promise封装，ok执行resolve，no执行rejectlet
    let messageDom = new messageExtend({
      el: document.createElement('div')
    });
    if (!text.duration) {
      text.duration = 2000
    }
    document.body.appendChild(messageDom.$el); // new一个对象，然后插入body里面
    messageDom.text = Object.assign(messageDom.text, text);  //为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
    setTimeout(() => {
      messageDom.$el.remove();
    }, text.duration)
    messageDom.ok = function () {
      res()
    }
    messageDom.close = function () {
      rej()
    }
  })
}

export default messageConfirm;