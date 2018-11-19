<template>
  <div class="upload-img">
    <wux-upload :formData="path" url="http://api.caowei.wang/ali-oss/upload/img" @change="onChange" @fail="onFail" @complete="onComplete">
      <div class="v-upload-item">
        <div class="v-title">
          {{title}}
        </div>
        <div class="v-desc">
          {{desc}}
        </div>
        <img :src="url" alt="">
      </div>
    </wux-upload>
  </div>
</template>
<script>
export default {
  props: {
    // 图片url
    url: {
      type: String,
      default: '../../../../../static/img/verify/1.png'
    },
    // 文字标题
    title: {
      type: String,
      default: '输入标题'
    },
    // 描述
    desc: {
      type: String
    },
    // 路径
    path: {
      type: String
    }
  },
  data() {
    return {
      path: {

      }
    }
  },
  methods: {
    onChange(e) {
      console.log(e)
      console.log('onchange')
    },
    onFail(e) {
      console.log('上传失败')
    },
    onComplete(e) {
      const result = JSON.parse(e.target.data);
      this.$emit('update:url', result.data.url)
    },
  }
}
</script>

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
  border-radius: 30rpx;
  border: 1rpx solid #f2f8f8;
  box-shadow: 0rpx 0rpx 4rpx #e2e2e2;

  .v-title {
    position: absolute;
    top: 20rpx;
    font-size: 16px;
    font-weight: bold;
    color: white;
    text-shadow: #000 0rpx 0rpx 12rpx;
  }
  .v-desc {
    position: absolute;
    bottom: 20rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: white;
    text-shadow: #000 0rpx 0rpx 4rpx;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 30rpx;
  }
}
</style>

