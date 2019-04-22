<template>
  <div>
    <div class="user">
      <div class="img"></div>
      <div class="info">
        <P>ID : {{ userInfo.id }}</P>
        <P>KARMA : {{ userInfo.karma }}</P>
        <P>CREATED : {{ userInfo.created_time }}</P>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userInfo'])
  },
  created(){
    var userName = this.$route.params.user;
    this.$store.dispatch('USER_DETAIL',userName )
  }
}
</script>

<style scoped>
.user { position:relative; height:70px; }
.user .img { display:inline-block; position: absolute; width:50px; height:50px; border-radius: 50%; background-color:#eee; }
.user .info { padding-left:70px; }
</style>
