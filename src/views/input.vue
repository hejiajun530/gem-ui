<template>
  <div class="input1">
    <g-input v-model="value" type="password" placeholder="请输入名称11" :rever="false" :disabled="false" icon="icon-guanbi"></g-input>
  </div>
</template>

<script>
import ginput from '@/components/input/index'
export default {
  name: 'input1',
  components: {
    'g-input': ginput
  },
  data () {
    return {
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
.input1 {
  height: 100vh;
}
</style>
