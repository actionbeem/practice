import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {Item, State} from '@/store/store.interface';


Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
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
    
  },
}

export default new Vuex.Store(store);
