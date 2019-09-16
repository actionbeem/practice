<template>
  <div id="app">
    <app-header/>
    <item-input/>
    <item></item>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import appHeader from '@/components/header.vue';
import itemInput from '@/components/item-input.vue';
import item from '@/components/item.vue'

@Component({
  components: {
    appHeader,
    itemInput,
    item
  }
})
export default class App extends Vue {

}

</script>

<style>
#app { padding:100px;}
</style>
