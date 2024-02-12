import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      username: 'joahn.connor99',
    };
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c);
    },
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username;
    },
  },
  actions: {
    updateUsername({ commit, state }, username) {
      console.log(
        'update username action. anterior: ',
        state.username,
        ', nuevo: ',
        username
      );
      commit('updateUsername', username);
    },
  },
});

export default store;
