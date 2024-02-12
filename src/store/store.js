import { reactive } from 'vue';

const store = reactive({
  username: 'connor.jhon',
  updateUsername(username) {
    this.username = username;
  },
});

export default store;
