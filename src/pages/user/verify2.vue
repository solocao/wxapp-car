<template>
  <div class="verify">

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
.verify {
  padding: 10px;
  font-size: 14px;

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

  .flex-space-between {
    display: flex;
    justify-content: space-between;
  }
}
</style>
