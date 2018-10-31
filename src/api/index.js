import Fly from 'flyio/dist/npm/wx';
import qs from 'qs';

const fly = new Fly();
const host = 'https://www.easy-mock.com/mock/5af9506f55139c3813192aa2/example';

// 添加请求request拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true,
  });

  request.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json',
  };

  const authParams = {
    // 公共参数
    categoryType: 'SaleGoodsType@sim',
    streamNo: 'wxapp153570682909641893',
    reqSource: 'MALL_H5',
    appid: 'string',
    timestamp: new Date().getTime(),
    sign: 'string',
  };


  // 去除没用的字段
  if (request.body !== undefined) {
    Object.keys(request.body).forEach((val) => {
      if (request.body[val] === '' || request.body[val] === null) {
        delete request.body[val];
      }
    });
  }

  request.body = Object.assign({}, request.body, authParams);
  return request;
});

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading();
    return response.data;// 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    console.log(err);
    wx.hideLoading();
    if (err) {
      return '请求失败';
    }
  },
);

fly.config.baseURL = host;

export default fly;

// 通用的get请求
export const get = (params) => {
  fly.get(`${host}${params.url}`, qs.stringify(params.payload));
};

// 通用的post请求
export const post = (params) => {
  fly.post(`${host}${params.url}`, qs.stringify(params.payload));
};
