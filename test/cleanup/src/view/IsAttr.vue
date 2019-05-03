<template>
    <div class="hola">   
        <div v-for="(data, index) in dummyData" :key="index">
            <component :is="data.type" :passData="data"></component>
        </div>
    </div>        
</template>

<script>
import TestRadioForm from '../components/TestRadioForm.vue'
import TestSelectForm from '../components/TestSelectForm.vue'

export default {
    data(){
      return {
        dummyData: [
          { 
            type: "TestRadioForm",
            title: "dressroom cleanup",
            radios: [
              "radio01",
              "radio02",
              "radio03"
            ],
          },
          { 
            type: "TestSelectForm",
            title: "window cleanup",
            options: [
              "aaaa",
              "bbbb",
              "cccc"
            ],
          },
        ]
      }
    },
    components: {
      TestRadioForm,
      TestSelectForm,
    },
}
</script>