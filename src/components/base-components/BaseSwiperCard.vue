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
    <swiper-slide>My Expertise on ...</swiper-slide>
    <swiper-slide>Cross-platform <br> Development</swiper-slide>
    <swiper-slide>ML and AI <br> Applications</swiper-slide>
    <swiper-slide>IT Project <br> Management</swiper-slide>
    <swiper-slide>Agile Methodologies</swiper-slide>
    <swiper-slide>DevOps </swiper-slide>
    <swiper-slide>I am currently <br>a Lecturer at <br> Kathmandu <br> University.</swiper-slide>
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
  left: 70%;
  top: 25%;
  width: 250px;
  height: 350px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
}

.swiper-slide:nth-child(1n) {
  background: $info;
}

.swiper-slide:nth-child(2n) {
  background: $info;
}

.swiper-slide:nth-child(3n) {
  background-color: $info;
}

.swiper-slide:nth-child(4n) {
  background-color: $info;
}

.swiper-slide:nth-child(5n) {
  background-color: $info;
}

.swiper-slide:nth-child(6n) {
  background-color: $info;
}

.swiper-slide:nth-child(7n) {
  background-color: $info;
}

.swiper-slide:nth-child(8n) {
  background-color: $info;
}

.swiper-slide:nth-child(9n) {
  background-color: $info;
}

.swiper-slide:nth-child(10n) {
  background-color: $info;
}

</style>
