<template>
  <div class="tab">
    <g-tab v-model="activeName" :tablist="tablist" label="title">
      <g-tabpane title="菜单管理" name="first">菜单管理内容</g-tabpane>
      <g-tabpane title="用户管理" name="secod">用户管理内容</g-tabpane>
      <g-tabpane title="配置管理" name="three">配置管理内容</g-tabpane>
    </g-tab>
  </div>
</template>

<script>
import tab from '@/components/tab/index';
import tabpane from '@/components/tab/tabpane';
export default {
  components: {
    'g-tab': tab,
    'g-tabpane': tabpane
  },
  data () {
    return {
      activeName: 'first',
      tablist: [{
        title: '菜单管理',
        name: 'first'
      }, {
        title: '用户管理',
        name: 'secod'
      }, {
        title: '配置管理',
        name: 'three'
      }]
    }
  }
}
</script>

<style>

</style>