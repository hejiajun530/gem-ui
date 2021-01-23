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
      }, {
        text: '级联选择器',
        path: '/cascader'
      }, {
        text: 'switch开关',
        path: '/switch'
      }, {
        text: '星级评分',
        path: '/star'
      }, {
        text: '标签',
        path: '/tag'
      }, {
        text: '日历',
        path: '/rili'
      }, {
        text: '时间选择器',
        path: '/timepicker'
      }, {
        text: '日期选择器',
        path: '/datepicker'
      }, {
        text: '上传图片',
        path: '/upload'
      }, {
        text: '分页',
        path: '/pageing'
      }, {
        text: '下拉菜单',
        path: '/dropdown'
      }, {
        text: '折叠面板',
        path: '/collaspe'
      }, {
        text: '消息提示',
        path: '/message'
      }, {
        text: '动画加载',
        path: '/loading'
      }, {
        text: '通知',
        path: '/notif'
      }, {
        text: '弹出提示',
        path: '/alert'
      }, {
        text: 'tab栏切换',
        path: '/tab'
      }, {
        text: '弹出框',
        path: '/dialog'
      }, {
        text: '轮播图',
        path: '/swiper'
      }, 
      // {
      //   text: '表格',
      //   path: '/table'
      // }
      ]
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
.home-left {
  height: 100vh;
  overflow-y: auto;
}
.home-left::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.home-left::-webkit-scrollbar-thumb {
  width: 10px;
  background: #dddddd;
  border-radius: 10px;
}
.home-left-item {
  width: 250px;
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid #888888;
}
.home-right {
  padding: 20px;
}
</style>
