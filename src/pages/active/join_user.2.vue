<template>
  <div class="join-user">
    <scroll-view scroll-y class="join-list" @scrolltolower="more" @scroll="scroll" @scrolltoupper="refresh">
      <div class="j-item" v-for="i in 20" :key="i">
        <div class="j-user">
          <img src="http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg" alt="">
          <span>小鸟嘎嘎</span>
        </div>
        <div>
          <span class="j-money">预计收益：¥120</span>
          <span class="j-date">2018年09月12日</span>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    refresh() {
      console.log('刷新');
    },
    // 加载更多
    more() {
      console.log('加载了更多')
    },

  }
}
</script>

<style lang="less" scoped>
  .join-user {
    color: #474747;
    font-size: 14px;
    padding-left: 20rpx;
    padding-right: 20rpx;

    .join-list {
      height: 400px;
    }

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

