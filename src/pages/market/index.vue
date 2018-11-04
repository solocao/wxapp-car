<template>
  <div class="market">
    <Swiper :images="images" />
    <market-tip></market-tip>
    <!-- <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取用户信息</button> -->
    <div class="active-container">
      <active-row v-for="i in 8" :key="i"></active-row>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/swiper';
import ActiveRow from '@/components/row/ActiveRow';

import MarketTip from '@/components/MarketTip';

export default {
  components: {
    Swiper,
    ActiveRow,
    MarketTip,
  },
  data() {
    return {
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
    };
  },
  methods: {
    bindGetUserInfo(e) {
      console.log(e.mp);
    },
    async test() {
      const params = {
        url: '/demo',
        payload: {
          saf: 'af',
        },
        auth: true,
      };
      const result = await this.get(params);
      console.log(result);
    },

  },
  mounted() {
    this.test();
  },
};
</script>

<style style="less" scoped>
.market {
  padding: 10px;
}
.active-container {
  width: 100%;
}
</style>
