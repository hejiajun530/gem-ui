<template>
  <div class="switch">
    kaiguan
    <g-switch v-model="value"></g-switch>
    <g-switch v-model="value1" defaultColor="#000000" activeColor="#666666"></g-switch>
  </div>
</template>

<script>
import gswitch from '@/components/switch/index';
export default {
  components: {
    'g-switch': gswitch
  },
  data() {
    return {
      value: false,
      value1: true
    }
  }
}
</script>

<style scoped>

</style>