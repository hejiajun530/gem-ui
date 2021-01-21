<template>
  <div class="tabpane">
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

</style>