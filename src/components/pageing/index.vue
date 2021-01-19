<template>
  <div class="pageing">
    <div class="pageing-prev" @click="handleClickPrevOrNext('prev')">&lt;</div>
    <div class="pageing-num">
      <template v-for="(item, index) in num">
        <div class="pageing-num-item"
          :class="{ 'active': pageIndex == index }"
          @click="handleClickChooseNum(index)"
          v-if="index < 2 || index >= num - 2"
          :key="item.id"
        >{{item}}</div>
        <div class="pageing-num-item"
          :class="{ 'active': pageIndex >= 2 && pageIndex < num - 2 }"
          v-if="num > 4 && index === 2"
          :key="item.id"
        >...</div>
      </template>
    </div>
    <div class="pageing-next" @click="handleClickPrevOrNext('next')">&gt;</div>
  </div>
</template>

<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number
    }
  },
  data(){
    return {
      pageIndex: 0,
      num: 0
    }
  },
  created () {
    const self = this;
    self.num = Math.ceil(self.total/self.pageSize);
  },
  methods: {
    // 选择
    handleClickChooseNum(index) {
      const self = this;
      self.pageIndex = index;
      self.$emit('change', self.pageIndex+1)
    },
    // 下一页 或 上一页
    handleClickPrevOrNext(data) {
      const self = this;
      if (data == 'prev') {
        self.pageIndex = self.pageIndex > 0 ? self.pageIndex-=1 : 0;
      } else if (data == 'next') {
        self.pageIndex = self.pageIndex < self.num - 1 ? self.pageIndex+=1 : self.num - 1;
        // console.log(self.pageIndex)
      }
      self.$emit('change', self.pageIndex+1)
    }
  }
}
</script>

<style scoped>
.pageing {
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pageing-num {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pageing-prev,
.pageing-num-item,
.pageing-next {
  min-width: 40px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
}
.pageing-num-item.active {
  color: #ffffff;
  background: #66D9EF;
}
</style>