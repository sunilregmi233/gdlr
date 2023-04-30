<template>
<q-layout view="hHh Lpr lFF" >
  <div class="relative-position ">
  <q-header elevated class="transparent  header">
    <div :class="visibleClass" class="flex"> 
    <q-responsive :ratio="4/3" class="col" style="max-height: 12vh">
      <q-toolbar class="nav">
        <q-avatar class="logo-img" to="/">
          <img 
          v-scroll-fire="bounceImage" 
          src="/images/logo-black.png"
          class="q-ml-lg"
          >
        </q-avatar>
        <q-space />
        <q-tabs v-model="tab" shrink stretch class="q-ma-lg ">
          <q-route-tab name="tab1" label="About" @click="scrollToElement('id_about');" />
          <q-route-tab name="tab2" label="Servicess" @click="scrollToServices('id_services');" />
          <q-route-tab name="tab2" label="Projects" to="/projects" />
          <q-route-tab name="tab2" label="Team" to="/Team" />
          <q-route-tab name="tab4" label="BLOG" to="/blog" />
          <q-route-tab name="tab3" label="CONTACT" @click="scrollToElement('footer');" />
        </q-tabs>
      </q-toolbar>
      </q-responsive>
    </div>
  </q-header>
 </div>
  <div class="example-area  scroll">
   <div class="input-wrapper text-black">
      <p>Hello, I am <span class="time-of-day"></span>!</p>
      <p>This website is under <br><span class="time-of-day1"></span>!</p>
      <span class="placeholder"></span>
    </div>
      <div class="swiper-card">
      <BaseSwiperCard/>
      </div>
      
    <div class="example-filler" >
      <div v-intersection="onIntersection"/>
    </div>
    
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#a2d9ff" fill-opacity="1" d="M0,192L11.4,165.3C22.9,139,46,85,69,85.3C91.4,85,114,139,137,144C160,149,183,107,206,74.7C228.6,43,251,21,274,53.3C297.1,85,320,171,343,170.7C365.7,171,389,85,411,85.3C434.3,85,457,171,480,186.7C502.9,203,526,149,549,160C571.4,171,594,245,617,261.3C640,277,663,235,686,229.3C708.6,224,731,256,754,229.3C777.1,203,800,117,823,96C845.7,75,869,117,891,160C914.3,203,937,245,960,250.7C982.9,256,1006,224,1029,192C1051.4,160,1074,128,1097,122.7C1120,117,1143,139,1166,138.7C1188.6,139,1211,117,1234,112C1257.1,107,1280,117,1303,149.3C1325.7,181,1349,235,1371,229.3C1394.3,224,1417,160,1429,128L1440,96L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#a2d9ff" fill-opacity="1" d="M0,192L11.4,165.3C22.9,139,46,85,69,85.3C91.4,85,114,139,137,144C160,149,183,107,206,74.7C228.6,43,251,21,274,53.3C297.1,85,320,171,343,170.7C365.7,171,389,85,411,85.3C434.3,85,457,171,480,186.7C502.9,203,526,149,549,160C571.4,171,594,245,617,261.3C640,277,663,235,686,229.3C708.6,224,731,256,754,229.3C777.1,203,800,117,823,96C845.7,75,869,117,891,160C914.3,203,937,245,960,250.7C982.9,256,1006,224,1029,192C1051.4,160,1074,128,1097,122.7C1120,117,1143,139,1166,138.7C1188.6,139,1211,117,1234,112C1257.1,107,1280,117,1303,149.3C1325.7,181,1349,235,1371,229.3C1394.3,224,1417,160,1429,128L1440,96L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
</svg>

  <About id="id_about"/>
  
  <div class="para">
    <q-card class=""
    >
      <q-parallax
        src="public/images/DALL·E 2023-04-05 15.30.23.png"
        :height="300"
      >
      <q-card-section class="card-section text-white bg-info" 
        style="left:-39.5rem; position:relative;">
        <div class="text-h3  text-weight-bold" >Suscribe for newsletter</div>
        <q-btn color="green">
        <q-icon left size="3em" name="map" />
        <div>Label</div>
      </q-btn>
      </q-card-section>
      </q-parallax>
    </q-card>
  </div>
  <div id="id_services" class="services">
  
    <div id="id_services"><BaseCard> </BaseCard></div>
  </div>
  <hr>
  
  <div class="caro-card">
    <BaseCaro/>
  </div>
  <div id="footer" class="footer">
    <BaseFooter/>
  </div>

</q-layout>
</template>

<script>
import { ref, computed } from 'vue'
import { scroll } from 'quasar'

const { getScrollTarget, setVerticalScrollPosition,  } = scroll


export default {
  name: 'GDLayout',
  setup () {
    const visible = ref(false)
    function scrollToElement (id) {
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - 100
      const duration = 1000
      setVerticalScrollPosition(target, offset, duration)
    }
    function scrollToServices (id) {
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - 200
      const duration = 1000
      setVerticalScrollPosition(target, offset, duration)
    }

    return {
      visible,
      bounceImage (el) {
        el.classList.add('animate-bounce')
        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-bounce')
          }
        }, 2000)
      },
      scrollToElement,
      scrollToServices,
      visibleClass: computed(
        () => `
          bg-${visible.value ? 'white' : 'secondary'}
          text-${visible.value ? 'black' : 'black'}
          text-weight-${visible.value ? 'bolder' : 'bolder'}
          `
      ),
      onIntersection (entry) {
        visible.value = entry.isIntersecting
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../css/typed';
@import '../css/media';
.time-of-day {
	padding: 0 0 0 3px;
  background: rgb(42,2,23);
  background: linear-gradient(90deg, rgba(42,2,23,1) 0%, rgba(122,163,171,1) 99%);
	&::before { font-weight: 600; }
	@include typed(
		" Sunil Regmi",
		1,
		(caret-width: 2px, caret-space: 2px)
	);
}
.time-of-day1 {
	padding: 0 0 0 3px;
  background: rgb(42,2,23);
  background: linear-gradient(90deg, rgba(42,2,23,1) 0%, rgba(122,163,171,1) 99%);
	&::before { font-weight: 600; }
	@include typed(
		"DEVELOPMENT",
		1,
		(caret-width: 2px, caret-space: 2px)
	);
}
.input-wrapper {
  top: 16rem;
  margin: 0px 0px 0px 100px;
  position: absolute;
  display: block;
  font-family: monospace;
  font-size: 3rem;
  width: 50%;
}

.about {
  background: rgb(255, 255, 255);
  margin: -55px 50px 20px 50px;
  height: 100vh;

}
.services {
  position: relative;
  top: 10rem;
  height: 100vh;
}

.caro-card {
  height: 100vh;
  margin: 30px 30px 30px 30px ;
}
.logo-img {
  height: 80px;
  width: 130px;
}
.example-area {
  background-size: cover;
  background-position: center;
}

.para {
  position: relative;
  z-index: -1;
  height: 20vh;
  margin: 30px 0px 0px 0px;

}
.animate-bounce{
  animation: q-bounce 1s linear 
}
@keyframes q-bounce { 
  0% {
    transform: rotate3d(0, 0, 1, 0deg)}
  100% {
    transform: rotate3d(0, 0, 1, 360deg)}
}
</style>
