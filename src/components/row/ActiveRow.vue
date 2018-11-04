<template>
  <div class="active-row">
    <img class="a-img" src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1664757423.jpg" alt="">
    <div class="a-text">
      <div class="a-title">
        发烧发烧发烧
      </div>
      <div class="a-info">
        <span>
          asfsf
        </span>
        <span>
          23评
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.active-row {
  height: 90px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  .a-img {
    width: 100px;
    height: 75px;
    margin-right: 10px;
  }
  .a-text {
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
  }
  .a-text {
    font-size: 15px;
  }
  .a-info {
    color: #aaa;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>

