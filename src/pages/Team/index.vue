<template>
  <div class="q-pa">
  <BaseNav class="nav">
   </BaseNav>
    <div class="row justify-center q-gutter-sm">
      <div
        v-for="index in inView.length"
        :key="index"
        :data-id="index - 1"
        class="example-item q-pa-sm flex flex-center relative-position"
        v-intersection="onIntersection"
      >
        <transition name="q-transition--scale">
          <q-card v-if="inView[index - 1]">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
              <div class="text-h6">Card #{{ index }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </transition>
      </div>
    </div>
    <BaseFooter/>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const inView = ref(Array.apply(null, Array(20)).map(_ => false))

    return {
      inView,
      onIntersection (entry) {
        const index = parseInt(entry.target.dataset.id, 10)
        setTimeout(() => {
          inView.value.splice(index, 1, entry.isIntersecting)
        }, 50)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.nav 
  background: rgb(1,2,20)
  background: linear-gradient(90deg, rgba(1,2,20,1) 0%, rgba(185,255,252,1) 99%)
.example-item
  height: 400px
  width: 400px
</style>
