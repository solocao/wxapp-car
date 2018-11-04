<template>
  <div class="active-row">
    <img class="a-img" src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1664757423.jpg" alt="">
    <div class="a-text">
      <div class="a-title">
        发烧发烧发烧
      </div>
      <div class="a-profit">
        <div>
          预计收益
          <span>***（身份认证后可查看收益）</span>
        </div>
        <span>
          已结束
        </span>
      </div>
      <div class="a-date">
        投放时间 <span>08月12日 ～ 09月11日</span>
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
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-right: 10px;
  margin-left: 10px;
  .a-img {
    width: 68px;
    height: 68px;
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
  .a-profit {
    color: #aaa;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .a-date {
    color: #aaa;
    font-size: 12px;
  }
}
</style>

