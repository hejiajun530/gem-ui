<template>
  <div class="alert">
    <button @click="handleClickAlert">提示</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClickAlert() {
      const self = this;
      self.$alertjs({
        title: '提示标题...',
        message: '提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容...',
        btn: {
          confirm: '确定11',
          cancal: '取消22'
        },
        callback: (action) => {
          self.$message({
            message: action,
            type: 'success',
            duration: 1000
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>