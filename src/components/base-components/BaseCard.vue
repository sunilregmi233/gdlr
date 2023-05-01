<template>
  <div class=" my-card1   items-start row q-gutter-lg">
    <div class="col caro-content">
      <q-card class="my-card no-box-shadow  text-black flex justify-between">
        <q-card-section>
          <div class="text-h4">My Skills</div>
          <div class="text-h6">by John Doe</div>
        </q-card-section>

        <q-card-section class="text-h4">
          {{ lorem }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn color="green">
            <q-icon left size="3em" name="map" />
            <div>Label</div>
          </q-btn>
            
        </q-card-actions>
      </q-card>
    </div>
    <div class="col">
      <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-9.jpg"
    /></swiper-slide>
  </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.caro-content{
  position: relative;
  
}
.swiper {
  width: 100%;
  height: 55vh;

}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  width: 50vh;
}
.caro-content{
  height: 650px;
  width: 100px;
} 
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, EffectCoverflow, Pagination],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  },
};
</script>