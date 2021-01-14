<template>
  <div class="switch" :style="'background:'+(value ? activeColor : defaultColor)" @click="handleClickFlag">
    <div class="switch-track" ref="track"></div>
  </div>
</template>

<script>
export default {
  name: 'switch1',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    defaultColor: {
      type: String,
      default: '#00ff00'
    },
    activeColor: {
      type: String,
      default: '#ff0000'
    }
  },
  data() {
    return {
    }
  },
  watch: {
    value() {
      const self = this;
      self.handleChangeTrack();
    }
  },
  mounted() {
    const self = this;
    self.handleChangeTrack();
  },
  methods: {
    handleClickFlag() {
      const self = this;
      self.$emit('input', !self.value)
    },
    handleChangeTrack() {
      const self = this;
      self.$refs.track.style.left = self.value ? 60 - 25 + 'px' : 0;
    }
  }
}
</script>

<style scoped>
.switch {
  width: 60px;
  height: 25px;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
}
.switch-track {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: #ffffff;
  transition: all 0.3s;
}
</style>