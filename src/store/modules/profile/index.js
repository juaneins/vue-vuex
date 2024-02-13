import {
  COMMIT_UPDATE_USERNAME,
  COMMIT_SET_STATUS,
} from '@/common/mutation.types.js';
import { getUser } from '@/api';

const module = {
  namespaced: true,
  state() {
    return {
      username: '',
    };
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c);
    },
  },
  mutations: {
    // se coloca entre corchetes para cambiar el nombre de funcion por el nombre de la constante que se importó
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username;
    },
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log(
        'anterior: ',
        state.username,
        ', nuevo: ',
        username
      );
      const user = await getUser(1);
      console.log(user);
      commit(COMMIT_UPDATE_USERNAME, user.username);

      if (state.username) {
        commit(COMMIT_SET_STATUS, 'active', { root: true });
        console.log('rootState: ', rootState.status);
      }
    },
  },
};

export default module;
