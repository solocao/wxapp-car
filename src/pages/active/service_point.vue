<template>
  <div class="service-point" @click="goPoint">
    <div class="se-list">
      <div class="se-accept">
        <div>
          任务领取成功，请去服务点粘贴车身广告
        </div>
      </div>
      <service-point-row v-for="i in 8" :key="i"></service-point-row>

    </div>
    <footer class="ac-footer">
      <div class="aui-footer-btn aui-order-price">
        <span class="aui-order-price-text">
          <span>广告粘贴完成</span>
        </span>
      </div>
      <div class="aui-footer-btn" @click="goMoney">开始赚钱</div>
    </footer>
  </div>
</template>

<script>
import ServicePointRow from '@components/row/ServicePointRow';
export default {
  data() {

  },
  components: {
    ServicePointRow
  },
  methods: {
    goPoint() {
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
.service-point {
  background: #f7f8f9;
  width: 100%;
  height: calc(100vh - 20rpx);
  padding-top: 20rpx;

  .se-list {
    height: calc(100vh - 90rpx);
    overflow: hidden;
    .se-accept {
      width: calc(100vw - 40rpx);
      height: 100rpx;
      background: white;
      margin-left: 20rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  // 底部按钮
  .ac-footer {
    width: 100%;
    position: absolute;
    bottom: 0rpx;
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
</style>


