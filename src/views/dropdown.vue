<template>
  <div class="dropdown">
    <g-dropdown>
      更多菜单 <i class="iconfont icon-arrow-down-bold"></i>
      <div class="dropdown-list" slot="down">
        <g-dropdownItem v-for="item in dropdownList" :key="item">{{item}}</g-dropdownItem>
      </div>
    </g-dropdown>
    <g-dropdown>
      图片
      <div class="dropdown-list" slot="down">
        <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2010511923,177251819&fm=26&gp=0.jpg" style="width: 100%">
      </div>
    </g-dropdown>
  </div>
</template>

<script>
import dropdown from '@/components/dropdown/index';
import dropdownItem from '@/components/dropdown/downItem';
export default {
  components: {
    'g-dropdown': dropdown,
    'g-dropdownItem': dropdownItem
  },
  data () {
    return {
      dropdownList: ['菜单11111', '菜单22222', '菜单33333', '菜单44444', '菜单55555', '菜单66666']
    }
  }
}
</script>

<style scoped>

</style>