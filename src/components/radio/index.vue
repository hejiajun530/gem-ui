<template>
  <div class="radio">
    <div class="radio-item" v-for="(item, index) in radioList" :key="item.id" :class="radioIndex == index ? 'active' : ''" @click="handleClickChooseRadio(index, item)">
      <div class="radio-item-input"></div>
      <div class="radio-item-text">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radio',
  props: {
    radioList: {
      type: Array
    }
  },
  data () {
    return {
      radioIndex: 0
    }
  },
  methods: {
    handleClickChooseRadio (index, item) {
      const self = this
      self.radioIndex = index
      self.$emit('input', item)
    }
  }
}
</script>

<style scoped>
.radio {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.radio-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
}
.radio-item-input {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #222222;
  margin-right: 10px;
  box-sizing: border-box;
}
.radio-item.active .radio-item-input {
  background: #666666;
}
</style>
