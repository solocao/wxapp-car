<template>
  <div class="active-join" @click="goJoinUserList">
    <div class="a-total">
      <p> 已经参加</p>
      <p class="a-num"> 213人</p>
    </div>
    <div class="a-face">
      <img :src="img" alt="" v-for="i in 10" :key="i">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active_id: {
      type: String,
    }
  },
  data() {
    return {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543152959841&di=d78fd602fcc32cc0b0b42dffa5af956d&imgtype=0&src=http%3A%2F%2Fwww.qqpk.cn%2FArticle%2FUploadFiles%2Fluhan%2F16.jpg'
    }
  },
  methods: {
    goJoinUserList() {
      wx.navigateTo({
        url: `/pages/active/join_user?active_id=${this.active_id}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .active-join {
    display: flex;
    font-size: 14px;
    color: #5a5a5a;
    height: 100rpx;
    width: 100%;
    align-items: center;
    .a-total {
      width: 114rpx;
      text-align: center;
      .a-num {
        font-size: 12px;
        color: #1c99ff;
      }
    }
    .a-face {
      flex: 1;
      flex-wrap: wrap;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      img {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        margin-left: 18rpx;
      }
    }
  }
</style>

