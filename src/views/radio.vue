<template>
  <div class="radio">
    <g-radio :radioList="raioList" v-model="value"></g-radio>
  </div>
</template>

<script>
import radio from '@/components/radio/index'
export default {
  name: 'radio',
  components: {
    'g-radio': radio
  },
  data () {
    return {
      raioList: ['语文', '音乐', '英语', '数学'],
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
