<template>
  <div class="downItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.downItem {
  width: 100%;
  height: 35px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.downItem:hover {
  background: rgb(81, 138, 138);
  color: #ffffff;
}
</style>