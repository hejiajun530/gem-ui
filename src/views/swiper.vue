<template>
  <div class="swiper">
      <g-swiper
        :imglist="swiperAnimaImg"
        duration="5000"
      ></g-swiper>
  </div>
</template>

<script>
import swiper from '@/components/swiper/index';
export default {
  components: {
    'g-swiper': swiper
  },
  data () {
    return {
      swiperAnimaImg: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style scoped>
.swiper {
  position: relative;
  width: 500px;
  height: 350px;
}
</style>