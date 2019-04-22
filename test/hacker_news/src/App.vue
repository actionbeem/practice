<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
  }
}
</script>

<style>
body {
  padding:0;
  margin:0;
}
a {
  color:#34593e;
  text-decoration: none;
}
a.router-link-exact-active { text-decoration:underline;}
a:hover {
  color:cadetblue;
  text-decoration:underline; 
}
ul, li { list-style:none; padding:0;}
.clear:after { display:block; content:""; clear:both; } 
.fl-l { float:left; } 
.fl-r { float:right; } 

</style>
