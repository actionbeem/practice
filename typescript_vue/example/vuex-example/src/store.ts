import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

interface State {
  count: number
}

const store: StoreOptions<State> = {
  state: {
    // count: 0,
  }
}


// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   },
// });
