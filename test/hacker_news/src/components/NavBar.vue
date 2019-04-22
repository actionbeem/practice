<template>
  <ul class="nav-bar clear">
    <li><router-link to="/news">news</router-link></li>
    <li><router-link to="/ask">ask</router-link></li>
    <li><router-link to="/jobs">jobs</router-link></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar li { display:inline-block; float:left; padding:5px; }
</style>
