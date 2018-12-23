<template>
  <div class="history-row">
    <div class="hi-img">
      <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1692640908,170508672&fm=202&src=999&v=2&mola=new&crop=v1" alt="">
    </div>
    <div class="hi-content">
      <div class="hi-title">哦啊手机放家哎减肥哦</div>
      <div class="hi-date">2018年1月23日-2018年1月23日</div>
      <div class="hi-money">
        <span class="hi-icon">¥</span>
        <span class="hi-detail">300</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
  .history-row {
    height: 160rpx;
    background: white;
    display: flex;
    margin: 20rpx;
    border-radius: 10rpx;
    .hi-img {
      width: 220rpx;
      height: 160rpx;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }

    .hi-content {
      flex: 1;
      margin-left: 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .hi-title {
        font-size: 16px;
      }
      .hi-date {
        font-size: 14px;
        color: grey;
      }
      .hi-money {
        font-size: 18px;
        .hi-icon {
          font-size: 14px;
        }
        .hi-detail {
          font-weight: bold;
        }
      }
    }
  }
</style>



