<template>
  <div>
    <ul class="item-list">
      <li class="clear" v-for="ask in askList" :key="ask.id">
        <div class="point">
          {{ ask.points }}
        </div>
        <div class="tit-wrap">
          <h2 class=""><router-link :to="`/ask/${ask.id}`">{{ ask.title }}</router-link></h2>
          <p class="sub-txt">
            <span>{{ ask.time_ago }}</span>
            by <a :href="`/user/${ask.user}`">{{ ask.user }}</a>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['askList'])
  },
  created(){
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>
.item-list li { border-top:1px solid #e0e0e0; }
.item-list li h2 { font-size:17px; font-weight:normal;}
.item-list .point { width:60px; position: absolute; text-align:center; margin-top:14.5px; }
.item-list .tit-wrap { padding-left:60px; }
.item-list .sub-txt { color:#999; }
.item-list .sub-txt a { color:#999; margin-left:2px; text-decoration: underline; }
</style>
