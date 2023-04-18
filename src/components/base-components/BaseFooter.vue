<template>
    <div class="footer  q-pa-md text-white">
        <div class=footer-image>
        <q-img
          src="/images/gd.jpg"
          style="height: 200px; width: 200px;"
        >
        
        </q-img>
        </div>
        <div class="footer text-h5 q-pa-lg">
          @ Copyright. Green Decision Labs and research
        
        <img
            v-scroll-fire="bounceImage"
            src="/images/GD Labs Logo Oct 1.png"
            style="height: 100px; width: 100px;"
        >
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
  background: rgb(2,0,36)
  height: 100vh - $nav-height
  display: flex
  align-items: center
  justify-content: center
  



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