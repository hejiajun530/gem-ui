<template>
  <div class="tag" :style="'color:' + color + ';border-color:' + color">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#cccccc'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.tag {
  font-size: 12px;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 3px;
}
</style>