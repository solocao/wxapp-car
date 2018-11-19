const state = {
  // 是否登录
  login: false,
  // 用户信息
  user: {
    avatarUrl: '',
    phone: '未绑定',
    name: '',
  },
  contact: {
    name: '请选择收货地址', phone: '', province: '', city: '', area: '', district: '', address: '', id: '',
  }, // 默认地址
  count: 1, // 购买数量
  payment: 1, // 支付方式，默认余额
};

export default state;
