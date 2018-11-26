<template>
  <div class="active-detail">
    <div class="cover-img">
      <img :src="data.cover_img" alt="">
    </div>
    <div class="active-content">
      <div class="ac-title">
        水镇美乐家度假别墅活动
      </div>
      <div class="ac-content">
        asfasfasf
      </div>
    </div>
    <div class="ac-date">
      <div class="ac-item">
        <span class="ac-t">开始日期</span>
        <p class="ac-d">9月12日今天</p>
      </div>
      <div class="ac-item">
        <span class="ac-long">共8天</span>
      </div>
      <div class="ac-item">
        <span class="ac-t">结束日期</span>
        <p class="ac-d">9月22日周末</p>
      </div>
    </div>
    <div class="ac-detail">
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
    <footer class="ac-footer">
      <a href="javascript:;" class="aui-footer-btn aui-order-price">
        <span class="aui-order-price-text">
          <span>预计收益 ￥</span>
          <span class="de-price">500.00</span>

        </span>
      </a>
      <a href="javascript:;" class="aui-footer-btn">去赚钱</a>
    </footer>
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
  background: #f4f4f4;
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
    height: 400rpx;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .active-content {
    position: relative;
    z-index: 999;
    background: #4499ff;
    border-radius: 10rpx;
    font-size: 14px;
    color: #fff;
    padding: 30rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    margin-top: -40rpx;
    .ac-title {
      font-size: 16px;
      font-size: bold;
      margin-bottom: 10rpx;
    }

    .active-content {
    }
  }

  .ac-date {
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
    box-shadow: 0 3px 10px #e2e2e2;
    background: white;
    margin-left: 20rpx;
    margin-right: 20rpx;
    border-radius: 10rpx;
    margin-top: 20rpx;

    .ac-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #979797;
      .ac-t {
        color: #979797;
        font-size: 12px;
        font-weight: normal;
      }
      .ac-d {
        color: #333;
        font-size: 14px;
        font-weight: normal;
      }
      .ac-long {
        font-size: 14px;
        color: #479bff;
        border-bottom: 2px solid #479bff;
      }
    }
  }

  .ac-detail {
    margin-top: 20rpx;
    padding-left: 30rpx;
    padding-right: 30rpx;
    background: white;
  }

  // 底部按钮
  .ac-footer {
    width: 100%;
    position: relative;
    z-index: 102;
    display: flex;
    align-items: center;
    padding: 0;
    background-color: rgba(255, 255, 255, 0.96);
    box-shadow: 0 -2px 15px #dedede;
    height: 90rpx;

    .aui-footer-btn {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #4499ff;
      height: 100%;
      font-size: 14px;
      font-weight: bold;
      .de-price {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .aui-order-price {
      background: #fff;
      color: #4499ff;
      position: relative;
    }
  }
}
</style>



