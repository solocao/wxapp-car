<template>
  <div class="income-rank">
    <div class="income-content">
      <income-rank-item v-for="i in 4" :key="i"></income-rank-item>
    </div>
    <div class="i-title">
      收益达人
    </div>
  </div>
</template>
<script>
import IncomeRankItem from '@/components/list/IncomeRankItem';

export default {
  data() {
    return {
    };
  },
  components: { IncomeRankItem },
};
</script>

<style lang="less" scoped>
.income-rank {
  margin-top: 10rpx;
  margin-right: -20rpx;
  margin-left: -20rpx;
  position: relative;
  .i-title {
    position: absolute;
    top: -60rpx;
    width: calc(100vw - 60rpx);
    height: 100rpx;
    line-height: 100rpx;
    vertical-align: middle;
    font-size: 14px;
    background: #fefffe;
    border-bottom: 1px solid #f7f8f8;
    color: #575757;
    box-shadow: 0 3px 10px #e2e2e2;
    border-radius: 10rpx;
    margin-left: 30rpx;
    margin-right: 30rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4499ff;
    font-weight: bold;
  }

  .income-content {
    background: white;
    // margin-top: -40rpx;
    transform: translateZ(100rpx);
    margin-top: 90rpx;
    padding-top: 40rpx;
  }
}
</style>

