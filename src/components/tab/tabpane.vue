<template>
  <div class="tabpane" v-show="$parent.value == name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.tabpane {
  padding: 20px;
}
</style>