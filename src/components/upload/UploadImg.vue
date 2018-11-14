<template>
  <div class="upload-img">
    <wux-upload url="http://api.caowei.wang/ali-oss/upload/img" @change="onChange" @fail="onFail" @complete="onComplete">
      <div class="v-upload-item">
        <div class="v-desc">
          车辆照片(实际场景)
        </div>
        <img src="../../../static/img/verify/1.png" alt="">
      </div>
    </wux-upload>
  </div>
</template>
<style lang="less" scoped>
.v-upload-item {
  float: left;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20rpx;
  margin-left: 25rpx;
  width: 320rpx;
  height: 220rpx;

  .v-desc {
    position: absolute;
    bottom: 20rpx;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 30rpx;
  }
}
</style>

