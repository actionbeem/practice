<template>
  <div>
    <div :active="active" finish-status="success">
      <div title="Step 1">aa</div>
      <div title="Step 2">bb</div>
      <div title="Step 3">cc</div>
      <div title="Step 4">dd</div>
    </div>
    <component :is="whichStep"></component>
    <button style="margin-top: 12px;" @click="previous">Previous step</button>
    <button style="margin-top: 12px;" @click="next">Next step</button>
  </div>
</template>

<script>
export default {
  components: { // 여기서 동적으로 로딩한다
    'CounselType': () => import('../components/CounselType.vue'),
    'Family': () => import('../components/Family.vue'),
    'CounselSubject': () => import('../components/CounselSubject.vue'),
    'CounselTime': () => import('../components/CounselTime.vue')
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    previous() {
      if (this.active-- === 0) this.active = 2
    },
    next() {
      if (this.active++ > 2) this.active = 0
    }
  },
  computed: {
    whichStep () {
      switch (this.active) {
        case 0:
          return 'CounselType'
        case 1:
          return 'Family'
        case 2:
          return 'CounselSubject'
        case 3:
          return 'CounselTime'
        default:
          return 'CounselType'
      }
    }
  }
}
</script>

<style>
</style>