<template>
  <div class="home">
    <div class="home-left">
      <div class="home-left-item" v-for="item in list" :key="item.id" @click="$router.push(item.path)">{{item.text}}</div>
    </div>
    <div class="home-right">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      list: [{
        text: '单选',
        path: '/radio'
      }, {
        text: '多选',
        path: '/checkbox'
      }, {
        text: '表单',
        path: '/input'
      }, {
        text: '记数器',
        path: '/inputnumber'
      }, {
        text: '下拉框选择器',
        path: '/select'
      }]
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.home-left-item {
  width: 250px;
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid #888888;
  border-right: 1px solid #888888;
}
.home-right {
  padding: 20px;
}
</style>
