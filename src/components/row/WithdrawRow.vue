<template>
  <div class="withdraw-row">
    <div class="w-top">
      <div class="w-icon">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545497639143&di=7d8664eb76d2a1a66bca1b21ac4ad6c9&imgtype=0&src=http%3A%2F%2Fpic-cdn.35pic.com%2F58pic%2F12%2F94%2F61%2F22758PICcyJ.jpg" alt="">
      </div>
      <div class="w-bank">
        <div class="wb-name">中国银行</div>
        <div class="w-number">412412515125125151515</div>
      </div>
      <div class="w-money">
        <div>
          <span class="wm-icon">¥</span>
          <span>340</span>
        </div>
      </div>
    </div>
    <div class="w-at">
      2018年12月3日

    </div>
  </div>
</template>
<script>
export default {
  props: {

  },
}
</script>
<style lang="less" scoped>
  .withdraw-row {
    margin: 20rpx;
    height: 200rpx;
    box-shadow: 0rpx 2rpx 4rpx #f0f0f0;
    background: white;
    .w-top {
      display: flex;
      .w-icon {
        width: 140rpx;
        height: 140rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100rpx;
          height: 100rpx;
        }
      }

      .w-bank {
        flex: 1;
        height: 140rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 18px;
        .w-number {
          color: grey;
          font-size: 14px;
        }
      }
      .w-money {
        width: 100rpx;
        height: 140rpx;
        margin-right: 40rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        font-weight: bold;
        color: tomato;
        .wm-icon {
          font-size: 14px;
        }
      }
    }
    .w-at {
      display: flex;
      height: 60rpx;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;
      border-top: 1px solid #f0f0f0;
      padding-right: 20rpx;
      color: grey;
    }
  }
</style>

