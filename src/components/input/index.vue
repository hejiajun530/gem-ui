<template>
  <div class="input1">
    <div class="input-box" :class="{'rever': rever, 'input-disabled': disabled}">
      <input :type="typeStr" v-model="value" :placeholder="placeholder" :disabled="disabled" :class="{'input-disabled': disabled}" @input="handleInput">
      <i class="iconfont " :class="iconStr" @click="handleClickIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'input1',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rever: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  data () {
    return {
      value: '',
      typeStr: '',
      iconStr: ''
    }
  },
  created () {
    const self = this;
    self.typeStr = self.type;
    self.type == 'password' ? self.iconStr = 'icon-xianshi' : self.iconStr = self.icon;
  },
  methods: {
    handleClickIcon(e) {
      const self = this;
      // console.log(e)
      // console.log(e.target.className.indexOf('icon-guanbi'))
      if (e.target.className.indexOf('icon-guanbi') != -1) {
        self.value = '';
        self.$emit('input', '')
      } else if (e.target.className.indexOf('icon-xianshi') != -1) {
        self.typeStr = 'text';
        self.iconStr = 'icon-yincang';
      } else if (e.target.className.indexOf('icon-yincang') != -1) {
        self.typeStr = 'password';
        self.iconStr = 'icon-xianshi';
      }
    },
    handleInput() {
      const self = this;
      self.$emit('input', self.value)
    }
  }
}
</script>

<style scoped>
.input-box {
  height: 35px;
  min-width: 200px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}
.input-box.rever {
  flex-direction: row-reverse;
}
.input-disabled {
  cursor: not-allowed;
}
.input-box input {
  flex: 1;
  height: 100%;
  padding: 0 0 0 5px;
  border: none;
  outline: none;
}
.input-box .iconfont {
  font-size: 18px;
  color: #888888;
  margin: 0 5px;
}
</style>
