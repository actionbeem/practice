import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {Item, State} from '@/store/store.interface';
import AxiosService from '@/service/axios.service';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  mutations: {
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}) {
      state.todoList[id].status = status;
    },
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList;
    },
  },
  actions: {
    async initData({commit}) {
      const response: AxiosResponse<{todoList: Item[]}> = await AxiosService.instance.get('/data.json');
      // console.log(response);

      commit('setTodoList', response.data.todoList);
    },
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter( (item: Item) => item.status === 'active');
    },
    clearTodoList: (state) => {
      return state.todoList.filter( (item: Item) => item.status === 'clear');
    },
  },
};

export default new Vuex.Store(store);
