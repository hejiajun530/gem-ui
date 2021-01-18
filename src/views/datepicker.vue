<template>
  <div class="time-picker">
    <g-datepicker v-model="value" placeholder="选择日期1"></g-datepicker>
    <g-datepicker v-model="value" placeholder="选择日期2"></g-datepicker>
  </div>
</template>

<script>
import datepicker from '@/components/datePicker/index';
export default {
  components: {
    'g-datepicker': datepicker
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