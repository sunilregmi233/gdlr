<template >
    <div class="projects">
        <div class="q-pa-xl pro" style="width: 500px; border: 2px solid black">    
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
                >
                <q-input
                    filled
                    v-model="name"
                    label="Your name *"
                    hint="Name and surname"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                 <q-input
                    filled
                    v-model="name"
                    label="Your Email *"
                    hint="Email Address"
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

                <q-toggle v-model="accept" label="I accept the license and terms" />

                <div >
                    <q-btn label="Submit" type="submit" color="primary"/>
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>
        </div>
    </div>
</template>

<style lang="scss">
.projects {
    background: rgb(242, 246, 243);
    justify-content: center;
}
.pro {
    top: 20%;
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