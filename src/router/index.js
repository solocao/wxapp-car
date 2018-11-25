module.exports = [
  // 参加活动的人员列表
  {
    path: 'pages/active/join_user', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  },
  // 活动详情
  {
    path: 'pages/active/detail',
    config: {
      navigationBarTitleText: '广告任务',
      usingComponents: {
        'wux-cell-group': '../../static/wux/cell-group/index',
        'wux-cell': '../../static/wux/cell/index',
        'wux-input': '../../static/wux/input/index',
      },
    },
  },
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
  {
    path: 'pages/my', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  },
  // 首页
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
  {
    // 用户认证页面
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

  {
    path: 'pages/money',
    config: {
      navigationBarTitleText: '记录',
    },
  },
  // 汽车分类
  {
    path: 'pages/car/category',
  },
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
  {
    path: 'pages/task', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '文章列表',
      enablePullDownRefresh: false,
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2D8FF7',
      navigationBarTextStyle: 'white',
    },
  },
  {
    path: 'pages/market', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  },

];
