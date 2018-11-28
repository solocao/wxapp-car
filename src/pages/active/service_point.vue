<template>
  <div class="service-point">
    服务点
    <service-point-row></service-point-row>
  </div>
</template>

<script>
import ServicePointRow from '@components/row/ServicePointRow';
export default {
  data() {

  },
  components: {
    ServicePointRow
  }
}
</script>

<style lang="less" scoped>
.service-point {
  background: #f7f8f9;
  width: 100%;
  height: calc(100vh);
}
</style>


