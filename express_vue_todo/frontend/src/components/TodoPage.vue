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
      <li class="todoItem clear" v-for="todo in todos" :key="todo.id">
        <div class="fl-l">
          <i class="far fa-check-circle"></i>
          <input type="text" :value="todo.title" readonly>
        </div>
        <i class="far fa-trash-alt" @click="deleteItem(todo.id)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/todos')
      .then((response) => {
        this.todos = response.data
      });
  },
  methods: {
    deleteItem(todoId){
      this.$http.post('/api/todos/delete',{
        id: todoId,
      })
      .then((response) => {
        // this.todos = response.data
      })
      .catch(error => {
        console.log('error :', error)
      })
    }
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
.todoItem input { padding:0; margin-left:7px; }
.fa-check-circle { color:#ccc; cursor:pointer; }
.fa-check-circle.checked { color:cornflowerblue;}
.fa-trash-alt { float:right; margin-top:2px; cursor:pointer; }
</style>
