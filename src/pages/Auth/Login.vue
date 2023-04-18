<template>
  <div class="img-bg">
    
    <div class="row-2 q-pa-lg ">
      <div class="row">
        <div class="col">
          <q-img 
            src="/images/Login.png">
          </q-img>
        </div>
        
        <div class="col bg-white" style="border-radius: 10%;">
          <div class="q-pa-xl text-h4 text-weight-bold flex justify-center">
            Login to post a Blog!!!
          </div>
          
          <div class="login flex justify-center">
              <div class="column q-gutter-md login-inner">
                <q-input filled  v-model="username" label="Username">
                  <template v-slot:append>
                    <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                  </template>
                </q-input>
                <q-input filled bottom-slots v-model="password" label="Password" >
                  <template v-slot:append>
                    <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                  </template>
                </q-input>
                <q-btn color="secondary" @click="login" label="Login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

import { userAuthStore } from '../../stores/auth/auth'


export default ({
  
  setup () {
    const userStore = userAuthStore();
    return { userStore }

  },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async login() {
     
      await this.userStore.login(this.username, this.password);
      console.log("Success")
      this.$router.push('/admin/dashboard')

    }
  },


  
})
</script>

<style lang="sass" scoped>
.img-bg
  position: relative
  background: $secondary

.q-img
  position: relative

.row-2
  height: 100vh

.login
  position: relative
  height: 500px
  top: 5rem
  padding: 20px 20px 20px 20px

.login-inner
  border: 3px solid
  width: 25vw
  height: 30vh
  padding: 20px 20px 20px 20px

</style>
