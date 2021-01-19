<template>
  <div class="dropdown" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="dropdown-title">
      <slot></slot>
    </div>
    <div class="dropdown-box" :class="{ 'active': dropdownFlag }">
      <slot name="down"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dropdownFlag: false
    }
  },
  methods: {
    handleMouseEnter() {
      const self = this;
      self.dropdownFlag = true;
    },
    handleMouseLeave() {
      const self = this;
      self.dropdownFlag = false;
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  min-width: 150px;
  height: 35px;
  border-radius: 5px;
}
.dropdown-title {
  width: 100%;
  height: 100%;
  background: rgb(81, 138, 138);
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
}
.dropdown-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform-origin: 0 0;
  transform: translate(0, 100%) scaleY(0);
  border-radius: 5px;
  overflow: hidden;
  background: #ffffff;
  transition: all 0.3s;
  z-index: 999;
}
.dropdown-box.active {
  transform: translate(0, 100%) scaleY(1);
}
</style>