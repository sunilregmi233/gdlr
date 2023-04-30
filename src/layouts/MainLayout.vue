<template>
  <q-layout view="lHh Lpr lFf">
  <div class="header">
    <q-header elevated class=" text-white">
      <nav>
        <label class="logo">SureSoft</label>  
        <q-tabs v-model="tab" shrink stretch class="tabs ">
          <q-route-tab name="tab1" label="About" @click="scrollToElement('id_about');" />
          <q-route-tab name="tab2" label="Servicess" @click="scrollToElement('id_services');" />
          <q-route-tab name="tab2" label="Projects" @click="scrollToElement('id_projects'); " />
          <q-route-tab name="tab2" label="Team" to="/Team" />
          <q-route-tab name="tab4" label="BLOG" to="/blog" />
          <q-route-tab name="tab3" label="CONTACT" @click="scrollToElement('footer');" />
        </q-tabs>
        <div id="check">
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          </div>
      </nav> 
      
    </q-header>
    <q-drawer
        v-model="drawer"
        
        :width="200"
        :breakpoint="500"
        overlay
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
  </div>
   <div class="body1">
    <BaseSwiperCard/>
    <BaseFooter/>
    </div>
    <div class="body2" id="id_about">
      <div class="container2">
        <BaseCard/>
      </div>
    </div>
    <div class="body2" id="id_services">
      <div class="container2">
        <Services/>
      </div>
    </div>
    <div class="body2" id="id_projects">
      <div class="container2">
        <Projects/>
      </div>
    </div>
    <div class="body2" id="id_contact">
      <div class="container2">
      </div>
    </div>
   

   
  </q-layout>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { scroll } from 'quasar'

const { getScrollTarget, setVerticalScrollPosition,  } = scroll
const menuList = [
  {
    icon: 'inbox',
    label: 'About',
    separator: true
  },
  {
    icon: 'send',
    label: 'Services',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Projects',
    separator: false
  },
  {
    icon: 'error',
    label: 'Team',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Blog',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Contact',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
export default defineComponent({
  name: 'MainLayout',
  
  setup () {
    function scrollToElement (id) {
      let el = document.getElementById(id)
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      const duration = 1000
      setVerticalScrollPosition(target, offset, duration)
    }
    return {
      scrollToElement,
      menuList,
      drawer: ref(false),  
    }
  }
})
</script>

<style lang="scss" >
.main-body {
  background: rgb(255, 255, 255);
}
#check {
    display: none;
  }
.body1 {
  position: relative;
  height: 105vh;

}
.body2 {
  position: relative;
  //margin: 0 10vw;
  height: 100vh;


}
.container2 {
  position: relative;
  top: 20%;
  margin: 0 5% 0 5% ;
  height: 75vh;
}

@media only screen and (max-width: 952px) {
  #check {
    position: absolute;
    display: initial;
    left: 85%;
    padding: 20px;
  }
  .q-tabs {
    display: none;
  }
}
</style>