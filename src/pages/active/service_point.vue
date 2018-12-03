<template>
  <div class="service-point">
    <scroll-view scroll-y class="se-list">
      <div class="se-accept">
        <div>
          任务领取成功，请去服务点粘贴车身广告
        </div>
      </div>
      <service-point-row v-for="i in 3" :key="i"></service-point-row>
    </scroll-view>
    <footer class="ac-footer">
      <div class="aui-footer-btn aui-order-price">
        <span class="aui-order-price-text">
          <span>广告粘贴完成</span>
        </span>
      </div>
      <div class="aui-footer-btn" @click="goMoney">
        <upload-button :path="path" :success="uploadSuccess">
          拍照确认&nbsp开始赚钱
        </upload-button>
      </div>
    </footer>
    <wux-popup closable :visible="visible" title="拍照确认图片" @close="closePop">
      <div class="pop-img">
        <img :src="checkImg" alt="">
      </div>
      <div>
        <wux-button block type="positive" @tap="confirmActivePaste">确认</wux-button>
      </div>
    </wux-popup>
  </div>
</template>
<script>
import { getQuery } from '@libs/utils';
import ServicePointRow from '@components/row/ServicePointRow';
import UploadButton from '@components/upload/UploadButton'
export default {
  data() {
    return {
      // 文件上传的路径
      path: {
        path: `service/check`
      },
      // pop是否显示
      visible: true,
      // 上传的确认图片
      checkImg: 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/service/check/wx212ce8e249e36ef4.o6zAJs64KXfZ8SWRB2IGyk6alpvw.Ka2LrJ8PB17Vfbc346b1ba5f83d19781148988cb9fac.png'
    }
  },
  components: {
    ServicePointRow,
    UploadButton,
  },
  methods: {
    goPoint() {
      // wx.openLocation({
      //   latitude: 41.12154,
      //   longitude: 122.0518,
      //   name: "去的地方",
      //   scale: 15
      // })
    },
    // 关闭弹窗
    closePop() {
      this.visible = false
    },
    // 确认已经粘贴、成功后去执行任务
    async confirmActivePaste() {
      const { active_id } = getQuery()
      const params = {
        url: 'service-point/active/paste',
        payload: {
          active_id: active_id,
          paste_img: this.checkImg
        },
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        wx.redirectTo({ url: '/pages/map/trip_clock' });
      }
    },
    // 图片上传成功
    uploadSuccess(img) {
      this.checkImg = img
      this.visible = true
    },
    // 去执行任务
    goActive() {
      wx.redirectTo({ url: '/pages/map/trip_clock' });
    }
  }
}
</script>

<style lang="less" scoped>
  .service-point {
    background: #f7f8f9;
    width: 100%;
    height: calc(100vh - 20rpx);
    padding-top: 20rpx;

    .se-list {
      height: calc(100vh - 110rpx);
      overflow: hidden;
      .se-accept {
        width: calc(100vw - 40rpx);
        height: 100rpx;
        background: white;
        margin-left: 20rpx;
        margin-right: 20rpx;
        border-radius: 10rpx;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    // 底部按钮
    .ac-footer {
      width: 100%;
      position: absolute;
      bottom: 0rpx;
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
    .pop-img {
      width: 100%;
      height: 370rpx;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>


