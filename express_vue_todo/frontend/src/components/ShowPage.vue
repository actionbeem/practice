<template>
  <div>
    <h1>상세 내용</h1>
    <img :src="this.movie[0].poster">
    <h2>{{ this.movie[0].name }}</h2> 
    <p>{{ this.movie[0].director }}</p> 
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/movies/${id}`)
    .then((response) => {
      this.movie = response.data
    })
  },
  data: function () {
    return {
      movie: []
    }
  }
}
</script>