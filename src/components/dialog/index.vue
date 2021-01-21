<template>
  <div class="dialog-mask" v-show="visible" @click.self="handleClickClose">
    <div class="dialog" :style="'width:'+width">
      <div class="dialog-title">
        <div>{{title}}</div>
        <div class="dialog-title-close" @click.stop="handleClickClose">X</div>
      </div>
      <div class="dialog-container">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '350'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClickClose() {
      const self = this;
      self.$emit('close', {
        visible: false
      })
    }
  }
}
</script>

<style scoped>
.dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  background: #ffffff;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-sizing: border-box;
}
.dialog-title {
  width: 100%;
  padding: 0 0 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.dialog-title-close {
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
}
.dialog-container {
  width: 100%;
  padding: 10px 20px;
  word-break: break-all;
  box-sizing: border-box;
}
.dialog-footer {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>