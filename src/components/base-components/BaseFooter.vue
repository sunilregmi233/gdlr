<template>
    <div class="footer">
      <div class="footer-content q-pa-md text-white">
        <div class=footer-image>
        <!-- <q-img
          src="/images/gd.jpg"
          style="height: 200px; width: 200px;"
        >
        
        </q-img> -->
        </div>
        <div class="footer flex justify-center text-h5 q-pa-lg">
          @ Copyright. Sunil Regmi
        
        <!-- <img
            v-scroll-fire="bounceImage"
            src="/images/GD Labs Logo Oct 1.png"
            style="height: 100px; width: 100px;"
        > -->
        </div>
    </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default  {
  name: 'BaseFooter',
  data () {
    return {
      // Your data here
    }
  },
  setup () {
    
    return {
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
}
</script>

<style lang="sass" scoped>
.footer-image
  left: -20rem
.footer 
  background: linear-gradient(90deg, rgba(42,2,23,1) 0%, rgba(122,163,171,1) 99%)


  



.animate-bounce
  animation: q-bounce 2s infinite

@keyframes q-bounce
  0%, 20%, 50%, 80%, 100%
    transform: translateY(0)
  40%
    transform: translateY(-30px)
  60%
    transform: translateY(-15px)

</style>