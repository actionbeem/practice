<template>
  <div>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; 

@Component
export default class Message extends Vue {
  message: string = "메시지를 입력하세요"
}
</script>