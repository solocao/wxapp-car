<template>
  <div class="money">
    <money-income></money-income>
  </div>
</template>
<script>
import MoneyIncome from '@/components/row/MoneyIncome';

export default {
  components: {
    MoneyIncome,
  },

};
</script>
<style lang="less" scoped>
.money {
  padding: 10px;
}
</style>

