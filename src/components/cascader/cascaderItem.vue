<template>
  <div class="cascaderItem">
    <div class="cascaderItem-left">
      <div class="cascaderItem-left-item" v-for="item in options" :key="item.id" @click="select(item)" :class="{'active': selectedItems.indexOf(item) != -1}">
        <div>{{item.label}}</div>
        <div v-show="item.children">&gt;</div>
      </div>
    </div>
    <div class="cascaderItem-right"
      v-if="lists && lists.length">
      <cascaderItem
        :options="lists"
        :selectedItems="selectedItems"
        :level="level + 1"
        @change="change"
      ></cascaderItem>
    </div>
  </div>
</template>

<script>
import Cascader from '../../views/cascader.vue'
export default {
  name: 'cascaderItem',
  props: {
    options: {
      type: Array
    },
    selectedItems: {
      type: Array
    },
    level: {
      type: Number
    }
  },
  data () {
    return {}
  },
  computed: {
    lists() {
      return this.selectedItems[this.level] && this.selectedItems[this.level].children
    }
  },
  methods: {
    select(item) {
      const self = this;
      self.$emit('change', {level: this.level, item: item});
    },
    change(newValue) {
      const self = this;
      self.$emit('change', newValue);
    }
  }
}
</script>

<style scoped>
.cascaderItem {
  position: relative;
  box-sizing: border-box;
}
.cascaderItem-left,
.cascaderItem-right {
  box-sizing: border-box;
}
.cascaderItem-left {
  height: 250px;
  overflow-y: scroll;
  border: 1px solid #cccccc;
}
/* 修改滚动条样式 */
.cascaderItem-left::-webkit-scrollbar{
  width: 5px;
}
.cascaderItem-left::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 5px;
}
.cascaderItem-left::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 10px;
}
.cascaderItem-left-item {
  /* width: 100%; */
  min-width: 200px;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.cascaderItem-left-item div {
  white-space: nowrap;
  box-sizing: border-box;
}
.cascaderItem-left-item.active {
  color: aqua;
}
.cascaderItem-right {
  position: absolute;
  top: 0;
  right: 0;
  margin-left: -1px;
  transform: translate(100%, 0);
}
</style>