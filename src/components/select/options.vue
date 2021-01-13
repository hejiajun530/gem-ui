<template>
  <div class="options" :class="{'active': $parent.multiple ? ($parent.list.indexOf(value) != -1) : ($parent.value == value)}">
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'options',
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created () {
    const self = this;
  },
  methods: {
  }
}
</script>

<style scoped>
.options {
  width: 100%;
  height: 35px;
  padding: 0 0 0 5px;
  line-height: 35px;
  border: 1px solid #dddddd;
  border-top: none;
  box-sizing: border-box;
  background: #ffffff;
  cursor: pointer;
}
.options.active {
  background: skyblue !important;
}
.options:hover {
  background: #cccccc;
}
</style>
