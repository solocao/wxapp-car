<template>
  <div class="active-detail">
    <scroll-view scroll-y class="ac-scroll">
      <div class="cover-img">
        <img :src="data.cover_img">
      </div>
      <div class="active-content">
        <div class="ac-title">
          {{data.title}}
        </div>
        <div class="ac-content">
          <wxParse :content="data.content" />
        </div>
      </div>
      <div class="ac-date">
        <div class="ac-item">
          <span class="ac-t">开始日期</span>
          <p class="ac-d">{{start_at}}</p>
        </div>
        <div class="ac-item">
          <span class="ac-long">共30天</span>
        </div>
        <div class="ac-item">
          <span class="ac-t">结束日期</span>
          <p class="ac-d">{{end_at}}</p>
        </div>
      </div>
      <div class="ac-detail">
        <div class="nc-cell">
          <div>广告类型</div>
          <div>车外</div>
        </div>
        <div class="nc-cell">
          <div>预计收益</div>
          <div>{{data.price}}元</div>
        </div>
        <div class="nc-cell">
          <div>投放车辆</div>
          <div>{{data.count}}辆</div>
        </div>
        <div class="nc-cell">
          <div>投放时间</div>
          <div>{{create_at}}</div>
        </div>
        <active-join></active-join>
      </div>
    </scroll-view>
    <footer class="ac-footer">
      <div class="aui-footer-btn aui-order-price">
        <span class="aui-order-price-text">
          <span>预计收益 ￥</span>
          <span class="de-price">{{data.price}}</span>
        </span>
      </div>
      <div class="aui-footer-btn" @click="goMakeMoney">去赚钱</div>
    </footer>
  </div>
</template>
<script>
import { getQuery } from '@libs/utils';
import ActiveJoin from '@components/join/ActiveJoin';
import wxParse from 'mpvue-wxparse';
import { mapState, } from 'vuex';
import dayjs from 'dayjs'

export default {
  data() {
    return {
      week: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      data: {
        state: 0,
        show_img: [null],
        _id: "5bf90304fdfaf96f4558b615",
        title: "a", brief: "dasf",
        cover_img: "http://hehecms.oss-cn-hangzhou.aliyuncs.com/verify/2018-11-24/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-11-19%20%E4%B8%8B%E5%8D%884.15.16.png",
        content: "<p>asfasf</p>",
        start_at: "2018-11-24T07:40:14.600Z",
        end_at: "2018-12-01T07:40:14.600Z",
        create_at: "2018-11-24T07:51:32.439Z",
      },
      form: {
        name: 'saff'
      }
    }
  },
  computed: {
    ...mapState(['user']),
    start_at() {
      if (this.data.start_at !== undefined) {
        const week = this.week[dayjs(this.data.start_at).format('d')]
        return dayjs(this.data.start_at).format('MM月DD日') + week
      }
      return '--'
    },
    end_at() {
      if (this.data.end_at !== undefined) {
        const week = this.week[dayjs(this.data.end_at).format('d')]
        return dayjs(this.data.end_at).format('MM月DD日') + week
      }
      return '--'
    },
    create_at() {
      if (this.data.create_at !== undefined) {
        return dayjs(this.data.create_at).format('YYYY年MM月DD日')
      }
      return '--'
    }
  },
  methods: {
    // 去赚钱按钮点击事件
    async goMakeMoney() {
      const params = {
        url: "active/join",
        payload: {
          active_id: this.data._id
        },
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        const { active_id } = getQuery()
        // 未粘贴广告，跳转到服务点，
        wx.navigateTo({
          url: `/pages/active/service_point?active_id=${this.data._id}`
        })
      }
      if (result.code === 2) {
        // 已经粘贴了广告，直接进入页面
        wx.navigateTo({
          url: `/pages/map/trip_clock?active_id=${this.data._id}`
        })
      }
    },
    // 活动详情
    async  activeDetail() {
      const { active_id } = getQuery()
      const params = {
        url: 'active/detail',
        payload: {
          active_id: active_id,
        },
        auth: true
      }
      const result = await this.post(params);
      if (result.code === 1) {
        this.data = result.data;
      }
    },
    stime(time) {
      return 'asfas'
      console.log(time)
      console.log(dayjs(time).format('YYYY-MM-DD'))
      return dayjs(time).format('YYYY-MM-DD')
    }
  },
  mounted() {
    this.activeDetail()
  },
  components: {
    ActiveJoin,
    wxParse
  }

}
</script>
<style lang="less" scoped>
  .active-detail {
    background: #f4f4f4;
    .ac-scroll {
      height: calc(100vh - 90rpx);
    }
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
      position: absolute;
      bottom: 0px;
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



