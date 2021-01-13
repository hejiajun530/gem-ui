<template>
  <div class="inputnumber">
    <g-inputNumber v-model="num" :min="0" :max="5" :step="0.1" :precision="2"></g-inputNumber>
  </div>
</template>

<script>
import inputNumber from '@/components/inputNumber/index'
export default {
  name: 'inputnumber',
  components: {
    'g-inputNumber': inputNumber
  },
  data () {
    return {
      num: 1
    }
  },
  watch: {
    num () {
      console.log(this.num)
    }
  }
}
</script>

<style scoped>
.inputnumber {
  height: 100vh;
}
</style>
