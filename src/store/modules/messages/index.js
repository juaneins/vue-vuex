import getters from './getters';

const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: 'Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 1,
        },
        {
          id: 2,
          author: 2,
          message: 'Holaaa!!!',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2,
        },
        {
          id: 3,
          author: 2,
          message: 'Vienes???!!!',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2,
        },
        {
          id: 4,
          author: 1,
          message: 'Donde???!!!',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2,
        },
      ],
    };
  },
  getters,
};

export default module;
