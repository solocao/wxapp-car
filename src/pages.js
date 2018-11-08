module.exports = [
  {
    path: 'pages/user/verify', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: {
      navigationBarTitleText: '用户实名',
      usingComponents: {
        'wux-cell-group': '../../static/wux/cell-group/index',
        'wux-cell': '../../static/wux/cell/index',
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
