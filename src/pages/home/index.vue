<template>
  <div class="home">
    <Swiper :images="images" />
    <tip-home></tip-home>
    <div class="show-pannel">
      <div class="show-item">
        <div class="show-icon">
          <img :src="img.peccancy" alt="">
        </div>
        <div class="show-title">
          <span>违章次数</span>
          <span class="orange-shadow show-num">120次</span>
        </div>
      </div>
      <div class="show-item">
        <div class="show-icon">
          <img class="sign-img" :src="img.sign" alt="">
        </div>
        <div class="show-title">
          <span>每日签到</span>
          <span class="blue-shadow show-num">30天</span>
        </div>
      </div>

    </div>

    <div>
      <income-rank></income-rank>
    </div>
    <wux-dialog id="wux-dialog" />
    <div class="button-box">
      <button ref="userbtn" class="button" open-type="getUserInfo" @getuserinfo="getUserInfo">同步微信头像</button>
    </div>
    <div v-if="modal" class="c-modal">
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
import { mapState, mapMutations } from 'vuex';
import Swiper from '@/components/swiper';
import TipHome from '@/components/TipHome';
import IncomeRank from '@/components/list/IncomeRank';
import { $wuxDialog } from '../../../static/wux/index';
import { rejects } from 'assert';

export default {
  components: { Swiper, TipHome, IncomeRank },
  data() {
    return {
      img: {
        sign: 'https://feiyuoss.oss-cn-hangzhou.aliyuncs.com/mini/img/home/sign.png',
        peccancy: 'https://feiyuoss.oss-cn-hangzhou.aliyuncs.com/mini/img/home/peccancy.png'
      },
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
      openid: null,
      modal: false

    };
  },
  computed: {
    ...mapState(['user', 'login']),
  },

  methods: {
    ...mapMutations([
      'set'
    ]),
    async getUserInfo(e) {
      // console.log(e.target.rawData);
      // 已经注册登录、则直接去认证
      if (this.login) {
        wx.navigateTo({
          url: '/pages/user/verify'
        })
        return '';
      }

      // 没有注册、则先注册后登录
      const params = {
        url: 'mini-program/user/register',
        payload: {
          openid: this.openid,
          user_info: e.target.rawData
        }
      }

      const result = await this.post(params);
      if (result.code === 1) {
        this.set({ user: result.data, login: true })
        wx.navigateTo({
          url: '/pages/user/verify'
        })
      }
    },
    go() {
      console.log(this.$router.currentRoute);
      // wx.switchTab({ url: '/pages/my' });
      this.$router.push({ path: '/pages/my', switchTab: true });
    },
    // 用户登录
    async userLogin(code) {
      const params = {
        url: `mini-program/user/${code}`,
        payload: {}
      }
      const result = await this.get(params);
      if (result.code === 1) {
        this.set({ user: result.data, login: true })
        console.log('看看用户数据')
        console.log(this.user)
      } else {
        this.openid = result.data.openid;
      }
    },
  },
  mounted() {
    const self = this;
    wx.login({
      success(res) {
        self.userLogin(res.code)
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
    background: #f4f4f4;

    .grids-icon {
      padding: 10px 0;
      box-shadow: 0rpx 0rpx 4rpx #7e7e7e;
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

  .show-pannel {
    display: flex;
    justify-content: space-around;

    .show-item {
      height: 140rpx;
      width: 48%;
      border-radius: 4px;
      display: flex;
      color: grey;
      background: white;

      .show-icon {
        height: 140rpx;
        width: 140rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20rpx;

        img {
          width: 100rpx;
          height: 100rpx;
        }

        .sign-img {
          width: 80rpx;
          height: 80rpx;
        }
      }
      .show-title {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin-right: 40rpx;

        .show-num {
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 3px;
        }
      }
    }
  }

  .creditGold {
    font-weight: bold;
    color: #fe2600;
    letter-spacing: -3px;
    text-shadow: 0 0 1rpx #fe2600;
  }

  .orange-shadow {
    font-weight: bold;
    color: #fe8300;
    letter-spacing: -3px;
    text-shadow: 0 0 1rpx #fe8300;
  }

  .blue-shadow {
    font-weight: bold;
    color: #3aadfe;
    letter-spacing: -3px;
    text-shadow: 0 0 1rpx #3aadfe;
  }
</style>

