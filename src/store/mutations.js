
const mutations = {
  setUserInfor(state, user) {
    state.user = user;
    wx.setStorageSync('user', user);
  },
  SET_CONTACT(state, contact) {
    state.contact = contact;
  },
};

export default mutations;
