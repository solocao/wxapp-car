<template>
  <div class="income-rank">
    <div class="i-title">
      收益达人
    </div>
    <income-rank-item v-for="i in 4" :key="i"></income-rank-item>
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
  .i-title {
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    padding-left: 10px;
    font-size: 14px;
    background: #fefffe;
    border-bottom: 1px solid #f7f8f8;
    color: #575757;
  }
}
</style>

