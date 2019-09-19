import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {Item, State} from '@/store/store.interface';


Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      { id: 0, title: 'test01', status: 'active' },
      { id: 1, title: 'test02', status: 'active' },
      { id: 2, title: 'test03', status: 'clear' },
    ],
  },
  mutations: {
    addItem(state, item: Item){
      state.todoList.push(item);
    },
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}){
      state.todoList[id].status = status;
    },
    removeItem(state, id: number){
      state.todoList.splice(id, 1);
    }
  },
  actions: {

  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter( (item: Item) => item.status === 'active')
    },
    clearTodoList: (state) => {
      return state.todoList.filter( (item: Item) => item.status === 'clear')
    },
  },
}

export default new Vuex.Store(store);
