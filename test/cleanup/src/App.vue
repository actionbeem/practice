<template>
  <div id="app">
    <form-view></form-view>
    <!-- <dynamic-test></dynamic-test> -->
    <!-- <is-attr></is-attr> -->
  </div>
</template>

<script>
import FormView from './view/FormView.vue'
// import DynamicTest from './view/DynamicTest.vue'
// import isAttr from './view/IsAttr.vue'

export default {
  data(){
    return {
    }
  },
  components: {
    FormView
    // DynamicTest,
    // isAttr
  },
}
</script>

<style>
body {
  padding:0;
  margin:0;
  background-color:#f6f6f6;
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
