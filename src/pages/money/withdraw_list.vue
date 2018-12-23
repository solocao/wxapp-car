<template>
  <div class="withdraw-list">
    <withdraw-row></withdraw-row>
  </div>
</template>
<script>
import WithdrawRow from '@components/row/WithdrawRow'
export default {
  components: {
    WithdrawRow
  },
  data() {
    return {

    }
  },

}
</script>
<style lang="less" scoped>
  .withdraw-list {
    background: #f0f0f0;
  }
</style>


