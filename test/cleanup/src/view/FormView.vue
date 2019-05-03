<template>
  <div class="input-form">
    <!-- <div class="question" v-for="item in dummyData" :key="item.itemId">
      <h2 class="tit">{{ item.title }}</h2>
    </div> -->
    <component :is="whichForm"></component>
    <button @click="nextForm">next</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      currentIndex: 0,
    }
  },
  components: {
    FormRadio: () => import('../components/FormRadio.vue'),
    FormSelect: () => import('../components/FormSelect.vue'),
    FormTextarea: () => import('../components/FormTextarea.vue'),
  },
  computed: {
    ...mapState(['dummyData']),

    whichForm(){
      switch(this.currentIndex){
        case 0 :
          return 'FormRadio'
        case 1 :
          return 'FormSelect'
        case 2 :
          return 'FormTextarea'
      }
    }
  },
  methods: {
    nextForm(){
      this.currentIndex++
    },

  },
}
</script>

<style scoped>
.input-form { width:500px; padding:15px; background-color:#fff; margin:100px auto; box-shadow:0 0 20px rgba(0,0,0,0.1);}
.question .tit { font-size:18px; font-weight:normal; }
</style>
