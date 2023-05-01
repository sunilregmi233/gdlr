<template>
<div id="id_projects">
        <div class="row">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">My Projects
            <br>
            <span
                class="text-center text-grey text-h6">I believe in making a customer rather than a sale.</span>
            </h5>
        </div>
        </div> 
        <div class="">       
        <div class=" q-col-gutter-sm ">
            <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
              <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom text-h6">
                  Title
                  </div>
              </q-img>

              <q-card-section>
                  {{ lorem }}
              </q-card-section>
              </q-card>
          
          </swiper-slide>
          <swiper-slide>
              <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom text-h6">
                  Title
                  </div>
              </q-img>

              <q-card-section>
                  {{ lorem }}
              </q-card-section>
              </q-card>
          
          </swiper-slide><swiper-slide>
              <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom text-h6">
                  Title
                  </div>
              </q-img>

              <q-card-section>
                  {{ lorem }}
              </q-card-section>
              </q-card>
          
          </swiper-slide><swiper-slide>
              <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom text-h6">
                  Title
                  </div>
              </q-img>

              <q-card-section>
                  {{ lorem }}
              </q-card-section>
              </q-card>
          
          </swiper-slide>
          <swiper-slide>
              <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom text-h6">
                  Title
                  </div>
              </q-img>

              <q-card-section>
                  {{ lorem }}
              </q-card-section>
              </q-card>
          
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
                  
        </div>
        </div>          
    </div>
  
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';


  // import required modules
  import { Pagination } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque lorem massa, in auctor est egestas ac. Nullam finibus tortor sit amet laoreet iaculis.'
      }
    },
  };
</script>

<style lang="scss" scoped>

.q-card {
  width: 350px;
  border: 0;

}

.my-card:hover {
  transform: scale(1.05);
  box-shadow: 1px 1px 10px 1px;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: 500px;
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
