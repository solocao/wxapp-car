<template>
  <div class="active-detail">
    <div class="cover-img">
      <img :src="data.cover_img" alt="">
    </div>
    <div class="nc-cell">
      <div>广告类型</div>
      <div>车外</div>
    </div>
    <div class="nc-cell">
      <div>实际收益</div>
      <div>180元</div>
    </div>
    <div class="nc-cell">
      <div>投放车辆</div>
      <div>100辆</div>
    </div>
    <div class="nc-cell">
      <div>投放时间</div>
      <div>180元</div>
    </div>
    <active-join></active-join>
  </div>
</template>
<script>
import ActiveJoin from '@components/join/ActiveJoin';
export default {
  props: {
    data: {
      type: Object,
      default: {
        state: 0,
        show_img: ["http://hehecms.oss-cn-hangzhou.aliyuncs.com/verify/2018-11-24/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-11-19%20%E4%B8%8B%E5%8D%884.15.16.png"],
        "_id": "5bf90304fdfaf96f4558b615",
        title: "a", brief: "dasf", cover_img: "http://hehecms.oss-cn-hangzhou.aliyuncs.com/verify/2018-11-24/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-11-19%20%E4%B8%8B%E5%8D%884.15.16.png", "content": "<p>asfasf</p>", "start_at": "2018-11-24T07:40:14.600Z", "end_at": "2018-12-01T07:40:14.600Z", "create_user": "5bea8e7621a86d63ec7e8429", "create_at": "2018-11-24T07:51:32.439Z", "__v": 0
      }
    }
  },
  data() {
    return {
      form: {
        name: 'saff'
      }
    }
  },
  components: {
    ActiveJoin
  }
}
</script>
<style lang="less" scoped>
.active-detail {
  padding-left: 20rpx;
  padding-right: 20rpx;
  padding-top: 20rpx;
  // 需要封装成统一的
  .nc-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #5a5a5a;
    height: 80rpx;
    border-bottom: 1px solid #f7f7f7;
  }
  .cover-img {
    width: 100%;
    height: 400rpx;
    border-radius: 6px;
    box-shadow: 0px 0px 4px #ababab;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>



