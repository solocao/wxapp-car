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
        <cover-view class="cl-click">
          <cover-view class="cl-text">
            点击打卡
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
export default {
  data() {
    return {
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
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }]
    }
  },
  methods: {
    mapClock() {
      console.log('asff')
    },
    // 退出到活动列表
    back() {
      console.log('哈哈,点击啦')
      wx.redirectTo({ url: '/pages/market/active' });
    }
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
          background: gray;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #1c99ff;
          box-shadow: 0 2px 10px #03a7f3;

          .cl-text {
            font-size: 12px;
            color: white;
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


