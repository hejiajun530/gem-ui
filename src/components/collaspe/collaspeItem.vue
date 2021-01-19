<template>
  <div class="collaspeItem">
    <div class="collaspeItem-title" @click="handleClickChoose">{{title}} <div class="collaspeItem-title-icon" :class="{ 'active': $parent.accordion ? $parent.value == name : $parent.value.indexOf(name) != -1 }"></div></div>
    <div class="collaspeItem-box" :class="{ 'active': $parent.accordion ? $parent.value == name : $parent.value.indexOf(name) != -1 }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    name: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClickChoose() {
      const self = this;
      // console.log(self.$parent.accordion);
      if (self.$parent.accordion) {
        self.$parent.$emit('input', self.name)
      } else {
        // 如果数组中有这个值，就删除，没有就添加
        if (self.$parent.list.indexOf(self.name) != -1) {
          // 删除
          self.$parent.list.splice(self.$parent.list.indexOf(self.name), 1);
        } else {
          // 添加
          self.$parent.list.push(self.name);
        }
        // console.log(self.list)
        self.$parent.$emit("input", self.$parent.list);
      }
    }
  }
}
</script>

<style scoped>
.collaspeItem {
  width: 100%;
}
.collaspeItem-title {
  position: relative;
  height: 40px;
  padding: 0 0 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.collaspeItem-box {
  height: 0;
  padding: 0 10px;
  transition: all 0.2s;
  overflow: hidden;
}
.collaspeItem-box.active {
  height: auto;
  padding: 10px;
}
.collaspeItem-title-icon::after,
.collaspeItem-title-icon.active::after {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);
  width: 10px;
  text-align: center;
}
.collaspeItem-title-icon::after {
  content: '+';
}
.collaspeItem-title-icon.active::after {
  content: '-';
}
</style>