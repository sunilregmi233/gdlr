<template >
    <div class="row flex ">
        <div class="col text-white q-ma-xl q-pa-xl" >
            <h6>Address: Dharan-7, Sunsari.</h6>
            
        </div>
        <div class="col q-ma-xl">
            <div class=" flex q-mt- text-center justify-center">
                <div class="q-pa-lg text-white" style="width: 600px; box-shadow: 0px 0px 10px 0px black">    
                <h5 class="text-bold q-gutter-sm text-center  q-pb-md">Reach me Out</h5>
                    <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-sm"
                        >
                        
                        <q-input
                            filled
                            v-model="name"
                            label="Your Email Address"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />

                        <q-input
                            filled
                            type="number"
                            v-model="age"
                            label="Contact number"
                            lazy-rules
                            :rules="[
                            val => val !== null && val !== '' || 'Please type contact number',
                            ]"
                        />
                        <q-input
                            v-model="text"
                            filled
                            type="textarea"
                            label="Type a message"

                        />

                        <q-toggle v-model="accept" label="I accept the license and terms" />

                        <div >
                            <q-btn label="Submit" type="submit" color="primary"/>
                            <q-btn label="Reset" type="reset" color="white" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>
            </div>
            
        </div>
        
    </div>
    <div class=" text-center bg-info text-white ">
        <h7>Copyright @Sunil Regmi</h7>
    </div>
</template>

<style lang="scss" scoped>
h6:hover {
  text-decoration: underline;
  transform: scale(1.05);
}


</style>

<script>
import {  ref } from 'vue'


export default  {
  setup () {
    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)
    function onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    return {
      name,
      age,
      accept,
      } 
    }
}
</script>