import Vue from 'vue';

import Vuex, {StoreOptions} from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

const Store: StoreOptions<State> = {
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, count: number) {
      state.count = count;
    },
  },
  actions: {
    increase({state, commit}) {
      commit('setCount', state.count + 1);
    },
    decrease({state, commit}) {
      commit('setCount', state.count - 1);
    },
  },
  getters: {
    count: (state) => state.count,
  },
};

export default new Vuex.Store(Store);