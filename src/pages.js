module.exports = [
  {
    path: 'pages/home', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: {
      usingComponents: {
        'wux-icon': '../static/wux/icon/index',
        'wux-grids': '../static/wux/grids/index',
        'wux-grid': '../static/wux/grid/index',
        'wux-cell': '../static/wux/cell/index',
        'wux-cell-group': '../static/wux/cell-group/index',
        'wux-input': '../static/wux/input/index',
        'wux-row': '../static/wux/row/index',
        'wux-col': '../static/wux/col/index',
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
    path: 'pages/my', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  },
];
