<template>
  <div class="container">
    <Swiper :images="images" />
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取用户信息</button>
    <div class="active-container">
      <active-row></active-row>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/swiper';
import ActiveRow from '@/components/row/ActiveRow';

export default {
  components: { Swiper, ActiveRow },
  data() {
    return {
      images: [
        { url: 'https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png' },
        { url: 'https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg' },
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
.active-container {
  width: 100%;
}
</style>
