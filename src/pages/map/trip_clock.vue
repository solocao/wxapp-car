<template>
  <div class="map-clock">
    <map id="map" longitude="113.324520" latitude="23.099994" scale="14" :markers="markers" :polyline="polyline" show-location></map>
    <cover-view class="controls">
      <cover-view class="back" @click="back">
        <cover-image class="img" :src="icon.back" />
      </cover-view>
      <cover-view class="exit" @click="exit">
        <cover-image class="img" :src="icon.exit" />
      </cover-view>
    </cover-view>
    <cover-view class="clock-wrap">
      <cover-view class="item">
        <cover-view class="cl-title">累计打卡</cover-view>
        <cover-view class="cl-total">
          <cover-view class="total-text">
            80次
          </cover-view>
        </cover-view>
      </cover-view>
      <cover-view class="item-split">
      </cover-view>
      <cover-view class="item">
        <cover-view class="cl-title">打卡抽奖</cover-view>
        <cover-view v-if="showtime == '结束'" class="cl-click">
          <cover-view class="cl-text" @click="activeClock">
            点击打卡
          </cover-view>
        </cover-view>
        <cover-view v-else class="cl-click cl-click-disable">
          <cover-view class="cl-text">
            {{showtime}}
          </cover-view>
        </cover-view>
      </cover-view>
    </cover-view>
    <cover-view class="clock-money">
      <cover-view>¥ 23.21元</cover-view>
    </cover-view>
  </div>
</template>
<script>
import { getQuery } from '@libs/utils';
export default {
  data() {
    return {
      map: null,
      icon: {
        // 回退
        back: 'https://feiyuoss.oss-cn-hangzhou.aliyuncs.com/mini/img/icon/back.png',
        // 中止
        exit: 'https://feiyuoss.oss-cn-hangzhou.aliyuncs.com/mini/img/icon/exit.png'
      },
      markers: [{
        iconPath: "../../static/images/map/car_marker.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 26,
        height: 30
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#048FFFBB",
        width: 2,
        dottedLine: false
      }],
      active_id: '5c03d811bb582bd7318a247c',
      showtime: '...'
    }
  },
  methods: {
    // 倒计时显示处理
    countDownText(m, s) {
      if (m < 0) {
        this.showtime = ''
        return false;
      }
      if (m !== 0) {
        this.showtime = `${m}分:${s}秒`
      } else {
        this.showtime = `${s}秒`
      }
    },
    // 需要倒计时的秒数
    countDown(times) {
      const self = this;
      // 时间间隔 1秒
      const interval = 1000;
      // 计算时间，转化为毫秒
      let ms = times * 1000;
      let count = 0;
      const startTime = new Date().getTime();
      const endTime = startTime + ms;
      let timeCounter;
      timeCounter = setTimeout(countDownStart, interval)
      function countDownStart() {
        count++
        const offset = new Date().getTime() - (startTime + count * interval);
        // 计算剩余时间
        const diff = endTime - new Date().getTime();
        const h = Math.floor(diff / (60 * 1000 * 60));
        const hdiff = diff % (60 * 1000 * 60);
        const m = Math.floor(hdiff / (60 * 1000));
        const mdiff = hdiff % (60 * 1000);
        const s = mdiff / (1000);
        const sCeil = Math.ceil(s);
        const sFloor = Math.floor(s);
        let nextTime = interval - offset;
        if (nextTime < 0) {
          nextTime = 0
        }
        ms = ms - interval;
        console.log(`误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`);
        self.countDownText(m, sCeil)
        if (ms < 0) {
          clearTimeout(timeCounter)
          self.showtime = "结束"

        } else {
          timeCounter = setTimeout(countDownStart, nextTime)
        }
      }
    },
    // 打卡
    async activeClock() {
      // 获取经纬度
      const { latitude, longitude } = await new Promise((resolve, reject) => {
        wx.getLocation({
          type: 'gcj02',
          success(res) {
            resolve(res)
          }
        })
      })
      // 发送数据
      const params = {
        url: "active/clock",
        payload: {
          active_id: this.active_id,
          longitude: longitude,
          latitude: latitude
        },
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        const data = result.data
        this.addMarker(data.latitude, data.longitude)
      }
    },
    // 移动地图到当前定位
    moveToLocation() {
      this.map.moveToLocation()
    },
    // 新增地图坐标点
    addMarker(latitude, longitude) {
      this.markers.push({
        iconPath: "../../static/images/map/car_marker.png",
        id: 0,
        latitude: latitude,
        longitude: longitude,
        width: 26,
        height: 30
      })
      this.polyline[0].points.push({
        longitude: longitude,
        latitude: latitude
      })
      this.moveToLocation()
    },
    // 退出到活动列表
    back() {
      console.log('哈哈,点击啦')
      wx.redirectTo({ url: '/pages/market/active' });
    },
  },
  mounted() {
    // 获取active_id
    const { active_id } = getQuery();
    console.log(this.active_id)
    this.active_id = active_id
    // 初始化map
    this.map = wx.createMapContext('map');
    this.countDown(10);
  }
}
</script>
<style lang="less" scoped>
  .map-clock {
    width: 100%;
    height: 100vh;
    position: relative;

    #map {
      width: 100%;
      height: 100%;
    }

    .clock-wrap {
      position: absolute;
      bottom: 60rpx;
      left: 40rpx;
      width: 670rpx;
      height: 240rpx;
      border-radius: 10rpx;
      box-shadow: 0 -2px 15px #dedede;
      font-size: 12px;
      background: white;
      display: flex;
      justify-content: space-between;

      .item {
        width: 280rpx;
        padding: 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 200rpx;

        .cl-title {
          font-size: 12px;
          color: #333;
        }

        // 一共的打卡次数
        .cl-total {
          margin-top: 20rpx;
          width: 140rpx;
          height: 140rpx;
          border-radius: 50%;
          background: gray;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #20b783;
          box-shadow: 0 2px 10px #36d29a;
          color: white;

          .total-text {
            font-size: 16px;
            font-weight: bold;
          }
        }
        // 点击打卡
        .cl-click {
          margin-top: 20rpx;
          width: 140rpx;
          height: 140rpx;
          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;
          background: #1c99ff;
          box-shadow: 0 2px 10px #03a7f3;

          .cl-text {
            font-size: 12px;
            font-weight: bold;
            color: white;
          }
        }
        .cl-click-disable {
          background: #c5c4c7;
          box-shadow: 0 2px 10px #f2f2f2;
          .cl-text {
            font-weight: bold;
          }
        }
      }

      .item-split {
        margin-top: 20rpx;
        height: 200rpx;
        border: 1px solid #f6f6f6;
      }
    }

    .clock-money {
      position: absolute;
      left: 288rpx;
      bottom: 30rpx;
      width: 180rpx;
      height: 50rpx;
      border-radius: 20rpx;
      box-shadow: 0 2px 10px #dedede;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 12px;
      background: #f86036;
    }
  }
  .controls {
    position: absolute;
    top: 30rpx;
    left: 30rpx;
    width: 60rpx;
    height: 140rpx;

    box-shadow: 0 -2px 15px #dedede;
    font-size: 12px;

    .back {
      width: 60rpx;
      height: 60rpx;
      background: white;
      opacity: 0.9;
      border-radius: 10rpx;
      .img {
        width: 100%;
        height: 100%;
      }
    }

    .exit {
      margin-top: 20rpx;
      width: 60rpx;
      height: 60rpx;
      background: white;
      border-radius: 10rpx;
      opacity: 0.9;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>


