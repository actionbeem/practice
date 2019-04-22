<template>
  <div>
    <ul class="item-list">
      <li class="clear" v-for="news in newsList" :key="news.id">
        <div class="point">
          {{ news.points }}
        </div>
        <div class="tit-wrap">
          <h2 class=""><a :href="news.url">{{ news.title }}</a></h2>
          <p class="sub-txt">
            <span>{{ news.time_ago }}</span>
            by <a :href="`/user/${news.user}`">{{ news.user }}</a>
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
    ...mapState(['newsList'])
  },
  created(){
    this.$store.dispatch('FETCH_NEWS')
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
