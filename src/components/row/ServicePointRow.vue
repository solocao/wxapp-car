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
        <div class="se-title">每审理 萨法是</div>
        <div class="se-address">撒佛教啊司法局哦哦是金佛山</div>
      </div>
      <div class="se-go">
        <img src="../../../static/img/active/arraw.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {

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

