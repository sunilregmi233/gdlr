<template>
    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fa fa-bars"></i>
        </label>
        <label class="logo">SureSoft</label>         
        <q-tabs v-model="tab" shrink stretch class="tabs ">
          <q-route-tab name="tab1" label="About" @click="scrollToElement('id_about');" />
          <q-route-tab name="tab2" label="Servicess" @click="scrollToServices('id_services');" />
          <q-route-tab name="tab2" label="Projects" to="/projects" />
          <q-route-tab name="tab2" label="Team" to="/Team" />
          <q-route-tab name="tab4" label="BLOG" to="/blog" />
          <q-route-tab name="tab3" label="CONTACT" @click="scrollToElement('footer');" />
        </q-tabs>
      </nav>   
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

<style lang="scss" >


</style>

