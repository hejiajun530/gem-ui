<template>
  <div class="dialog">
    <button @click="handleClickDialog">弹出框</button>
    <button @click="handleClickDialog1">弹出框</button>
    <g-dialog
      title="文字"
      :visible="dialogVisible"
      @close="handleClickClose">
      <span>立即发送的那份拉萨的飞机11111111111111111111</span>
    </g-dialog>
    <g-dialog
      title="表单"
      :visible="dialogTempVisible"
      width="50%"
      @close="handleClickClose1">
      <div>
        <div><input type="text" placeholder="请输入用户名"></div>
        <div><input type="text" placeholder="请输入邮箱"></div>
      </div>
      <div slot="footer">
        <button @click="dialogTempVisible = false">取消2</button>
        <button @click="dialogTempVisible = false">确定2</button>
      </div>
    </g-dialog>
  </div>
</template>

<script>
// import dialog from '@/componens/dialog/index';
export default {
  components: {
    'g-dialog': () => import('@/components/dialog/index')
  },
  data () {
    return {
      dialogVisible: false,
      dialogTempVisible: false,
    }
  },
  methods: {
    handleClickDialog() {
      const self = this;
      self.dialogVisible = true;
    },
    handleClickDialog1() {
      const self = this;
      self.dialogTempVisible = true;
    },
    handleClickClose(data) {
      const self = this;
      console.log(data);
      self.dialogVisible = data.visible;
    },
    handleClickClose1(data) {
      const self = this;
      console.log(data);
      self.dialogTempVisible = data.visible;
    }
  }
}
</script>

<style>

</style>