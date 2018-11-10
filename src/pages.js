module.exports = [
  {
    path: 'pages/market/active',
    config: {
      navigationBarTitleText: '热门活动',
      usingComponents: {
        'wux-select': '../../static/wux/select/index',
        'wux-button': '../../static/wux/button/index',
        'wux-popup': '../../static/wux/popup/index',
      },
    },
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
    path: 'pages/car/category', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  },
  {
    path: 'pages/user/verify', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
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
      },
    },
  },
  {
    path: 'pages/my', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  },


  {
    path: 'pages/home', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
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
