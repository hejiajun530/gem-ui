<template>
  <div class="table">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>