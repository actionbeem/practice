<template>
  <div>
    <h1>TODO LIST</h1>
    <ol class="breadcrumb">
      <li><a href="#">All</a></li>
      <li><a href="#">Active</a></li>
      <li class="active">Clear</li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}

</script>

<style scoped>

</style>