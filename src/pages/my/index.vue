<template>
  <section class="aui-flexView">
    <section class="aui-scrollView">
      <div class="aui-tour-content"></div>
      <div class="aui-tour-box">
        <div class="aui-tour-box-item">
          <div class="aui-tour-layout">
            <div class="aui-flex">
              <div class="aui-flex-user">
                <img :src="user.avatar" alt="">
              </div>
              <div class="aui-flex-box">
                <h3>{{user.nickname}}</h3>
                <div class="aui-flex-org" @click="goVerify">
                  <i class="icon icon-vip"></i> {{verify_text}}
                </div>
              </div>
            </div>
            <div class="aui-palace aui-palace-one b-line">
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <span>23元</span>
                </div>
                <div class="aui-palace-grid-text">
                  <h2>余额</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <span>123</span>
                </div>
                <div class="aui-palace-grid-text">
                  <h2>待收收益</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <span>9</span>
                </div>
                <div class="aui-palace-grid-text">
                  <h2>累计收益</h2>
                </div>
              </a>
            </div>
            <div class="aui-flex aui-flex-news">
              <div class="aui-flex-icon">
                <i class="icon icon-news"></i>
              </div>
              <div class="aui-flex-box">
                <p>您有 <span>8888元新用户大礼包</span>尚未领取</p>
              </div>
              <div class="aui-flex-arrow"></div>
            </div>
          </div>
          <div class="aui-tour-layout aui-tour-layout-pad">

            <div class="aui-palace aui-palace-two">
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-001.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-002.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-003.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-004.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
            </div>

          </div>
          <div class="aui-tour-layout aui-tour-layout-pad">

            <div class="aui-palace aui-palace-two">
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-005.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-006.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-007.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
              <a href="javascript:;" class="aui-palace-grid">
                <div class="aui-palace-grid-icon">
                  <img src="../../../static/img/my/icon-head-008.png" alt="">
                </div>
                <div class="aui-palace-grid-text">
                  <h2>XXX</h2>
                </div>
              </a>
            </div>

          </div>
          <div class="aui-tour-layout">

            <div class="aui-tour-news">
              <a href="javascript:;" class="aui-flex b-line">
                <div class="aui-flex-box-head">常用信息</div>
                <div class="aui-flex-box aui-flex-box-right">
                  帮助
                </div>
              </a>
              <a href="javascript:;" class="aui-flex b-line">
                <div class="aui-flex-box-head">我的任务</div>
                <div class="aui-flex-box aui-flex-box-right">
                  图片、文字
                </div>
              </a>
              <a href="javascript:;" class="aui-flex b-line">
                <div class="aui-flex-box-head">我的收藏</div>
                <div class="aui-flex-box aui-flex-box-right">
                </div>
              </a>
              <a href="javascript:;" class="aui-flex b-line">
                <div class="aui-flex-box-head">帮助中心</div>
                <div class="aui-flex-box aui-flex-box-right">
                </div>
              </a>
              <a href="javascript:;" class="aui-flex b-line">
                <div class="aui-flex-box-head">意见反馈</div>
                <div class="aui-flex-box aui-flex-box-right">
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { mapState, } from 'vuex';
export default {
  computed: {
    ...mapState(['user']),
    // 显示的认证文字
    verify_text() {
      switch (this.user.verify.state) {
        case 0: return '点击认证';
        case -1: return '认证不通过';
        case 1: return '认证会员';
        case 2: return '等待审核';
        default: return '点击认证'
      }
    }
  },
  methods: {
    // 跳转到认证页面
    goVerify() {
      wx.navigateTo({ url: '/pages/user/verify' });
    },
  },
};
</script>

<style lang="stylus" scoped>
  /* 必要布局样式css */
  .aui-flexView {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 12px;

    button {
      outline: 0;
    }

    img {
      border: 0;
    }

    .r-line {
      position: relative;
    }

    .r-line:after {
      content: '';
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;
      height: 100%;
      border-right: 1px solid #D9D9D9;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
      -webkit-transform-origin: 100% 0;
      transform-origin: 100% 0;
    }

    .b-line {
      position: relative;
    }

    .b-line:after {
      content: '';
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #e2e2e2;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
    }

    .aui-flex {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 15px;
      position: relative;
    }

    .aui-flex-box {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      color: #333;
    }

    .aui-scrollView {
      background: #F2F2F2;
      width: 100%;
      height: 100%;
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      position: relative;
      margin-top: -44px;
    }

    .aui-navBar-item {
      height: 44px;
      min-width: 45%;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 45%;
      -ms-flex: 0 0 45%;
      flex: 0 0 45%;
      padding: 0 0.9rem;
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      color: #fff;
      position: relative;
      font-size: 12px;
    }

    .aui-navBar-item:first-child {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
      margin-right: -25%;
      font-weight: normal;
      font-size: 12px;
    }

    .aui-navBar-item:last-child {
      -webkit-box-ordinal-group: 4;
      -webkit-order: 3;
      -ms-flex-order: 3;
      order: 3;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }

    .aui-center {
      -webkit-box-ordinal-group: 3;
      -webkit-order: 2;
      -ms-flex-order: 2;
      order: 2;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      height: 44px;
      width: 50%;
      margin-left: 25%;
    }

    .aui-center-title {
      text-align: center;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
      font-size: 12px;
      color: #333;
    }

    .icon {
      width: 20px;
      height: 20px;
      display: block;
      border: none;
      float: left;
      background-size: 20px;
      background-repeat: no-repeat;
    }

    .icon-return {
      margin-right: 0.5rem;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD90lEQVRoQ+2bj1EVMRDGv61AO1ArUCqQV4FSgVqBWIFagVCBUIFYgVCBWIFQgVjBOr+bhMkL9y+8472cc5lhmAe5y375ks3ut3mmgubujyX9kMTvAzO7LHh8sq7u/lbSF0mMjx03Y19uYzvSz90/SfoYnjk1MwbeenP3n5JehIFXZnY+1ohNAF+Y2f7Ygabs5+6evG8zwO7+MsweyzZtp5JgNDLcAHb3+HlKTF3vujazkxxw6IzdabuS9CvfdrcMu/trSV/D/mwbcCUJRnPA6Ww/NOg4yWsMZ3blNgD8XVz2DeBsb3YZPVfAEQ/O7czcHdbwvENt7oDx5M8AfCbp1RBaSTUBxvhH0UsPLOkU2mcApy6+D/eBJAZighiMz+wPnt9aMzNsPpL0XtJfSU8lHSa+pc+WUx4e63TOzWzl7gwgM7tKBt4aYEkfzOzI3TmHmXAak97YNdAuSgDzLiIbGKax93dyDks6ScByVI4Bi83FgIdmsPb/L4BrZ2hT+xaGN53B2p9fGL4OLr92pkrs49h6Eh64w/DOctwSBCV93R1xIKaOC+CF4ZLlU2PfZUln2dKypGtcpiU2LUt6iiUdKhLIRCif5MipxBtz6OMxFYLwLtSMmGujspD0x2S/hGAEymnP4RHybjQQwxHNW8szCVDkmlwTLxLb0xl5CMBjJSLsAPRezpa7v5GETpUDjbZXBRi5BYPHtrWa1EiZuCrAUddGQYSlk8igu7M8qfKtNZTH+IcgCv4emK16AGNoYOmyzSm5+50VkAIOz+OQyGiYNETCfMXUBbiPnZGA8e4oj0wO8mteCZkH4KAdxwJ6nBcqerG2e2euOvZ0fYDDsfI8IMDbsrdJvnPPSyUPJlvbnACP8daDtwbmBDiNaNrYwzFxBvfex5gT4DFVSECzHzvDxDkBZs+mYSFeN4pnKeMcX3uz38NtAAJbBCPRmcVunY5rNgz3MAbTeSTVKTTMHnCIpMiQUpavzOxZz6qYZ+CRxMswnNZwuX7UWtOtnuEQTd10ed6QL3/L2PxuZoST84q0QnQFe0RTHEv8NBfCwhLGc3NdMW/zdFrhkieX2UrafGPpgitPcUJI//b7buFWvYfD/uScbQswctYvEPn+i9AyAGe/kvbFSh1schw1qmXJFd9wHSqmkPiEw6GJ6okDplUtSzbvLvpOrlruAkTJmAvgKSoPJTO+7b4Lw+6eXsXtzVW3zc4U47n7n0RXa+545NLMvRXCKQyc8h0thYDmvnRbdYCz717VuikN3vBdZGN5RraK33kYEuA2HLuKxynXHkbAMdvJvwpThaUTGHFM1ka0tvZFrZD9ENJ1VgYmGHybr2DlcpP/9ptr/wD/GVVBxons2gAAAABJRU5ErkJggg==');
    }

    .icon-set {
      background-image: url('data:image/png;base64,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');
    }

    .icon-new {
      margin-left: 1rem;
      background-image: url('data:image/png;base64,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');
    }

    .aui-tour-content {
      width: 100%;
      height: 200px;
      background-image: linear-gradient(top bottom, #048FFF, #048FFF);
      background-color: #048FFF;
      border-radius: 0 0 50% 50%;
    }

    .aui-tour-box {
      width: 100%;
      position: relative;
      overflow: hidden;
      margin-top: -165px;
    }

    .aui-tour-box-item {
      padding: 15px;
    }

    .aui-tour-layout {
      background: #fff;
      border-radius: 10px;
      padding: 15px 20px;
      margin-bottom: 5px;
    }

    .aui-tour-layout .aui-flex {
      padding: 0;
    }

    .aui-flex-user {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      border: 1px solid #eeeeee;
      margin-right: 10px;
    }

    .aui-flex-user img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      display: block;
      border: none;
    }

    .aui-palace {
      padding: 10px 10px;
      position: relative;
      overflow: hidden;
    }

    .aui-palace-grid {
      position: relative;
      float: left;
      padding: 12px 1px 12px 1px;
      width: 33.333%;
      box-sizing: border-box;
      display: inline-block;
    }

    .aui-palace-grid-icon {
      width: 40px;
      height: 40px;
      margin: 0 auto;
      text-align: center;
    }

    .aui-palace-grid-icon img {
      display: block;
      width: 40px;
      height: 40px;
      border: none;
    }

    .aui-palace-grid-text {
      display: block;
      text-align: center;
      color: #333333;
      font-size: 13px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-top: 5px;
    }

    .aui-palace-grid-text h2 {
      font-size: 13px;
      font-weight: normal;
      color: #3e3e3e;
    }

    .aui-palace-one .aui-palace-grid-icon {
      height: auto;
    }

    .aui-flex-org {
      margin-top: 10px;
      border-radius: 20px;
      background-image: -webkit-gradient(linear, left top, right top, from(#3c4148), to(#71777f));
      background-image: -webkit-linear-gradient(left, #3c4148, #71777f);
      background-image: -moz-linear-gradient(left, #3c4148, #71777f);
      background-image: linear-gradient(to right, #3c4148, #71777f);
      background-color: #3c4148;
      width: 38%;
      color: #fff;
      height: 22px;
      line-height: 22px;
      padding-left: 10px;
      padding-right: 5px;
      font-size: 12px;
    }

    .icon-vip {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQwRUQ4QkFDREZBMTFFOEE5REVFMzI4QUQ4MDdFREMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQwRUQ4QkJDREZBMTFFOEE5REVFMzI4QUQ4MDdFREMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENDBFRDhCOENERkExMUU4QTlERUUzMjhBRDgwN0VEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENDBFRDhCOUNERkExMUU4QTlERUUzMjhBRDgwN0VEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjBGmcAAAWHSURBVHja7Fl9TFVlGH8uFFDqnCFf8hlewLTGLDT5UGAXIS9ckYvKQhuV5daSzT+aa2szVn+4yrVWo2W5OVfmVtpqYjQZJIXJNUD5uJePC0ok8iGIxsWlcaHzHDyX8/Gec95z+dhw97exc9/nvOe85/e+z/N7nvdFNzk5CQ8DvOAhgYeIh4iHiDIe4X6kZ5o0yZeXl/ocxK+JA31UBPTc6If6RitMTEywz+l0OmJ/sV2uH4dfzpzSSYigDKs9yAf3UXIofrUQstKTXe0Lly7Doc+OKr5T6zfIuha+SEteQTL4J8aTEWECEojk9WthTZxeMA5pLL5dy/d4iZfS3RnhIywkiGgPCQxYWMHe3tkNTqdTYMO2td1OXEE5NyP9nhPX4rsYH4PDw/Dp0RNw7/59to3XI19/D32DQ5L+s1UizZn8VtZYoO6Klf2N158rf5//POLuqvBnenXsSjbAuUDHtlZoCfw5WRGU5dd35Qts2ObLNZ84X8XUJlHu/pwQSU9aBzHRkQIbttE+564lZko7Q2L4+jwKRTtziffQ/pifr+LzJPl3W7VmoiT5OZnwxLKlxHtoN2dvVlQ8dxOll9i34/RREB0Z5hahwOX+kJ+dodjHbDRAoL+/W5MUFR7KuiipNHLVWiFBAfDegX0QviKYbXd0dcO7h0vh9p1RFyG1rP9ywTbGtXxUXM8Higq2wkefH6MmsGzpEni7eA+s0kez7d6+QXj/kyPkFSl+rdBFAhG7MgqKduRS+yrKa1pSAtWHpSYmCOSYVLPxxyrMy3aRQISGBMIbRTvJRFbH6okfR+tie3fv0OQmYnlWwlMx0RLb03F6MpHeGwOSzqNjYxKXIhEzbNzArGCkJiLo64aU56kCf3TsruT5nt4+MpHSYyfh3we1EQcsuw+9sx8iQoNlP8jP1xdeYWLDHaAc4/NyFUL4iiAmbt9kPEO4IlO12ymhbHOzu8lgnER5TEpYC8+sioG05HWCyrW8qgaOf/cTOB7MDrdKu/NNUGg2ui3XJ38shxOnywS2xYseh13mHDAaUsDb29tlt3Vchd9q66C2vhFGGBE6d/YH6Q4RcWvkDpRVnIcmW5uACL4sZ3MqG6RIBknhBLBym5Mxo4yMclxx/iJbMaOsvsBsyF7aboIlixdJ+lZU/wFVFy4p79mF/tcP/TeHIDhgucCOL9/HbGGNho3w1TenmV1giqrcqlcCU3J8jvnIPS+a2Rwmh+ZWu/rhgxi1dY2wbYuBeC86MpyNndkCrjT+KWHg5jCzardkc5kskYv18kTE2H/wAzaBcvjycAlxu3u9bwD2vlXiqiJQ6T4uOUA1Rktbp+IBhWz1a22zS1RMDtuZ+okvy2UV1cR+fDsqk9lIH198t1Kttfj4b9wJDU02qkESE+LZEodDFbM7vCeaBGyjnV8SJT4XT02kpc3u/lbX0tBENQiqGn92UaJ/rRGqC7YdvMSG/fnSqhYfKD5KBxezQgSRkZrI6j+HMyL34rexX8amDfRupbIako2V2O9Gbv8DXd1/Uw3mx8ho3pbpVbnWcx2s7V1T8cZcsc0BRUSLbDfbOrQf0ElkuJ5+VUyZqYIPPFtZLbhyJY2JSa5a0NzaSU9ETp8tl+mJYMLMTEtyrW5NbT1b3NVYGlx98D4payvnj2FJLSaOF9XDB/vVv2DU4aAeOI8JYm4Hh8p38MNSGB93unIHbW7SEh/EGBHHCTKva7RRDxwc4A8p65+dPnUcmp5NPN/C+5qIUMQH9QGdFvdCFORmke1bszSXLzTxoVii8PHnlRa2lKfVfazFyr/9YsY1mDg+Znz263DchdbOazDfoI0PRSLieLEw1fC8E6GMD01HpnVNtvknQhkfgq3uQofn/+weIh4iHiILC/8LMAB4j7dqwnAQXwAAAABJRU5ErkJggg==');
    }

    .aui-palace-one {
      padding-bottom: 0;
    }

    .aui-flex-arrow {
      position: relative;
    }

    .aui-flex-arrow:after {
      content: ' ';
      display: inline-block;
      height: 8px;
      width: 8px;
      border-width: 2px 2px 0 0;
      border-color: #9b9b9b;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
      top: -2px;
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 2px;
      border-radius: 1px;
    }

    .aui-tour-layout .aui-flex-news {
      padding-top: 15px;
    }

    .aui-tour-layout .aui-flex-news .aui-flex-box p {
      font-size: 12px;
      color: #999999;
      padding-left: 10px;
    }

    .aui-tour-layout .aui-flex-news .aui-flex-box p span {
      font-size: 12px;
      color: #2FAB3F;
      font-style: normal;
    }

    .icon-news {
      background-image: url('data:image/png;base64,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');
    }

    .aui-palace-two {
      padding: 0;
    }

    .aui-palace-two .aui-palace-grid {
      width: 25%;
    }

    .aui-tour-layout-pad {
      padding: 5px 0;
    }

    .aui-flex-box-right {
      position: relative;
      text-align: right;
      padding-right: 1rem;
      color: #999999;
      font-size: 12px;
    }

    .aui-flex-box-right:after {
      content: ' ';
      display: inline-block;
      height: 8px;
      width: 8px;
      border-width: 2px 2px 0 0;
      border-color: #bcbcbc;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
      top: -2px;
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 2px;
      border-radius: 2px;
    }

    .aui-flex-box-head {
      color: #333;
      font-size: 12px;
    }

    .aui-tour-news .aui-flex {
      padding: 10px 0;
    }
  }
</style>
