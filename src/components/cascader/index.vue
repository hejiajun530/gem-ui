<template>
  <div class="cascader" v-clickOutSide="handleClickHide">
    <div class="cascader-input" @click="handleClickShow" :class="{'active': showFlag}">
      <input type="text" v-model="cascaderValue" disabled placeholder="请选择">
    </div>
    <div class="cascader-box" v-show="showFlag">
      <g-cascaderItem
        :options="options"
        :selectedItems="selectedItems"
        :level="0"
        @change="change"
      ></g-cascaderItem>
    </div>
  </div>
</template>

<script>
import cascaderItem from './cascaderItem';
import { clickOutSide } from "@/commons/directive";
export default {
  name: 'cascader',
  props: {
    options: {
      type: Array
    }
  },
  components: {
    'g-cascaderItem': cascaderItem
  },
  directives: {
    clickOutSide
  },
  data () {
    return {
      showFlag: false,
      // 用户自己选择项
      selectedItems: [],
      cascaderValue: ''
    }
  },
  methods: {
    handleClickShow() {
      const self = this;
      self.showFlag = !self.showFlag;
    },
    handleClickHide() {
      const self = this;
      self.showFlag = false;
    },
    change(newValue) {
      const self = this;
      self.selectedItems.splice(newValue.level, 1, newValue.item);
      self.selectedItems.splice(newValue.level + 1);
      console.log(self.selectedItems)
      self.cascaderValue = self.selectedItems.map(item => item.label).join('/')
    }
  }
}
</script>

<style scoped>
.cascader {
  position: relative;
}
.cascader-input {
  position: relative;
  width: 200px;
  height: 35px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  box-sizing: border-box;
}
.cascader-input input {
  height: 100%;
  width: 85%;
  padding: 0 0 0 5px;
  box-sizing: border-box;
  border: none;
  outline: none;
}
.cascader-input::after,
.cascader-input.active::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  border: 5px solid;
}
.cascader-input::after {
  transform: translate(0, -20%);
  border-color: #666666 transparent transparent transparent;
}
.cascader-input.active::after {
  transform: translate(0, -70%);
  border-color: transparent transparent #666666 transparent;
}
.cascader-box {
  position: absolute;
  bottom: -1px;
  left: 0;
  min-width: 150px;
  transform: translate(0, 100%);
}
</style>