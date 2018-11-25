<template>
  <div class="active-join">
    <div class="a-total">
      <p> 已参加</p>
      <p class="a-num"> 213人</p>
    </div>
    <div class="a-face">
      <img :src="img" alt="" v-for="i in 10">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543152959841&di=d78fd602fcc32cc0b0b42dffa5af956d&imgtype=0&src=http%3A%2F%2Fwww.qqpk.cn%2FArticle%2FUploadFiles%2Fluhan%2F16.jpg'
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
    width: 110rpx;
    text-align: center;
    .a-num {
      font-size: 12px;
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

