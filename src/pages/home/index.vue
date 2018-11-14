<template>
  <div class="home">
    <Swiper :images="images" />
    <tip-home></tip-home>
    <wux-row>
      <wux-col span="4" class="grids-icon">
        <div class="grids-grid-icon"><img src="http://a-ui.cn/dome/car/images/icon-png/icon-ax-1.png" alt=""></div>
        <p class="grids-grid-label">违章查询</p>
        <p class="grids-grid-num">6次</p>
      </wux-col>
      <wux-col span="4" class="grids-icon">
        <div class="grids-grid-icon"><img src="http://a-ui.cn/dome/car/images/icon-png/icon-ax-2.png" alt=""></div>
        <p class="grids-grid-label">保险到期</p>
        <p class="grids-grid-num">299天</p>
      </wux-col>
      <wux-col span="4" class="grids-icon">
        <div class="grids-grid3-cont">
          <div class="grids-grid-icon"><img src="http://a-ui.cn/dome/car/images/icon-png/icon-ax-3.png" alt=""></div>
          <p class="grids-grid-label">保养到期</p>
          <p class="grids-grid-num">188天</p>
        </div>
      </wux-col>
    </wux-row>
    <div>
      <income-rank></income-rank>
    </div>
    <wux-dialog id="wux-dialog" />
    <div class="button-box">
      <button ref="userbtn" class="button" open-type="getUserInfo" @getuserinfo="getUserInfo">同步微信头像</button>
    </div>
    <div class="c-modal">
      <div class="c-mask"></div>
      <div class="c-card">
        <div class="c-head">
          用户认证
        </div>
        <div class="c-content">
          <p>欢迎使用飞鱼汽车营销平台。</p>
          <p>为了享受全部功能服务，请进行用户认证，完善信息。</p>
        </div>
        <div class="c-bottom">
          <button class="c-btn" ref="userbtn" open-type="getUserInfo" @getuserinfo="getUserInfo">退出</button>
          <button class="c-btn" ref="userbtn" open-type="getUserInfo" @getuserinfo="getUserInfo">认证</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Swiper from '@/components/swiper';
import TipHome from '@/components/TipHome';
import IncomeRank from '@/components/list/IncomeRank';
import { $wuxDialog } from '../../../static/wux/index';
import { rejects } from 'assert';

export default {
  components: { Swiper, TipHome, IncomeRank },
  data() {
    return {
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
      user: null,
      openid: null,
    };
  },
  computed: {
    ...mapState(['userinfo']),
  },

  methods: {
    async getUserInfo(e) {
      console.log(e.target.rawData);
      console.log(this.user);

      if (this.user !== null) {
        wx.navigateTo({
          url: '/pages/user/verify'
        })
        return '';
      }

      const params = {
        url: 'mini-program/user/register',
        payload: {
          openid: this.openid,
          user_info: e.target.rawData
        }
      }

      const result = await this.post(params);
      if (result.code === 1) {
        wx.redirectTo({
          url: 'test?id=1'
        })
      }
    },
    go() {
      console.log(this.$router.currentRoute);
      // wx.switchTab({ url: '/pages/my' });
      this.$router.push({ path: '/pages/my', switchTab: true });
    },
    async login(code) {
      const params = {
        url: `mini-program/user/${code}`,
        payload: {}
      }
      const result = await this.get(params);
      if (result.code === 1) {
        this.user = result.data;
      } else {
        this.openid = result.data.openid;
      }
    },
  },
  mounted() {
    const self = this;
    wx.login({
      success(res) {
        self.login(res.code)
      },
    });

    // console.log(this.$refs.userbtn);
    // $wuxDialog().open({
    //   resetOnClose: true,
    //   title: '车主身份认证',
    //   content: '为了提高更好的服务，需要进行车主身份认证',
    //   buttons: [{
    //     text: '退出',
    //     onTap(e) {
    //       console.log(e);
    //     },
    //   },
    //   {
    //     text: '认证',
    //     type: 'primary',
    //     onTap(e) {
    //       console.log('我要去认证啦');
    //       console.log(e);
    //       wx.login({
    //         success(res) {
    //           console.log(res.code);
    //           wx.getUserInfo({
    //             success: (res1) => {
    //               this.userInfo = res1.userInfo;
    //             },
    //           });
    //         },
    //       });
    //     },
    //   },
    //   ],
    // });
  },

};
</script>
<style lang="less" scoped>
.home {
  padding: 10px;

  .grids-icon {
    padding: 10px 0;
    .grids-grid-icon {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .grids-grid-label {
      display: block;
      text-align: center;
      color: #000;
      font-size: 12px;
    }
    .grids-grid-num {
      display: block;
      text-align: center;
      color: #3598dc;
      font-size: 16px;
    }
  }
}

.c-modal {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .c-mask {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: #000;
  }

  .c-card {
    width: 500rpx;
    height: 380rpx;
    background: white;
    position: relative;
    border-radius: 5px;
    .c-head {
      font-size: 16px;
      font-weight: bold;
      color: #363636;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80rpx;
      color: #048fff;
      border-bottom: 2px solid #048fff;
    }
    .c-content {
      font-size: 14px;
      color: #363636;
      padding: 40rpx;
    }

    .c-bottom {
      position: absolute;
      bottom: 10px;
      width: 100%;
      display: flex;
      .c-btn {
        width: 40%;
        font-size: 14px;
        background-color: #048fff;
        border: none;
        border-radius: 2px;
        color: white;
      }
    }
  }
}
</style>

