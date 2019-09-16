<template>
  <div>
    <div class="form-group">
      <input 
        type="text" 
        class="form-control"
        @keyup.enter="addItem" 
        placeholder="할일을 입력하세요">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ItemInput extends Vue {
  addItem(){
    
  }
}
</script>

<style scoped>

</style>