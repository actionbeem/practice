<template>
  <div>
    <component :is="whichVal"></component>
    <ul>
      <li><input type="radio" value="1" v-model="radioVal">01</li>
      <li><input type="radio" value="2" v-model="radioVal">02</li>
      <li><input type="radio" value="3" v-model="radioVal">03</li>
      <li><input type="radio" value="4" v-model="radioVal">04</li>
    </ul>
    <p>{{ radioVal }}</p>
  </div>
</template>

<script>
import CounselType from '../components/CounselType.vue';
import Family from '../components/Family.vue';
import CounselSubject from '../components/CounselSubject.vue';
import CounselTime from '../components/CounselTime.vue';

export default {
  components: { // 여기서 동적으로 로딩한다
    CounselType,
    Family,
    CounselSubject,
    CounselTime
    // CounselType: () => import('../components/CounselType.vue'),
    // Family: () => import('../components/Family.vue'),
    // CounselSubject: () => import('../components/CounselSubject.vue'),
    // CounselTime: () => import('../components/CounselTime.vue')
  },
  data () {
    return {
      active: 0,
      radioVal: null,
    }
  },
  methods: {

  },
  computed: {
    whichVal(){
      switch(this.radioVal){
        case 0 :
          return 'CounselType'
        case 1 :
          return 'Family'
        case 2 :
          return 'CounselSubject'
        case 3 :
          return 'CounselTime'
        default :
          return 'CounselType'
      }
    }
  },










  // computed: {
  //   whichStep () {
  //     switch (this.radioVal) {
  //       case 0:
  //         return 'CounselType'
  //       default:
  //         return 'CounselType'
  //     }
  //   }
  // }
}
</script>

<style>
</style>