<template>
  <div class="tab">
    <div class="tab-title">
      <div class="tab-title-item" @click="handleClickChoose(item)" v-for="item in tablist" :key="item.id" :class="{ 'active': value == item.name }">{{item[label]}}</div>
    </div>
    <div class="tab-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    tablist: Array,
    label: String
  },
  data () {
    return {
      tabIndex: 0
    }
  },
  created () {
    const self = this;
  },
  methods: {
    handleClickChoose (item) {
      const self = this;
      self.$emit('input', item.name)
    }
  }
}
</script>

<style scoped>
.tab {
  min-width: 500px;
}
.tab-title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 3px solid #dddddd;
}
.tab-title-item {
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
}
.tab-title-item.active {
  color: #5e5e9c;
}
.tab-title-item::after,
.tab-title-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  transform: translate(0, 100%);
}
.tab-title-item::after {
  border-bottom: 3px solid transparent;
}
.tab-title-item.active::after {
  border-bottom: 3px solid #5e5e9c;
}
</style>