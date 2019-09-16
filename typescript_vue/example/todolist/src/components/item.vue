<template>
  <div>
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" aria-label="..." @change="changeStatus">
      </span>
      <input type="text" class="form-control" aria-label="...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @clic="removeItem">X</button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Item extends Vue {
  changeStatus(){

  }

  removeItem(){
    
  }
}
</script>

<style scoped>

</style>