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
    <button @click="go">跳转</button>
    <wux-grids>
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
      <wux-grid thumb="http://pbqg2m54r.bkt.clouddn.com/logo.png" label="Wux Weapp" />
    </wux-grids>
    <wux-cell-group>
      <wux-cell hover-class="none">
        <div class="flex-space-between">
          <span>预计收益</span>
          <span>***(身份认证后查看收益)</span>
        </div>
      </wux-cell>
      <wux-cell hover-class="none">
        <div class="flex-space-between">
          <span>广告类型</span>
          <span>车内+车外</span>
        </div>
      </wux-cell>
      <wux-cell hover-class="none">
        <div class="flex-space-between">
          <span>收益时间</span>
          <span>08月12日 ～ 09月11日</span>
        </div>
      </wux-cell>
      <wux-cell hover-class="none">
        <div class="flex-space-between">
          <span>安装时间</span>
          <span>08月12日 ～ 09月11日</span>
        </div>
      </wux-cell>
      <wux-cell hover-class="none">
        <div class="flex-space-between">
          <span>车辆要求</span>
          <span>南京市车辆</span>
        </div>
      </wux-cell>
      <wux-cell hover-class="none">
        <div class="flex-space-between">
          <span>车辆颜色</span>
          <span>黑色、粉色、银色、蓝色、紫色</span>
        </div>
      </wux-cell>
    </wux-cell-group>
  </div>
</template>

<script>
import Swiper from '@/components/swiper';
import TipHome from '@/components/TipHome';

export default {
  data() {
    return {
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
    };
  },

  methods: {
    go() {
      console.log(this.$router.currentRoute);
      // wx.switchTab({ url: '/pages/my' });


      this.$router.push({ path: '/pages/my', switchTab: true });
    },
  },
  components: { Swiper, TipHome },
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
</style>

