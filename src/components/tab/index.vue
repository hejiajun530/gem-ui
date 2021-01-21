<template>
  <div class="tab">
    <div class="tab-title" v-for="item in tablist" :key="item.id" :class="{ 'active': value == item.name }">{{item[label]}}</div>
    <div class="tab-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    tablist: Array,
    label: String
  },
  data () {
    return {
    }
  },
  created () {
    const self = this;
  }
}
</script>

<style scoped>

</style>