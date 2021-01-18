<template>
  <div class="time-picker">
    <g-timepicker v-model="value" placeholder="选择时间1"></g-timepicker>
    <g-timepicker v-model="value" placeholder="选择时间2"></g-timepicker>
  </div>
</template>

<script>
import timepicker from '@/components/timePicker/index';
export default {
  components: {
    'g-timepicker': timepicker
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value() {
      console.log(this.value)
    }
  },
  created() {
    const self = this;
  },
  methods: {}
}
</script>

<style scoped>

</style>