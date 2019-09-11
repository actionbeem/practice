<template>
  <div>
    {{ this.$store.getters.count }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

export default class Count extends Vue {

}
</script>

<style scoped>

</style>