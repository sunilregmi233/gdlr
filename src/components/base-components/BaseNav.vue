<template>
    <q-toolbar class="">
      <q-avatar class="logo-img">
        <img 
        v-scroll-fire="bounceImage" 
        src="/images/GD Labs Logo Oct 1.png"
        class="q-ml-lg"
        >
      </q-avatar>
        <q-btn flat label="GDLS" class="text-h6 text-weight-bold" to="/" />
        <q-space />
        <q-tabs v-model="tab" shrink stretch class="q-ma-lg flex text-bold">
          <q-route-tab name="tab1" label="About" @click="scrollToElement('id_about_us');"  />
          <q-route-tab name="tab2" label="Servicess" to="/services" />
          <q-route-tab name="tab2" label="Projects" to="/projects" />
          <q-route-tab name="tab2" label="Team" to="/Team" />
          <q-route-tab name="tab4" label="BLOG" to="/blog" />
          <q-route-tab name="tab3" label="CONTACT" to="/contact" />
        </q-tabs>
    </q-toolbar>
    
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  name: "BaseNav",
  props: {
   
  },
  setup () {
    return {
      tab: ref(''),
      bounceImage (el) {
        el.classList.add('animate-bounce')
        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate-bounce')
          }
        }, 2000)
      } 
    }
  }
});
</script>

<style lang="sass" scoped>

.animate-bounce
  animation: q-bounce 1s linear 

@keyframes q-bounce 
  0% 
    transform: rotate3d(0, 0, 1, 0deg)
  100% 
    transform: rotate3d(0, 0, 1, 360deg)
  


</style>

