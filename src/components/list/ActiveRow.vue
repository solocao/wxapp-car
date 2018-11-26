<template>
  <div class="active-row">
    <div class="ac-list-info">
      <div class="ac-list-airport">
        <div class="ac-form-info">
          <p class="ac-form-info-time">9月12日</p>
          <p class="ac-form-info-address">北站营业点</p>
        </div>
        <div class="ac-time-info">
          <p class="ac-how-long">14天2小时</p>
          <div class="ac-seep-plane">
            <span class="ac-plane-info-icon">广告宣传</span>
          </div>
        </div>
        <div class="ac-goto-info">
          <p class="ac-form-info-time">9月14日</p>
          <p class="ac-form-info-address">北站营业点</p>
        </div>
      </div>
      <div class="ac-company">
        <span>红心美凯龙周年庆活动</span>
        <span>位置打卡12次</span>
      </div>
    </div>
    <div class="ac-list-price">
      <h3> <span>￥</span>525</h3>
      <p>预计收益</p>
      <p>已结束</p>
    </div>

  </div>
</template>
<style lang="less" scoped>
.active-row {
  display: flex;
  padding: 15px 15px;
  position: relative;
  background: #fff;
  border-radius: 10rpx;
  margin-top: 20rpx;
  margin-left: 20rpx;
  margin-right: 20rpx;

  .ac-list-info {
    flex: 5;
    font-size: 0px;
    width: 0;
  }
  .ac-list-airport {
    position: relative;
  }
  .ac-form-info {
    display: inline-block;
    width: 30%;
    font-size: 12px;
  }
  .ac-form-info-time {
    font-size: 16px;
    color: #333;
    line-height: 20px;
  }
  .ac-form-info-address {
    font-size: 12px;
    line-height: 14px;
    margin: 6px 0;
    color: #999;
  }
  .ac-time-info {
    display: inline-block;
    text-align: center;
    width: 39%;
    font-size: 12px;
    box-sizing: border-box;
    color: #999;
    height: 60rpx;
    vertical-align: bottom;
    position: relative;

    .ac-how-long {
      font-size: 12px;
      position: absolute;
      top: -13px;
      left: 50%;
      width: auto;
      margin-left: -27px;
      text-align: center;
    }
    .ac-seep-plane {
      position: relative;
      height: 12px;
    }
    .ac-plane-info-icon {
      position: relative;
      z-index: 2;
      color: #999;
      display: inline-block;
      height: 12px;
      font-size: 12px;
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -ms-transform: scale(0.8);
      -o-transform: scale(0.8);
      transform: scale(0.8);
      -webkit-transform-origin: center center;
      -moz-transform-origin: center center;
      -ms-transform-origin: center center;
      -o-transform-origin: center center;
      transform-origin: center center;
      line-height: 35px;
      margin: 0 2px;
    }
  }

  .ac-goto-info {
    display: inline-block;
    position: relative;
    text-align: right;
    width: 30%;
    font-size: 12px;
  }

  .ac-list-price {
    text-align: right;
    color: #4499ff;
    flex: 2;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    width: 0;

    h3 {
      font-size: 20px;
      font-weight: bold;
    }
    span {
      font-size: 14px;
    }
    p {
      color: #999999;
      font-size: 12px;
      line-height: 12px;
      margin-top: 6px;
    }
  }
  .ac-company {
    margin: 6px 0 0;
    line-height: 14px;
    color: #333;
    span {
      padding: 0 2px;
      font-size: 12px;
    }
  }
}
</style>

