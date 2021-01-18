<template>
  <div class="upload">
    <g-upload @g-uploadList="handleClickUpload">
      <img :src="item" v-for="item in imglistBase" :key="item.id">
    </g-upload>
  </div>
</template>

<script>
import upload from '@/components/upload/index';
export default {
  components: {
    'g-upload': upload
  },
  data() {
    return {
      imglistBase: []
    }
  },
  methods: {
    handleClickUpload(formDatafile, imglistBase) {
      const self = this;
      console.log(formDatafile, imglistBase);
      self.imglistBase = imglistBase;
    }
  }
}
</script>

<style scoped>

</style>