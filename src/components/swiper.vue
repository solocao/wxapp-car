<template>
  <div class="swiper-wraper">
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in images" :key="index">
        <swiper-item>
          <image :src="item.url" mode="aspectFill" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
    };
  },
};
</script>

<style lang="less" scoped>
.swiper-wraper {
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  border-radius: 6px;
}

swiper-item {
  width: auto;
  height: 100%;
  text-align: center;
  font-size: 50rpx;
  box-sizing: border-box;

  image {
    width: 100%;
    height: 100%;
  }
}
</style>

