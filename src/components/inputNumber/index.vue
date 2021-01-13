<template>
  <div class="inputNumber">
    <div @click="handleClickJian" :class="{'inputNumber-disabled': min >= num}">
      <i class="iconfont icon-jianshao"></i>
    </div>
    <input type="text" v-model="num" @blur="handleInput">
    <div @click="handleClickAdd" :class="{'inputNumber-disabled': max <= num}">
      <i class="iconfont icon-tianjia"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputNumber',
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
      default: 1
    },
    precision: {
      type: Number
    }
  },
  data () {
    return {
      num: 0
    }
  },
  created () {
    const self = this;
    self.num = self.value;
  },
  methods: {
    handleInput() {
      const self = this;
      if (self.min > self.num) {
        self.num = Number(self.min);
        return false;
      }
      if (self.max < self.num) {
        self.num = Number(self.max);
        return false;
      }
      self.num = Number(self.num);
        self.handleEmit(self.num)
    },
    handleClickJian() {
      const self = this;
      if (self.min < self.num) {
        self.handleEmit(self.num -= self.step)
      }
    },
    handleClickAdd() {
      const self = this;
      if (self.max > self.num) {
        self.handleEmit(self.num += self.step)
      }
    },
    handleEmit(data) {
      const self = this;
      if (self.precision) {
        data = Number(data.toFixed(self.precision));
        self.num = data;
      }
      self.$emit('input', data)
    }
  }
}
</script>

<style scoped>
.inputNumber {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 200px;
  height: 45px;
  border: 1px solid #cccccc;
}
.inputNumber input {
  flex: 1;
  min-width: 30px;
  height: 100%;
  text-align: center;
  border: none;
  outline: none;
}
.inputNumber div {
  width: 45px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.inputNumber div:first-child {
  border-right: 1px solid #cccccc;
}
.inputNumber div:last-child {
  border-left: 1px solid #cccccc;
}
.inputNumber-disabled {
  color: #cccccc;
  cursor: not-allowed !important;
}
</style>
