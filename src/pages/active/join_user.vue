<template>
  <div class="join-user">
    <div class="j-item" v-for="i in 20">
      <div class="j-user">
        <img src="http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg" alt="">
        <span>小鸟嘎嘎</span>
      </div>
      <div>
        <span class="j-money">预计收益：¥120</span>
        <span class="j-date">2018年09月12日</span>
      </div>
    </div>

  </div>
</template>
<style lang="less" scoped>
.join-user {
  color: #474747;
  font-size: 14px;
  padding-left: 20rpx;
  padding-right: 20rpx;

  .j-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120rpx;
    border-bottom: 1px solid #f7f7f7;

    .j-user {
      display: flex;
      align-items: center;
    }

    img {
      width: 90rpx;
      height: 90rpx;
      border-radius: 50%;
      margin-right: 10rpx;
    }
  }

  .j-money {
    margin-right: 10rpx;
  }
}
</style>

