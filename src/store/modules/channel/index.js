const module = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: 'canal 1', messages: [] },
        { id: 2, name: 'canal 2', messages: [] },
        { id: 3, name: 'canal 3', messages: [] },
        { id: 4, name: 'canal 4', messages: [] },
      ],
    };
  },
  getters: {
    getChannels: (state) => (search) => {
      return state.channels.filter((channel) =>
        channel.name.toLowerCase().includes(search.toLowerCase())
      );
    },
  },
};

export default module;
