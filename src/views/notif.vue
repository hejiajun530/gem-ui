<template>
  <div class="notif">
    <button @click="handleClickNotif">通知</button>
    <button @click="handleClickNotif1">通知1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClickNotif() {
      const self = this;
      self.$notif({
        title: '重大通知',
        message: '一月就放假了...'
      })
    },
    
    handleClickNotif1() {
      const self = this;
      self.$notif({
        title: '重大通知11',
        message: '一月就放假了...一月就放假了...一月就放假了...一月就放假了...一月就放假了...一月就放假了...一月就放假了...一月就放假了...一月就放假了...1222222222222222222222222222222222222222'
      })
    }
  }
}
</script>

<style scoped>

</style>