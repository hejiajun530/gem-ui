<template>
  <div class="time-picker" v-clickOutSide="handleClickHide">
    <div class="time-picker-input" @click="handleClickShowOrHide">
      <i class="iconfont icon-naozhong"></i>
      <input type="text" v-model="strTime" :placeholder="placeholder" disabled>
      <i class="iconfont icon-guanbi" v-show="strTime" @click.stop="handleClickClear"></i>
    </div>
    <div class="time-picker-container" v-show="timeFlag">
      <div class="time-picker-box">
        <div class="time-picker-box-item" v-for="(item, index) in timeList" :key="item.id">
          <div class="time-picker-box-item-top iconfont icon-arrow-up-bold" @click="handleClickJian(index)"></div>
          <div class="time-picker-box-item-mid" style="color: #888;">{{num = item.num > item.min ? item.num - 1 : ''}}</div>
          <div class="time-picker-box-item-mid">{{item.num}}</div>
          <div class="time-picker-box-item-mid" style="color: #888;">{{num = item.num < item.max ? item.num + 1 : ''}}</div>
          <div class="time-picker-box-item-bottom iconfont icon-arrow-down-bold" @click="handleClickAdd(index)"></div>
        </div>
      </div>
      <div class="time-picker-btn">
        <div @click="handleClickHide">取消</div>
        <div @click="handleClickChoose">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
import { clickOutSide } from '@/commons/directive.js';
export default {
  props: {
    placeholder: {
      type: String,
      default: '任意时间点...'
    }
  },
  directives: {
    clickOutSide
  },
  data() {
    return {
      timeFlag: false,
      strTime: '',
      timeList: [{
        min: 0,
        num: 12,
        max: 23
      }, {
        min: 0,
        num: 30,
        max: 59
      }, {
        min: 0,
        num: 30,
        max: 59
      }]
    }
  },
  created() {
    const self = this;
  },
  methods: {
    // 显示或隐藏
    handleClickShowOrHide() {
      const self = this;
      self.timeFlag = !self.timeFlag;
    },
    // 隐藏
    handleClickHide() {
      const self = this;
      self.timeFlag = false;
    },
    // 减
    handleClickJian(index) {
      const self = this;
      self.timeList[index].num--;
      self.timeList[index].num = self.timeList[index].num < 0 ? self.timeList[index].max : self.timeList[index].num;
    },
    // 加
    handleClickAdd(index) {
      const self = this;
      self.timeList[index].num++;
      self.timeList[index].num = self.timeList[index].num > self.timeList[index].max ? 0 : self.timeList[index].num;
    },
    // 确认
    handleClickChoose() {
      const self = this;
      self.strTime = '';
      self.timeList.map((item, index) => {
        let time = index ? ':' + item.num : item.num;
        self.strTime += time;
        // console.log(self.strTime, index);
      })
      self.$emit('input', self.strTime);
    },
    // 清空
    handleClickClear() {
      const self = this;
      self.strTime = '';
      self.$emit('input', self.strTime);
    }
  }
}
</script>

<style scoped>
.time-picker {
  position: relative;
  width: 250px;
  height: 35px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
}
.time-picker-input {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.time-picker-input i {
  margin: 0 5px;
}
.time-picker-input input {
  flex: 1;
  padding: 0 0 0 5px;
  border: none;
  outline: none;
  box-sizing: border-box;
}
.time-picker-container {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0, 100%);
  width: 100%;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 999;
}
.time-picker-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
}
.time-picker-box-item-mid {
  height: 26px;
  line-height: 26px;
}
.time-picker-box-item-top,
.time-picker-box-item-bottom {
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.time-picker-btn {
  width: 100%;
  padding: 5px 10px;
  border-top: 1px solid #cccccc;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
}
.time-picker-btn div {
  padding: 5px 10px;
  cursor: pointer;
}
.time-picker-btn div:last-child {
  color: aqua;
}
</style>