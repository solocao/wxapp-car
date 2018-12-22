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
  bank: {
    // 银行名称
    name: null,
    // 持卡人姓名
    holder: null,
    // 银行卡号
    number: null,
    // 开户行
    branch: null,
  }
};

export default state;
