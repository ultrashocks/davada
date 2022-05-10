const state = {
  isLogin: true,
};

const mutations = {
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
};

const getters = {
  getIsLogin(state) {
    return state.isLogin;
  },
};

export const auth = {
  namespaced: true,
  state,
  mutations,
  getters,
};
