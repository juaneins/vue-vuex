import { COMMIT_UPDATE_USERNAME } from '@/common/mutation.types.js';
import { getUser } from '@/api';

const profile = {
  state() {
    return {
      username: 'juano',
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
    async updateUsername({ commit, state }, username) {
      console.log(
        'update username action. anterior: ',
        state.username,
        ', nuevo: ',
        username
      );
      const user = await getUser(1);
      console.log(user);
      commit(COMMIT_UPDATE_USERNAME, user.username);
    },
  },
};

export default profile;
