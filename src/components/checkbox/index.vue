<template>
  <div class="checkbox">
    <div class="checkbox-item" v-for="(item, index) in checkboxList" :key="item.id" :class="checkboxChoose.indexOf(item) !== -1 ? 'active' : ''" @click="handleClickChooseCheckbox(index, item)">
      <div class="checkbox-item-input"></div>
      <div class="checkbox-item-text">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checkboxList: {
      type: Array
    }
  },
  data () {
    return {
      checkboxChoose: []
    }
  },
  methods: {
    handleClickChooseCheckbox (index, data) {
      const self = this
      if (self.checkboxChoose.indexOf(data) !== -1) {
        // 删除
        self.checkboxChoose.splice(self.checkboxChoose.indexOf(data), 1)
      } else {
        // 添加
        self.checkboxChoose.push(data)
      }
      // console.log(self.checkboxChoose)
      self.$emit('input', self.checkboxChoose)
    }
  }
}
</script>

<style scoped>
.checkbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.checkbox-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
}
.checkbox-item-input {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #222222;
  margin-right: 10px;
  box-sizing: border-box;
}
.checkbox-item.active .checkbox-item-input {
  background: #666666;
}
</style>
