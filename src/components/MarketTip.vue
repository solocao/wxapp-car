<template>
  <div class="aui-flex">
    <div class="aui-flex-box">
      <p>
        <span>600+</span> 条广告投放，<span>100万+</span> 广告收益
      </p>
    </div>
    <div class="aui-flex-user-img">
      <img src="../../static/images/icon-user-001.png" alt="">
      <img src="../../static/images/icon-user-002.png" alt="">
      <img src="../../static/images/icon-user-003.png" alt="">
    </div>
  </div>
</template>
<style lang="less" scoped>
.aui-flex {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  position: relative;

  .aui-flex-box {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #333;

    p {
      display: block;
      color: #048fff;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap !important;
      word-wrap: break-word;
      word-break: break-all;

      span {
        font-style: normal;
        font-weight: bold;
        color: #048fff;
      }
    }
  }

  .aui-flex-user-img {
    img {
      width: 25px;
      height: 25px;
      border-radius: 100%;
      margin-left: -10px;
      border: 1px solid #fff;
    }
  }
}
</style>

