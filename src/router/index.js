module.exports = [

  // 2 广告任务
  {
    path: 'pages/market/active',
    config: {
      navigationBarTitleText: '广告任务',
      usingComponents: {
        'wux-select': '../../static/wux/select/index',
        'wux-button': '../../static/wux/button/index',
        'wux-popup': '../../static/wux/popup/index',
      },
    },
  },

  // 1 首页
  {
    path: 'pages/home',
    config: {
      usingComponents: {
        'wux-row': '../static/wux/row/index',
        'wux-col': '../static/wux/col/index',
        'wux-button': '../static/wux/button/index',
        'wux-dialog': '../static/wux/dialog/index',
      },
    },
  },
  // 2-3 去服务点 粘贴广告
  {
    path: 'pages/active/service_point',
    config: {
      navigationBarTitleText: '粘贴广告',
      usingComponents: {
        "wux-upload": "../../static/wux/upload/index",
        'wux-button': '../../static/wux/button/index',
        'wux-popup': '../../static/wux/popup/index',
      },
    },
  },

  // 2-4 地图 出行打卡
  {
    path: 'pages/map/trip_clock',
    config: {
      navigationBarTitleText: '出行打卡'
    },
  },
  // 2-1 活动详情
  {
    path: 'pages/active/detail',
    config: {
      navigationBarTitleText: '活动详情',
      usingComponents: {
        'wux-cell-group': '../../static/wux/cell-group/index',
        'wux-cell': '../../static/wux/cell/index',
        'wux-input': '../../static/wux/input/index',
      },
    },
  },

  // 2-2 参加活动的人员列表
  {
    path: 'pages/active/join_user',
    config: {
      navigationBarTitleText: '参与人员',
      usingComponents: {
        'wux-refresher': '../../static/wux/refresher/index'
      },
    },
  },


  // 3 我的任务
  {
    path: 'pages/task', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '我的任务',
      enablePullDownRefresh: false,
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2D8FF7',
      navigationBarTextStyle: 'white',
    },
  },

  // 4 我的 个人中心
  {
    path: 'pages/my',
    config: {
      navigationBarTitleText: '我的',
      // disableScroll: true,
      enablePullDownRefresh: false
    }
  },

  // 4-2 提现页面
  {
    path: 'pages/money/withdraw',
    config: {
      navigationBarTitleText: '提现',
      // disableScroll: true,
      enablePullDownRefresh: false,
      usingComponents: {
        'wux-cell-group': '../../static/wux/cell-group/index',
        'wux-cell': '../../static/wux/cell/index',
        'wux-input': '../../static/wux/input/index',
        "wux-input-number": '../../static/wux/input-number/index',
        'wux-button': '../../static/wux/button/index',
      },
    }
  },
  // 4-3 提现历史记录
  {
    path: 'pages/money/withdraw_list',
    config: {
      navigationBarTitleText: '提现记录',
      // disableScroll: true,
      enablePullDownRefresh: false,
    }
  },

  {
    // 4-1 用户认证页面
    path: 'pages/user/verify',
    config: {
      navigationBarTitleText: '车主认证',
      usingComponents: {
        'wux-select': '../../static/wux/select/index',
        'wux-selectable': '../../static/wux/selectable/index',
        'wux-checkbox-group': '../../static/wux/checkbox-group/index',
        'wux-checkbox': '../../static/wux/checkbox/index',
        'wux-cell-group': '../../static/wux/cell-group/index',
        'wux-cell': '../../static/wux/cell/index',
        'wux-input': '../../static/wux/input/index',
        'wux-button': '../../static/wux/button/index',
        "wux-upload": "../../static/wux/upload/index",
        "wux-toast": "../../static/wux/toast/index"
      },
    },
  },


  // 4-2-1 我的 银行列表
  {
    path: 'pages/money/bank',
    config: {
      navigationBarTitleText: '选择银行',
      // disableScroll: true,
      enablePullDownRefresh: false
    }
  },



  // 4 我的 活动历史
  {
    path: 'pages/active/history',
    config: {
      navigationBarTitleText: '历史任务',
      // disableScroll: true,
      enablePullDownRefresh: false
    }
  },

  // 5 汽车分类列表
  {
    path: 'pages/car/category',
    config: {
      navigationBarTitleText: '车型分类',
    },
  },
  // 5-1 汽车详情页
  {
    path: 'pages/car/detail',
    config: {
      navigationBarTitleText: '车辆选择',
      usingComponents: {
        'wux-select': '../../static/wux/select/index',
        'wux-button': '../../static/wux/button/index',
        'wux-popup': '../../static/wux/popup/index',
      },
    },
  },

  // 地图
  {
    path: 'pages/map/index',
    config: {
      navigationBarTitleText: '地图'
    },
  },

  {
    path: 'pages/money',
    config: {
      navigationBarTitleText: '记录',
    },
  },
];
