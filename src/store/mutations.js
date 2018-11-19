
const mutations = {
  set(state, params) {
    const keys = Object.keys(params)
    keys.forEach(x => {
      const val = params[x]
      state[x] = val
    })
  },
  setUserInfor(state, user) {
    state.user = user;
    wx.setStorageSync('user', user);
  },
  SET_CONTACT(state, contact) {
    state.contact = contact;
  },
};

export default mutations;
