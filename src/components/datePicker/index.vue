<template>
  <div class="time-picker" v-clickOutSide="handleClickHide">
    <div class="time-picker-input" @click="handleClickShowOrHide">
      <i class="iconfont icon-rili"></i>
      <input type="text" v-model="strTime" :placeholder="placeholder" disabled>
      <i class="iconfont icon-guanbi" v-show="strTime" @click.stop="handleClickClear"></i>
    </div>
    <div class="time-picker-container" v-show="timeFlag">
      <div class="time-picker-box">
        <!-- 日历 -->
        <div id="calendar">
          <!-- 标题 -->
          <div class="calendar-arrow flex-around-center">
            <div
              class="calendar-left"
              @click="changeMonth('pre')"
            > ❮ </div>
            <div class="calendar-ym">{{currentYear}}年{{currentMonth}}月</div>
            <div
              class="calendar-now"
              @click="changeMonth('today')"
            >本月</div>
            <div
              class="calendar-right"
              @click="changeMonth('next')"
            > ❯ </div>
          </div>
          <!-- 月日星期 -->
          <div class="calendar-list">
            <!-- 星期行 -->
            <ul class="calendar-weekdays flex-around-center">
              <li
                v-for='(val,key) in weeks'
                :key="key"
              >
                <span>{{val}}</span>
              </li>
            </ul>
            <!-- 日期 -->
            <ul class="calendar-days flex-around-center">
              <li
                v-for='(item,index) in daylist'
                :key="index"
                class="flex-around-center"
              >
                <div
                  class="calendar-days-list flex-column-around-center"
                  v-for="(val, key) in item"
                  :key="key"
                  @click="handleClickTime(val, key)"
                  :class="chooseClass(val.day)"
                >
                  <h4 v-if="val">
                    {{val.day.getDate() | twoNumber}}
                  </h4>
                  <!-- <template v-if="!oneSelect">
                    <h4 v-if="chooseClass(val.day) == 'active'">入住</h4>
                    <h4 v-else-if="chooseClass(val.day) == 'tuifang'">离店</h4>
                  </template> -->
                </div>
              </li>
            </ul>
          </div>
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
      default: '任意日期'
    }
  },
  directives: {
    clickOutSide
  },
  data() {
    return {
      timeFlag: false,
      // 日历
      showWeeks: ["日", "一", "二", "三", "四", "五", "六"],
      weeks: ["一", "二", "三", "四", "五", "六", "日"],
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      daylist: [],
      showOtherMonth: true,
      firstClickTimeFlag: true,
      startTime: "",
      endTime: "",
      strTime: ''
    }
  },
  filters: {
    twoNumber(param) {
      if (param.toString().length < 2) {
        return "0" + param;
      } else {
        return param;
      }
    }
  },
  created() {
    const self = this;
    self.handleDefaultTime();
    self.init();
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
    // 确认
    handleClickChoose() {
      const self = this;
      self.strTime = '';
      let d = new Date(self.startTime);
      self.strTime = self.formDate(d.getFullYear(), d.getMonth() + 1, d.getDate());
      self.$emit('input', self.strTime);
    },
    // 清空
    handleClickClear() {
      const self = this;
      self.strTime = '';
      self.$emit('input', self.strTime);
    },
    // 日历---------------------------------------------------------------
    // 获取本月所有日期
    init(data) {
      let day;

      if (data) {
        day = new Date(data);
      } else {
        let now = new Date();
        day = new Date(this.formDate(now.getFullYear(), now.getMonth() + 1, 1));
      }

      // 初始化年月日星期
      this.currentDay = day.getDate();
      this.currentMonth = day.getMonth() + 1;
      this.currentYear = day.getFullYear();
      this.currentWeek = day.getDay();

      if (!this.currentWeek) {
        this.currentWeek = 7;
      }

      // 清空数组，重新赋值
      this.daylist.length = 0;
      let strDate = this.formDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );

      // 是否显示其他月份的日期
      if (this.showOtherMonth) {
        // 判断本月第一天在星期几，在数组前加几个空值
        let d = new Date(strDate);
        if (d.getDay() >= 6 || d.getDay() == 0) {
          console.log(d.getDay());
          for (let i = 2 - this.currentWeek; i < 44 - this.currentWeek; i++) {
            let d = new Date(strDate);
            d.setDate(i);
            this.daylist.push({
              day: d,
              week: d.getDay()
            });
          }
          let list = [];
          let sublist = [];
          this.daylist.map((item, index) => {
            sublist.push(item);
            if ((index + 1) % 7 == 0) {
              // console.log(item);
              list.push(sublist);
              sublist = [];
            }
          });
          this.daylist = list;
        } else {
          // console.log(d.getDay());
          for (let i = 2 - this.currentWeek; i < 37 - this.currentWeek; i++) {
            let d = new Date(strDate);
            d.setDate(i);
            this.daylist.push({
              day: d,
              week: d.getDay()
            });
          }
          // console.log(this.daylist);
          let list = [];
          let sublist = [];
          this.daylist.map((item, index) => {
            sublist.push(item);
            if ((index + 1) % 7 == 0) {
              // console.log(item);
              list.push(sublist);
              sublist = [];
            }
          });
          this.daylist = list;
          // console.log(this.daylist);
        }
      } else {
        // 判断本月第一天在星期几，在数组前加几个空值
        let d = new Date(strDate);
        let maxDay = this.mGetDate(this.currentYear, this.currentMonth);
        // console.log(d.getDay(), "before");
        let curDay = d.getDay() == 0 ? 7 : d.getDay(); // 星期天改0为7
        for (let z = 1; z < curDay; z++) {
          this.daylist.push(null);
        }
        // 添加本月的日期
        for (let i = 1; i <= maxDay; i++) {
          let d = new Date(strDate);
          d.setDate(i);
          this.daylist.push({
            day: d,
            week: d.getDay()
          });
        }
        // 判断本月最后一天在星期几，把空余的空间加上值
        let lastDay = this.daylist[this.daylist.length - 1].week;
        lastDay = lastDay == 0 ? 7 : lastDay; // 星期天改0为7
        for (let z = 1; z <= 7 - lastDay; z++) {
          this.daylist.push(null);
        }
        let list = [];
        let sublist = [];
        this.daylist.map((item, index) => {
          sublist.push(item);
          if ((index + 1) % 7 == 0) {
            // console.log(item);
            list.push(sublist);
            sublist = [];
          }
        });
        this.daylist = list;
        // 把空余的空间加上值
        // if (this.daylist.length <= 28) {
        //   console.log(this.daylist.length);
        //   for (let i = this.daylist.length; i < 28; i++) {
        //     this.daylist.push(null);
        //   }
        // } else if (this.daylist.length <= 35) {
        //   console.log(this.daylist.length);
        //   for (let i = this.daylist.length; i < 35; i++) {
        //     this.daylist.push(null);
        //   }
        // } else if (this.daylist.length < 42) {
        //   console.log(this.daylist.length);
        //   for (let i = this.daylist.length; i < 42; i++) {
        //     this.daylist.push(null);
        //   }
        // }
      }
    },
    chooseClass(day) {
      // console.log(day);
      // console.log(this.dateDiff(new Date(), day).Today)
      // 不是本月的
      if (day.getMonth() + 1 != this.currentMonth) {
        return "other";
      }
      // 选择的日期
      else if (this.dateDiff(this.startTime, day).Today) {
        return "active"
      }
      // 今天
      else if (this.dateDiff(new Date(), day).Today) {
        return "today"
      }
    },
    //切换月份
    changeMonth(a) {
      let d = new Date(this.formDate(this.currentYear, this.currentMonth, 1));

      if (a === "today") {
        this.init(
          this.formDate(new Date().getFullYear(), new Date().getMonth() + 1, 1)
        );
        return false;
      }
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(n) 参数n为 上月最后一天的前后n天
      a === "pre" ? d.setDate(0) : d.setDate(35);

      this.init(this.formDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 点击切换月份
    handleClickMonth(d) {
      const self = this;
      let date = new Date(d);
      // console.log(date, date.getFullYear(), date.getMonth() + 1)
      self.init(self.formDate(date.getFullYear(), date.getMonth() + 1, 1));
    },
    //返回字符串个格式的日期
    formDate(year, month, day) {
      return year + "-" + month + "-" + day;
    },
    // 获取本月有多少天数
    mGetDate(year, month) {
      var d = new Date(year, month, 0);
      return d.getDate();
    },
    // 选择日期
    handleClickTime(val, index) {
      var _self = this;
      _self.handleClickMonth(val.day);
      _self.startTime = val.day;
      _self.$emit("g-riliStartTime", _self.startTime, _self.endTime);
    },
    // 初始时间
    handleDefaultTime(flag) {
      var _self = this;
      let date = new Date(flag);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      // let currentEndDay = this.AddDay(date, 1);
      // currentEndDay =
      //   currentEndDay < 10 ? "0" + currentEndDay : currentEndDay;
      return y + "-" + m + "-" + d;
    },
    // 计算时间差
    dateDiff(startDate, EndDate) {
      var dateStart = new Date(startDate);
      var dateEnd = new Date(EndDate);
      var Value;
      return (Value = {
        day: parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24)),
        Hours: parseInt((dateEnd - dateStart) / (1000 * 60 * 60)),
        Minutes: parseInt((dateEnd - dateStart) / (1000 * 60)),
        Seconds: parseInt((dateEnd - dateStart) / 1000),
        Today:
          dateStart.getDate() == dateEnd.getDate() &&
          dateStart.getMonth() == dateEnd.getMonth() &&
          dateStart.getFullYear() == dateEnd.getFullYear()
      });
    },
    // 增加一天
    AddDay(time, num) {
      var date = new Date(time);
      date = date.setDate(date.getDate() + num);
      return new Date(date);
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


/* 日历 */
ul {
  list-style-type: none;
}
.flex-around-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex-column-around-center {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#calendar {
  position: relative;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0;
  overflow: hidden;
  background-color: #f5f5f5;
}

.calendar-arrow {
  position: relative;
  width: 100%;
  height: 40px;
  font-size: 18px;
}

.calendar-left,
.calendar-right {
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}
.calendar-now {
  position: absolute;
  top: 50%;
  right: 18%;
  transform: translate(0, -50%);
  font-size: 12px;
  cursor: pointer;
}
.calendar-weekdays {
  width: 100%;
  height: 35px;
  font-size: 16px;
  background-color: #e6f8fa;
  border-radius: 50px;
}

.calendar-weekdays li {
  display: inline-block;
  width: 13.6%;
  text-align: center;
}

.calendar-list {
  height: 88%;
}

.calendar-days {
  display: inline-block;
  padding: 0;
  background: #ffffff;
  margin: 0;
  width: 100%;
  height: 90%;
  font-size: 12px;
  border-radius: 15px;
}

.calendar-days li {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s;
}
.calendar-days-li-item-one {
  position: relative;
  height: 100%;
  cursor: pointer;
}
.calendar-days-list {
  flex: 1;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
}
.calendar-days-list:hover {
  color: #62aba0;
  background-color: #e6f8fa;
}
.calendar-days-li-item-one h4:nth-child(2) {
  font-size: 10px;
}

/* 不是本月的日期 */
.calendar-days li .calendar-days-list.other {
  color: #ccc;
}
/* 今天 */
.calendar-days li .calendar-days-list.today {
  background-color: #c5f1eb;
  color: #62aba0;
}

/* 选择的日期 */
.calendar-days li .calendar-days-list.active,
.calendar-days li .calendar-days-list.tuifang {
  background-color: #62aba0 !important;
  color: #ffffff !important;
}
.calendar-days li .calendar-days-list.activeColor {
  background-color: #e6f8fa;
  color: #62aba0;
}

/* 今日之前的日期 */
.calendar-days li .calendar-days-list.hui {
  color: #ccc;
}
</style>