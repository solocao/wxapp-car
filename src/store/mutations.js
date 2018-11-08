
const mutations = {
  setUserInfor(state, userinfo) {
    state.userinfo = userinfo;
    wx.setStorageSync('userinfo', userinfo);
  },
  SET_CONTACT(state, contact) {
    state.contact = contact;
  },
};

export default mutations;
