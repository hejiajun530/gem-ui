<template>
  <div class="message tyq-message" :class="text.type" :style="'top:' + top + 'px'">
    <i class="iconfont " :class="icon()"></i>
    <div class="message-text">{{text.message}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: {
        icon: '',
        message: '这是一条提示...',
        type: 'success',
        duration: 2000
      },
      top: 10
    }
  },
  created() {
    const self = this;
    let doms = document.querySelectorAll('.tyq-message');
    // console.log(doms, doms[doms.length - 1].style.top);
    let beforetop = doms.length ? Number(doms[doms.length - 1].style.top.slice(0, doms[doms.length - 1].style.top.length - 2)) : 0;
    let beforeheight = doms.length ? Number(doms[doms.length - 1].clientHeight) : 0;
    // console.log(beforetop);
    self.top = beforeheight + beforetop + 20;
  },
  methods: {
    icon () {
      const self = this;
      let type = self.text.type;
      let icon = self.text.icon;
      return icon ? icon : type == 'success' ? 'icon-quanxuan' : type == 'error' ? 'icon-guanbi' : type == 'warn' ? 'icon-yiwen' : 'icon-tongzhi';
    }
  }
}
</script>

<style scoped>
.message {
  position: fixed;
  top: 20px;
  left: 50%;
  min-width: 300px;
  background: rgba(255, 255, 255, 1);
  padding: 15px 10px;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  transform: translate(-50%, 0);
  z-index: 9999;
}
.message i {
  font-size: 18px;
  margin-right: 10px;
}
.message.success {
  color: #67c23a;
  border: 1px solid #bdeba7;
}
.message.error {
  color: #f3350a;
  border: 1px solid #f1b8ab;
}
.message.warn {
  color: #e6921d;
  border: 1px solid #f1ca92;
}
.message.info {
  color: #9fa8bd;
  border: 1px solid #d4dffa;
}
</style>