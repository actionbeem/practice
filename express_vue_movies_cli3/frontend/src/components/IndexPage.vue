<template>
  <div class="movies">
    <h1>영화 목록</h1>
    <div v-for="movie in movies" class="movie">
      <img v-bind:src="movie.poster" class="poster">
      <div>
        {{ movie.id }}
        <router-link :to="{ name: 'show', params: { id: movie.id }}">더보기</router-link>
      </div>
    </div>
    <p class="test">test입니다</p>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  created () {
    this.$http.get('/api/movies')
      .then((response) => {
        this.movies = response.data
      })
  },
  data () {
    return {
      movies: []
    }
  },
}



</script>


<style>
.movie { display:inline-block; width:200px;}
.movie .poster { width:100%; } 
</style>