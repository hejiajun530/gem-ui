<template>
  <div class="pageing">
    <g-pageing :page-size="5" :total="52" @change="handleChange"></g-pageing>
  </div>
</template>

<script>
import pageing from '@/components/pageing/index';
export default {
  components: {
    'g-pageing': pageing
  },
  data(){
    return {
    }
  },
  methods: {
    handleChange(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>