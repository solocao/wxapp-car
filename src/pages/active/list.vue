<template>
  <div class="active-list">
    <active-row></active-row>
  </div>
</template>
<script>
import ActiveRow from '@components/list/ActiveRow'
export default {
  data() {
    return {

    }
  },
  components: {
    ActiveRow
  }
}
</script>
<style lang="less" scoped>
.active-list {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f4f4f4;
}
</style>

