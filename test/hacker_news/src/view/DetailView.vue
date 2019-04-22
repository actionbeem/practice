<template>
  <div>
    <div class="user">
      <div class="img"></div>
      <div class="info">
        <router-link :to="`/user/${askDetail.user}`">{{ askDetail.user }}</router-link>
      </div>
    </div>
    <h2>{{ askDetail.title }}</h2>
    <div v-html="askDetail.content"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['askDetail'])
  },
  created(){
    var itemId = this.$route.params.id;
    this.$store.dispatch('ASK_DETAIL',itemId)
  }
}
</script>

<style scoped>
.user { position:relative; height:70px; }
.user .img { display:inline-block; position: absolute; width:50px; height:50px; border-radius: 50%; background-color:#eee; }
.user .info { padding-left:70px; }
</style>
