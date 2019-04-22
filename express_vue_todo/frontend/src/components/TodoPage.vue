<template>
  <div class="todoList">
    <h1 class="title">I have so many thing have to do.</h1>
    <p class="sub-tit">Let's write it down here!</p>
    <div class="writeForm">
      <div class="clear">
        <input type="text" name="writeInput" placeholder="Write your todolist" v-model="writeInput" @keyup.enter="writeItem">
        <input v-if="editTodo" type="button" value="Edit" @click="editComplete" class="btn-edit">
        <input v-else type="button" value="Write" @click="writeItem" class="btn-write">
      </div>
    </div>
    <ul>
      <transition-group name="todolist">
        <li class="todoItem clear" v-for="todo in todoList" :key="todo.id">
          <div class="fl-l">
            <i class="far fa-check-circle" :class="{ active: todo.completed }" @click="completeTodo(todo.id)"></i>
            <input type="text" :value="todo.title" readonly>
          </div>
          <div class="fl-r">
            <i class="far fa-edit" @click="editItem(todo.title, todo.id)"></i>
            <i class="far fa-trash-alt" @click="deleteItem(todo.id)"></i>
          </div>
        </li>
      </transition-group>
    </ul> 
    <div class="bottom clear">
      <div class="total">
        <p>할 일 : <span class="count">{{ totalItem.total }}</span></p> , 
        <p>완료 : <span class="count">{{ totalItem.complete }}</span></p> , 
        <p>미완료 : <span class="count">{{ totalItem.imcomplete }}</span></p>
      </div>
      <button class="btn-clean" @click="cleanAll">Clean All</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      writeInput:'',
      editTodo: false,
      editTargetId: '',
    }
  },
  computed: {
    ...mapState(['todoList', 'totalItem'])
  },
  created () {
    this.$store.dispatch('FETCH_LIST')
  },
  methods: {
    writeItem(){
      if(this.writeInput){
        this.$http.post('/api/todos/write',{
          todoName : this.writeInput
        })
        .then(response => this.$store.dispatch('FETCH_LIST'))
        .catch(error => console.log('error :', error))
        this.clearInput();
      } else {
        alert('please write your todolist')
      }
    },
    deleteItem(todoId){
      this.$http.post('/api/todos/delete',{
        id: todoId,
      })
      .then(response => this.$store.dispatch('FETCH_LIST'))
      .catch(error => console.log('error :', error))
    },
    completeTodo(todoId){
      this.$http.post('/api/todos/complete', {
        id: todoId
      })
      .then(response => this.$store.dispatch('FETCH_LIST'))
      .catch(error => console.log('error :', error))
    },
    clearInput(){
      this.writeInput = ''
    },
    cleanAll(){
      this.$http.post('/api/todos/delete_all')
      .then(response => this.$store.dispatch('FETCH_LIST'))
      .catch(error => console.log('error :', error))     
    },
    editItem(todoTitle, todoId){
      this.writeInput = todoTitle;
      this.editTargetId = todoId;
      this.editTodo = true;
    },
    editComplete(){
      if(this.writeInput){
        this.$http.post('/api/todos/edit',{
          todoName : this.writeInput,
          todoId : this.editTargetId
        })
        .then(response => this.$store.dispatch('FETCH_LIST'))
        .catch(error => console.log('error :', error))
        this.clearInput();
        this.editTodo = false;  
      } else {
        alert(`You have not written anything.`)
      }
    
    }
  },
}
</script>

<style scoped>
.todoList { width:500px; margin:15px auto; }
.todoList h1 { font-size:27px; margin:0 0 7px 0;  }
.todoList .sub-tit { font-size:17px; margin-bottom:25px; color:#999;}
.todoItem { text-align:left; border-radius:3px; box-shadow:0 5px 15px rgba(0,0,0,0.07); margin-bottom:13px; font-size:14px; color:#333; padding:14px 18px; background-color:#fff; box-sizing:border-box;}
.writeForm { margin-bottom:50px; }
.writeForm [type="text"] { width:80%; float:left; font-size:14px; background-color:rgb(255, 255, 255); border-radius:3px; color:#333; box-shadow:inset 1px 1px rgba(0,0,0,0.1)}
.writeForm [type="text"]::placeholder { color:#ccc; }
.writeForm [type="button"] { width:17%; float:right; border-radius:3px;  cursor:pointer; }
.writeForm .btn-edit { background-color:rgb(245, 174, 43); color:#fff; }
.writeForm .btn-write { background-color:rgb(32, 199, 135); color:#fff; }
.todoItem input { width:360px; padding:0; margin-left:7px; }
.fa-check-circle { color:#ccc; cursor:pointer; }
.fa-check-circle.active { color:rgb(32, 199, 135);}
.fa-edit { cursor:pointer; }
.fa-trash-alt { margin-top:2px; margin-left:13px; cursor:pointer; }

.bottom { margin-top:50px; }
.bottom .total { float:left; }
.bottom .btn-clean { float:right; display:inline-block; border:1px solid #999; color:#666; border-radius:3px; font-size:14px; padding:8px 12px; cursor:pointer; }
.bottom .total p { display:inline-block; font-size:14px; line-height:35px;}

.todolist-enter-active { transition: all .3s ease; }
.todolist-leave-active { transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
.todolist-enter, .todolist-leave-to { transform: translateY(10px); opacity: 0; }
</style>
