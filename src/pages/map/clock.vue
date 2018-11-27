<template>
  <div class="map-clock">
    <map id="map" longitude="113.324520" latitude="23.099994" scale="14" :markers="markers" :polyline="polyline" show-location></map>
    <cover-view class="controls">
      <cover-view>
        地图控件
      </cover-view>
    </cover-view>
    <footer class="ac-footer">
      <div class="aui-footer-btn aui-order-price">
        <span class="aui-order-price-text">
          <span>打卡次数 </span>
          <span class="de-price">500</span>
        </span>
      </div>
      <div class="aui-footer-btn" @click="mapClock">
        坐标打卡
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      markers: [{
        iconPath: "../../static/images/map/car_marker.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 30,
        height: 36
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
    }
  }

}
</script>
<style lang="less" scoped>
.map-clock {
  width: 100%;
  height: calc(100vh - 90rpx);
  position: relative;
  #map {
    width: 100%;
    height: 100%;
  }

  // 底部按钮
  .ac-footer {
    width: 100%;
    position: relative;
    z-index: 102;
    display: flex;
    align-items: center;
    padding: 0;
    background-color: rgba(255, 255, 255, 0.96);
    box-shadow: 0 -2px 15px #dedede;
    height: 90rpx;

    .aui-footer-btn {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #4499ff;
      height: 100%;
      font-size: 14px;
      font-weight: bold;
      .de-price {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .aui-order-price {
      background: #fff;
      color: #4499ff;
      position: relative;
    }
  }
}
.controls {
  position: absolute;
  top: 30rpx;
  left: 30rpx;
  height: 50px;
  background: #4499ff;
  width: 100rpx;
  height: 100rpx;
  border-radius: 10rpx;
  box-shadow: 0 -2px 15px #dedede;
  font-size: 12px;
}
</style>


