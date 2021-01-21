<template>
  <div class="alert-mask" ref="alertMaskDom">
    <div class="alert">
      <div class="alert-title">
        <div>{{text.title}}</div>
        <div class="alert-title-close" @click="handleClick('cancal')">X</div>
      </div>
      <div class="alert-contaiiner">{{text.message}}</div>
      <div class="alert-btn">
        <div @click="handleClick('cancal')">{{text.btn.cancal}}</div>
        <div @click="handleClick('confirm')">{{text.btn.confirm}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: {
        title: '标题',
        message: '内容',
        btn: {
          confirm: '确定',
          cancal: '取消'
        }
      }
    }
  },
  methods: {
    handleClick (data) {
      const self = this;
      // console.log(data);
      self.callback(data)
      self.$refs.alertMaskDom.remove();
    }
  }
}
</script>

<style scoped>
.alert-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
.alert {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.alert-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 15px;
  font-weight: bold;
  box-sizing: border-box;
}
.alert-title-close {
  padding: 10px 20px;
  cursor: pointer;
}
.alert-contaiiner {
  width: 100%;
  padding: 0 20px 20px 20px;
  word-break: break-all;
  box-sizing: border-box;
}
.alert-btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.alert-btn div {
  padding: 5px 10px;
  color: #e6921d;
  border: 1px solid #f1cb95;
  border-radius: 5px;
  cursor: pointer;
}
.alert-btn div:last-child {
  background: #e6921d;
  color: #ffffff;
  margin-left: 10px;
}
</style>