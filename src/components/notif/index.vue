<template>
  <div class="notif notify-tyq-dom" ref="notifDom" :style="'top:'+top+'px'">
    <div class="notif-title">
      <div>{{text.title}}</div>
      <div class="notif-title-close" @click="handleClickClose">X</div>
    </div>
    <div class="notif-container" :title="text.message">
      {{text.message}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: {
        title: '通知标题',
        message: '通知内容....'
      },
      top: 20
    }
  },
  created() {
    const self = this;
    let notifDoms = document.querySelectorAll('.notify-tyq-dom');
    // console.log(notifDoms.length,notifDoms[notifDoms.length - 1].clientHeight)
    let beforeTop = notifDoms.length ? Number(notifDoms[notifDoms.length - 1].style.top.slice(0, notifDoms[notifDoms.length - 1].style.top.length-2)) : 0;
    let beforeHeight = notifDoms.length ? Number(notifDoms[notifDoms.length - 1].clientHeight) : 0;
    // console.log(notifDoms[notifDoms.length - 1].style.top, beforeTop, beforeHeight);
    self.top = beforeTop + beforeHeight + 20;
  },
  methods: {
    handleClickClose() {
      const self = this;
      self.$refs.notifDom.remove();
    }
  }
}
</script>

<style scoped>
.notif {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 250px;
  min-height: 100px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 9999;
}
.notif-title {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-weight: bold;
}
.notif-title-close {
  padding: 0 10px;
  cursor: pointer;
}
.notif-container {
  padding: 0 10px 10px 10px;
  word-break: break-all;
  overflow: hidden;
}
</style>