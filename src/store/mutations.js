const mutations = {
  set(state, params) {
    Object.keys(params).forEach(key => {
      // 需要替换的值
      const val = params[key];
      const arr = key.split(".");
      if (arr.length > 1) {
        let obj = state;
        while ((arr.length - 1) && (obj = obj[arr.shift()]));
        obj[arr[0]] = val
      } else {
        state[key] = val
      }
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
