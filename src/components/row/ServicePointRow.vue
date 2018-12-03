<template>
  <div class="service-point-row">
    <div class="se-top">
      <div class="se-remain">
        <div>
          <div>剩余广告贴纸</div>
          <div>34张</div>
        </div>

        <div class="se-car">
          <img src="../../../static/img/active/car.png" alt="">
        </div>
      </div>

      <div class="se-path">
        <div>路程</div>
        <div>23公里</div>
      </div>
      <div class="se-time">
        <div>预计耗时</div>
        <div>23:00</div>
      </div>
    </div>
    <div class="se-content">
      <div class="se-point">
        <div class="se-title">南京美盛汽车销售服务有限公司</div>
        <div class="se-address">南京市江宁区秣陵街道龙眠大道618号</div>
      </div>
      <div class="se-go" @click="goServicePoint">
        <img src="../../../static/img/active/arraw.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // 导航到服务点
    goServicePoint() {
      wx.openLocation({
        latitude: 41.12154,
        longitude: 122.0518,
        name: "去的地方",
        scale: 15
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .service-point-row {
    margin-top: 20rpx;
    border-radius: 10rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    height: 180rpx;
    padding: 30rpx;
    font-size: 12px;
    background: linear-gradient(to right, #69a5f3, #4a91f7);
    color: white;
    .se-top {
      display: flex;
      justify-content: space-between;
      height: 72rpx;
      .se-remain {
        width: 50%;
        display: flex;
        .se-car {
          margin-left: 20rpx;
          margin-top: -20rpx;
          width: 10%;
          img {
            width: 100rpx;
            height: 100rpx;
          }
        }
      }

      .se-path {
        width: 25%;
      }
      .se-time {
        width: 25%;
      }
    }
    .se-content {
      display: flex;
      justify-content: space-between;
      margin-top: 20rpx;
      .se-point {
        width: 75%;
        .se-title {
          font-size: 16px;
        }
        .se-address {
          margin-top: 10rpx;
          font-size: 14px;
        }
      }
      .se-go {
        width: 25%;
        img {
          width: 90rpx;
          height: 90rpx;
        }
      }
    }
  }
</style>

