<template>
  <div class="bank-row">
    <div class="bank-icon">
      <img :src="iconPath" alt="">
    </div>
    <div class="bank-name">
      {{bank}}
    </div>
    <div class="right-arrow bank-right">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String
    },
    bank: {
      type: String,
      default: '某某银行'
    }
  },
  computed: {
    iconPath() {
      const path = 'https://flysee.oss-cn-hangzhou.aliyuncs.com/bank/';
      return `${path}${this.bank}.jpg`
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .bank-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    .bank-icon {
      width: 80rpx;
      height: 80rpx;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      margin-left: 20rpx;
      margin-right: 20rpx;
    }
    .bank-name {
      flex: 1;
    }

    .bank-right {
    }
    border-bottom: 1px solid #f0f0f0;
  }

  .right-arrow {
    display: inline-block;
    position: relative;
    width: 36rpx;
    height: 36rpx;
    margin-right: 20rpx;
    &:after {
      display: inline-block;
      content: " ";
      height: 18rpx;
      width: 18rpx;
      border-width: 4rpx 4rpx 0 0;
      border-color: #c7c7cc;
      border-style: solid;
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: absolute;
      top: 50%;
      right: 6rpx;
      margin-top: -9rpx;
    }
  }
</style>

