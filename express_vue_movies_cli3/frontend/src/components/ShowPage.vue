<template>
  <div>
    <h1>상세 내용</h1>
    <p>{{ this.movie[0].name }}</p>
    <img :src="this.movie[0].poster">
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/movies/${id}`)
    .then((response) => {
      this.movie = response.data;
      console.log(this.movie)
    })
  },
  data: function () {
    return {
      movie: {}
    }
  }
}
</script>