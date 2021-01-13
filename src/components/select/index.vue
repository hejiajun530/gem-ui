<template>
  <div class="select1" v-clickOutSide="handleClickHide">
    <div class="select-input" @click="handleClickShowOrHide">
      <input type="text" v-model="value" :placeholder="placeholder" disabled v-show="list.length <= 0">
      <div class="select-input-list" v-show="list.length">
        <div class="select-input-list-item" v-for="item in list" :key="item.id" @click.stop="handleClickChoose">{{item}}</div>
      </div>
    </div>
    <div class="select-container" v-show="showOptions" @click="handleClickChoose">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { clickOutSide } from '@/commons/directive.js';
export default {
  name: 'select1',
  props: {
    placeholder: {
      type: String,
      default: '请选择...'
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    clickOutSide
  },
  data () {
    return {
      value: '',
      showOptions: false,
      list: []
    }
  },
  created () {
    const self = this;
  },
  methods: {
    handleClickHide() {
      const self = this;
      self.showOptions = false;
    },
    handleClickShowOrHide () {
      const self = this;
      self.showOptions = !self.showOptions;
    },
    handleClickChoose(e) {
      const self = this;
      let data = e.target.innerText;
      // console.log(self.value);
      if (self.multiple) {
        // 如果数组中有这个值，就删除，没有就添加
        if (self.list.indexOf(data) != -1) {
          // 删除
          self.list.splice(self.list.indexOf(data), 1);
        } else {
          // 添加
          self.list.push(data);
        }
        // console.log(self.list)
        self.$emit("input", self.list);
      } else {
        self.value = data;
        self.$emit('input', self.value);
      }
    }
  }
}
</script>

<style scoped>
.select1 {
  position: relative;
  width: 210px;
  border-radius: 3px;
  border: 1px solid #cccccc;
}
.select-input-list {
  width: 100%;
  max-width: 80%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
.select-input-list .select-input-list-item {
  padding: 2px 5px;
  background: cyan;
  margin: 2px;
  cursor: pointer;
}
.select-input {
  position: relative;
  min-height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.select-input input {
  width: 85%;
  height: 100%;
  font-size: 16px;
  padding: 0 0 0 5px;
  border: none;
  outline: none;
  box-sizing: border-box;
}
.select-input::after,
.select-input.active::after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  right: 5px;
  width: 0;
  height: 0;
  border: 8px solid;
}
.select-input::after {
  border-color: #cccccc transparent transparent transparent;
  transform: translate(0, -25%);
}
.select-input.active::after {
  border-color: transparent transparent #cccccc transparent;
  transform: translate(0, -75%);
}
.select-container {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  transform: translate(0, 100%);
}
</style>
