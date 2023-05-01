<template>
  <q-layout view="lHh Lpr lFf">
  <div class="header">
    <q-header elevated class=" text-white">
      <nav>
        <a href="#"><label class="logo text-white">SureSoft</label>  </a>
        <q-tabs v-model="tab" shrink stretch class="tabs ">
          <q-route-tab name="tab1" label="About" @click="scrollToElement('id_about');" />
          <q-route-tab name="tab2" label="Servicess" @click="scrollToElement('id_services');" />
          <q-route-tab name="tab2" label="Projects" @click="scrollToElement('id_projects'); " />
          <q-route-tab name="tab2" label="Team" to="/Team" />
          <q-route-tab name="tab4" label="BLOG" to="/blog" />
          <q-route-tab name="tab3" label="CONTACT" @click="scrollToElement('id_contact');" />
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
    <div class="body2" id="id_about" style="margin: 0 5%">
      <div class="container2">
        <BaseCard/>
      </div>
    </div>
    <div class="" id="id_projects">
      <div class="">
        <Projects/>
      </div>
    </div>
    <br>
    <br>
    <div class="body2" id="id_services">
      <div class="container2">
        <Services/>
      </div>
    </div>
    <div class="body3" id="id_contact">
      <div class="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#008e26" fill-opacity="1" d="M0,192L11.4,165.3C22.9,139,46,85,69,85.3C91.4,85,114,139,137,144C160,149,183,107,206,74.7C228.6,43,251,21,274,53.3C297.1,85,320,171,343,170.7C365.7,171,389,85,411,85.3C434.3,85,457,171,480,186.7C502.9,203,526,149,549,160C571.4,171,594,245,617,261.3C640,277,663,235,686,229.3C708.6,224,731,256,754,229.3C777.1,203,800,117,823,96C845.7,75,869,117,891,160C914.3,203,937,245,960,250.7C982.9,256,1006,224,1029,192C1051.4,160,1074,128,1097,122.7C1120,117,1143,139,1166,138.7C1188.6,139,1211,117,1234,112C1257.1,107,1280,117,1303,149.3C1325.7,181,1349,235,1371,229.3C1394.3,224,1417,160,1429,128L1440,96L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path>
        </svg>
      </div>
      <div class="container3" style="background: #008e26">
        <Contact/>
        
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
      const offset = el.offsetTop - 100
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
.leg{ 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.main-body {
  background: rgb(255, 255, 255);
}
.svg {
  position: relative;
  top: 10px;
}
#check {
    display: none;
  }
.body1 {
  position: relative;
  height: 100vh;

}
.body2 {
  position: relative;
  height: 70vh;

}

.container2 {
  position: relative;
  height: 70vh;
  background: white;



}
.body3 {
  position: relative;
  background-image: url("/images/star.gif");
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