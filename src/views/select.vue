<template>
  <div class="select11">
    <g-select v-model="value" placeholder="请选择学科" multiple>
      <g-options
      v-for="item in options"
      :key="item.id"
      :value="item.value"></g-options>
    </g-select>
  </div>
</template>

<script>
import select from '@/components/select/index'
import options from '@/components/select/options'
export default {
  name: 'select11',
  components: {
    'g-select': select,
    'g-options': options
  },
  data () {
    return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  watch: {
    value () {
      console.log(this.value)
    }
  }
}
</script>

<style scoped>
.select11 {
  height: 100vh;
}
</style>
