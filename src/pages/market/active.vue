<template>
  <div class="m-active">
    <div class="hot-head">
      <p>今日飙升榜top100</p>
    </div>
    <div class="m-active-list">
      <active-row-hot></active-row-hot>

    </div>
  </div>
</template>
<script>
import ActiveRowHot from '@/components/row/ActiveRowHot';

export default {
  components: {
    ActiveRowHot,
  },

};
</script>

<style lang="less" scoped>
.m-active {
  position: relative;
  .hot-head {
    width: 100%;
    height: 120px;
    color: #fff;
    text-align: center;
    background-image: url(http://www.17sucai.com/preview/1268063/2018-10-09/Hot/images/head-bg.jpg);
    background-size: 100%;
  }
  .m-active-list {
    position: absolute;
    top: 50px;
    left: 2%;
    width: 96%;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: #f4f4f4 0px 1px 1px 1px;
  }
}
</style>
