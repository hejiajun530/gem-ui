<template>
  <div class="loading">
    <button @click="handleClickLoad1">加载动画1</button>
    <button @click="handleClickLoad2">加载动画2</button>
    <button @click="handleClickLoad3">加载动画3</button>
    <button @click="handleClickLoad4">加载动画4</button>
    <button @click="handleClickLoad5">加载动画5</button>
    <button @click="handleClickLoad6">加载动画6</button>
    <button @click="handleClickLoad7">加载动画7</button>
    <button @click="handleClickLoad8">加载动画8</button>
    <button @click="handleClickLoad9">加载动画9</button>
    <button @click="handleClickLoad10">加载动画10</button>
    <button @click="handleClickLoad11">加载动画11</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClickLoad1 () {
      const self = this;
      self.$loading({
        type: 1,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad2 () {
      const self = this;
      self.$loading({
        type: 2,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad3 () {
      const self = this;
      self.$loading({
        type: 3,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad4 () {
      const self = this;
      self.$loading({
        type: 4,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad5 () {
      const self = this;
      self.$loading({
        type: 5,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad6 () {
      const self = this;
      self.$loading({
        type: 6,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad7 () {
      const self = this;
      self.$loading({
        type: 7,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad8 () {
      const self = this;
      self.$loading({
        type: 8,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad9 () {
      const self = this;
      self.$loading({
        type: 9,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad10 () {
      const self = this;
      self.$loading({
        type: 10,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
    handleClickLoad11 () {
      const self = this;
      self.$loading({
        type: 11,
        show: true
      })
      setTimeout(() => {
        self.$loading({
          show: false
        })
        console.log(1)
      }, 2000)
    },
  }
}
</script>

<style scoped>

</style>