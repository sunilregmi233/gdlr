<template>
  <swiper
    :effect="'cards'"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-cards';


  // import required modules
  import { Autoplay, EffectCards } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, EffectCards],
      };
    },
  };
</script>

<style lang="scss" scoped>

.swiper {
  position: absolute;
  left: 80rem;
  top: 15rem;
  width: 400px;
  height: 500px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background: rgb(42,2,23);
  background: linear-gradient(90deg, rgba(42,2,23,0.8939950980392157) 0%, rgba(68,230,217,1) 99%);
}

.swiper-slide:nth-child(2n) {
  background-color: #fff
}

.swiper-slide:nth-child(3n) {
  background-color: #fff
}

.swiper-slide:nth-child(4n) {
  background-color: #fff
}

.swiper-slide:nth-child(5n) {
  background-color: #fff
}

.swiper-slide:nth-child(6n) {
  background-color: #fff
}

.swiper-slide:nth-child(7n) {
  background-color: #fff
}

.swiper-slide:nth-child(8n) {
  background-color: #fff
}

.swiper-slide:nth-child(9n) {
  background-color: #fff
}

.swiper-slide:nth-child(10n) {
  background-color: #fff
}

</style>
