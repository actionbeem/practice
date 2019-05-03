<template>
  <div class="test">
    <button @click="">click</button>
    <template v-for="(radio, index) in testData">
      <input type="radio" :id="radio" :value="radio" v-model="radioValue">
      <label :for="radio">{{ radio }}</label>
    </template>
    <p>
      {{ radioValue }}
    </p>
    <button @click="elFunc">elFunc</button>
    <aaaa>hola</aaaa>
  </div>
</template>

<script>
export default {
  data(){
    return {
      testData: ["radio01","radio02","radio03"],
      radioValue: '',
    }
  },
  watch: {
    radioValue: function(t, old){
      console.log(t, old)
    },
  },
  filters: {
    capitalize(t){
      t = t.toString()
      t = t.charAt(0).toUpperCase() + t.slice(1)
      return t
    }
  },
  methods: {
    btnClick(){
      this.$emit('hola')
    },
    alertFunc(){
      alert('bbb')
    },
    elFunc(){
      console.log('aaa')
    }
  }
}
</script>

<style>
.test { margin-top:50px; padding-top:50px; border-top:1px solid #e0e0e0;}
</style>
