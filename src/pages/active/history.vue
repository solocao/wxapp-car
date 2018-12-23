<!-- 活动历史 -->
<template>
  <div class="active-history">
    <history-row></history-row>
  </div>
</template>
<script>
import HistoryRow from '@components/row/HistoryRow'
export default {
  components: {
    HistoryRow

  }

}
</script>
<style lang="less" scoped>
  .active-history {
    height: 100%;
    width: 100%;
    background: #f0f0f0;
  }
</style>


