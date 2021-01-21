<template>
  <div class="message">
    <button @click="handleClickSuccess">成功提示</button>
    <button @click="handleClickWarn">警告提示</button>
    <button @click="handleClickError">错误提示</button>
    <button @click="handleClickInfo">信息提示</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: {
        icon: 'icon-quanxuan',
        message: '这是一条提示...',
        type: 'success',
        duration: 2000
      }
    }
  },
  methods: {
    // 成功提示
    handleClickSuccess() {
      const self = this;
      // console.log(self)
      self.$message({
        icon: 'icon-kabao',
        type: 'success',
        message: '成功提示',
        duration: 3000
      })
    },

    // 警告提示
    handleClickWarn() {
      const self = this;
      // console.log(self)
      self.$message({
        type: 'warn',
        message: '警告提示',
        duration: 3000
      })
    },

    // 错误提示
    handleClickError() {
      const self = this;
      // console.log(self)
      self.$message({
        type: 'error',
        message: '错误提示错误提示错误提示错误提示错误提示错误提示错误提示错误提示错误提示错误提示错误提示',
        duration: 3000
      })
    },

    // 信息提示
    handleClickInfo() {
      const self = this;
      // console.log(self)
      self.$message({
        type: 'info',
        message: '信息提示',
        duration: 3000
      })
    },
  }
}
</script>

<style scoped>
</style>