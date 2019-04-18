<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body { background-color:#f6f6f6; }
ul { list-style:none; margin:0; padding:0; }
p { margin:0; }
input, textarea { outline-width:0; border:0; font-size:14px; padding:14px 18px; box-sizing:border-box; }
.clear:after { content:""; display:block; clear:both; }
</style>
