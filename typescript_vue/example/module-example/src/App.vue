<template>
  <div id="app">
    {{ $store.state }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class App extends Vue {
  created(){
    console.log(this.$store);
    this.$store.dispatch('moduleA/setRootData','test')
  }
}
</script>


