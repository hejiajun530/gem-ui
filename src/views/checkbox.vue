<template>
  <div class="checkbox">
    <g-checkbox :checkboxList="checkboxList" v-model="value"></g-checkbox>
  </div>
</template>

<script>
import checkbox from '@/components/checkbox/index'
export default {
  name: 'checkbox',
  components: {
    'g-checkbox': checkbox
  },
  data () {
    return {
      checkboxList: ['语文', '音乐', '英语', '数学'],
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
.radio {
  height: 100vh;
}
</style>
