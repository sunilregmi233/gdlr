<template>
<q-layout view="hHh Lpr lFF" >
  <div class="relative-position ">
  <q-header elevated class="transparent  header">
    <div :class="visibleClass" class="flex"> 
      <q-toolbar class="nav">
        <q-avatar class="logo-img">
          <img 
          v-scroll-fire="bounceImage" 
          src="/images/logo.png"
          class="q-ml-lg"
          to="/"
          >
        </q-avatar>
        <q-space />
        <q-tabs v-model="tab" shrink stretch class="q-ma-lg ">
          <q-route-tab name="tab1" label="About" @click="scrollToElement('id_about_us');" />
          <q-route-tab name="tab2" label="Servicess" @click="scrollToServices('id_services');" />
          <q-route-tab name="tab2" label="Projects" to="/projects" />
          <q-route-tab name="tab2" label="Team" to="/Team" />
          <q-route-tab name="tab4" label="BLOG" to="/blog" />
          <q-route-tab name="tab3" label="CONTACT" @click="scrollToElement('footer');" />
        </q-tabs>
      </q-toolbar>
    </div>
  </q-header>
  </div>
  <div class="example-area  scroll">
   <div class="input-wrapper text-white">
      <p>Hello, I am <span class="time-of-day"></span>!</p>
      <span class="placeholder"></span>
    </div>

    <BaseSwiperCard/>
    <div class="example-filler" >
      <div v-intersection="onIntersection"/>
    </div>
  </div>
  <div id="id_about_us" class="about">
    <About/>
  </div>
  <div class="para">
    <q-card class=""
    >
      <q-parallax
        src="/images/3.png"
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
      const offset = el.offsetTop 
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
          bg-${visible.value ? 'secondary' : 'secondary'}
          text-${visible.value ? 'black' : 'blue'}
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
.time-of-day {
	padding: 0 0 0 3px;
  background: rgb(42,2,23);
  background: linear-gradient(90deg, rgba(42,2,23,1) 0%, rgba(122,163,171,1) 99%);
	&::before { font-weight: 600; }
	@include typed(
		" Sunil Regmi",
		2,
		(caret-width: 2px, caret-space: 2px)
	);
}
.input-wrapper {
  top: 16rem;
  margin: 0px 0px 0px 100px;
  position: relative;
  display: block;
  font-family: monospace;
  font-size: 3rem;
  width: 50%;

  
}

.about {
  height: 100vh;
  position: relative;
  background: rgb(255, 255, 255);
  margin: -55px 50px 20px 50px

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
  height: 130px;
  width: 180px;
  
}

.example-area {
  position: relative;
  background: rgb(1,2,20);
  background: linear-gradient(90deg, rgba(1,2,20,1) 0%, rgba(185,255,252,1) 99%);
  background-size: cover;
  background-position: center;
  animation: color-change 100s linear infinite;
  animation-delay: 10s;

}

.example-area:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background-image: url('https://media.geeksforgeeks.org/wp-content/uploads/20200828184719/rain-300x300.png');
  animation: rain 1s linear infinite;
  opacity: 0;
}

.example-filler{
  max-height: 100%;
  height: 100vh;
}
.para {
  position: relative;
  z-index: -1;
  height: 20vh;
  margin: 30px 0px 0px 0px;

}

  /* just changing the position of image
of rain using keyframes*/
@keyframes rain {
  0% {
      background-position: 0 0;
      opacity: 1;
  }

  100% {
      background-position: 8% 80%;
      opacity: 1;
  }
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
