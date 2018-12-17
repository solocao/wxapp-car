 <!-- 任务列表 -->
<template>
  <div class="task-row">
    <div class="t-img">
      <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=271244733,354853729&fm=202&mola=new&crop=v1" alt="">
    </div>
    <div class="t-detail">
      <div class="t-title">
        <div class="">嘻嘻鸡西休息</div>
        <div class="t-money">
          <span class="t-yuan">¥</span>
          <span class="t-zhi">12</span>
        </div>
      </div>
      <div>
        <span class="z-tag-red">满卡奖励300元</span>
        <span></span>
      </div>
      <div>

        <span class="z-tag-end">正在跑单</span>
        <span>12年12月-12年32</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
  }

}
</script>
<style lang="less" scoped>
  .task-row {
    background: white;
    height: 180rpx;
    position: relative;
    display: flex;
    border-radius: 6rpx;
    font-size: 14px;
    .t-img {
      height: 180rpx;
      width: 250rpx;
      border-radius: 6rpx;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6rpx;
      }
    }
    .t-detail {
      flex: 1;
      padding: 6rpx;
      padding-left: 18rpx;
      padding-right: 18rpx;

      .t-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .t-money {
          color: tomato;
          .t-yuan {
            font-size: 12px;
          }
          .t-zhi {
            font-size: 28px;
            font-weight: bold;
          }
        }
      }
    }

    .z-tag-red {
      font-size: 10px;
      color: red;
      border: 1px solid red;
      padding: 2rpx 8rpx;
      border-radius: 20rpx;
    }

    .z-tag-end {
      font-size: 10px;
      color: #3b8bdb;
      border: 1px solid #3b8bdb;
      padding: 2rpx 8rpx;
      border-radius: 20rpx;
    }
  }
</style>


