<template>
  <div class="collaspe">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: ['value', 'accordion'],
  props: {
    value: {
      default: ''
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    const self = this;
    self.list = self.value;
  },
  methods: {
  }
}
</script>

<style scoped>
.collaspe {
  width: 100%;
}
</style>