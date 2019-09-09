<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <message></message>
    <children :parentMessage="message"></children>
    <button @click="changeMessage">메세지를 바꿉니다.</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import message from '@/components/message.vue'; // @ is an alias to /src
import children from '@/components/children.vue'

@Component({
  components: {
    message,
    children
  },
})
export default class Home extends Vue {
  message: string = 'hello world!!';

  changeMessage(){
    this.message = 'change'
  }
}
</script>
