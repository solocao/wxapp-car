// 请求封装
function request(url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中', // 数据请求前loading
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      method,
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
      },
      success(res) {
        // console.log(res);
        wx.hideLoading();
        resolve(res.data);
        // r == 0 一律重新登陆,r < 0 一律提示错误
        if (res.data.r == 0) {
          // wx.navigateTo({
          //   url: "/pages/login/main"
          // });
          wx.redirectTo({
            url: '/pages/login/main',
          });
        } else if (res.data.r < 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1500,
            mask: false,
            success: (res) => {

            },
          });
        }
      },
      fail(error) {
        // console.log(error);
        wx.hideLoading();
        reject(false);
      },
      complete() {

      },
    });
  });
}

function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('/');
  const t2 = [hour, minute, second].map(formatNumber).join(':');

  return `${t1} ${t2}`;
}

export function get(url, data) {
  return request(url, 'GET', data);
}
export function post(url, data) {
  return request(url, 'POST', data);
}

export default {
  formatNumber,
  formatTime,
};
