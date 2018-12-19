<template>
  <div class="upload-button">
    <wux-upload :formData="path" url="http://api.caowei.wang/ali-oss/upload/img" @change="onChange" @fail="onFail" @complete="onComplete" :sourceType="sourceType">
      <slot></slot>
    </wux-upload>
  </div>
</template>
<script>
export default {
  props: {
    // 描述
    desc: {
      type: String
    },
    // 路径
    path: {
      type: String
    },
    success: {
      type: Function
    },
    sourceType: {
      type: Array,
      default: ['album', 'camera']
    }
  },
  data() {
    return {

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
      console.log('上传成功')
      const result = JSON.parse(e.target.data);
      this.success(result.data.url)
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

