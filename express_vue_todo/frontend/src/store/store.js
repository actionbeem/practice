import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: [],
    totalItem: {},
  },
  actions: {
    FETCH_LIST (context) {
      axios.get('/api/todos')
        .then((response) => {
          context.commit('setTodoList', response.data)
          context.commit('countItem')
        });
    }
  },
  mutations: {
    setTodoList (state, data) {
      state.todoList = data;
    },
    countItem (state, data) {
      state.totalItem.total =  state.todoList.length;
      state.totalItem.complete = state.todoList.filter(item => item.completed).length;
      state.totalItem.imcomplete = state.todoList.filter(item => !item.completed).length;
    },
  },
});