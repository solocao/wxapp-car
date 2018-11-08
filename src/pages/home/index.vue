<template>
  <div class="home">
    <Swiper :images="images" />
    <tip-home></tip-home>
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
}
</style>

