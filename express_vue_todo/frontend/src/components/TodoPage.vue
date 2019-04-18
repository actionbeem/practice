<template>
  <div class="todoList">
    <h1 class="title">Todo List</h1>
    <form class="writeForm" action="/api/todos/write" method="post">
      <div class="clear">
        <input type="text" name="todoName" placeholder="Write your todolist">
        <input type="submit" value="Write">
      </div>
    </form>
    <ul>
      <li class="todoItem" v-for="todo in todos" :key="todo.id">
        <p>{{ todo.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/todos')
    .then((response) => {
      console.log(response.data)
      this.todos = response.data
    });
  },
  methods: {
      
  },
  data () {
    return {
      todos: []
    }
  }
}
</script>

<style scoped>
.todoList { width:500px; margin:15px auto; }
.todoItem { text-align:left; border-radius:3px; box-shadow:0 5px 15px rgba(0,0,0,0.07); margin-bottom:13px; font-size:14px; color:#333; padding:14px 18px; background-color:#fff; box-sizing:border-box;}
.writeForm { margin-bottom:50px; }
.writeForm [type="text"] { width:80%; float:left; font-size:14px; background-color:rgb(255, 255, 255); border-radius:3px; color:#333; box-shadow:inset 1px 1px rgba(0,0,0,0.1)}
.writeForm [type="text"]::placeholder { color:#ccc; }
.writeForm [type="submit"] { width:17%; float:right; border-radius:3px; background-color:#333; color:#fff; }
</style>
