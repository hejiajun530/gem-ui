<template>
  <div class="tag">
    <g-tag>标签</g-tag>
    <g-tag color="#ff0000">标签</g-tag>
    <g-tag color="#00ff00">标签</g-tag>
    <g-tag color="yellow">标签</g-tag>
  </div>
</template>

<script>
import tag from '@/components/tag/index';
export default {
  components: {
    'g-tag': tag
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>