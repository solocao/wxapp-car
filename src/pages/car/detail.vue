<template>
  <div>
    <div class="car-detail">
      <div class="car-item" v-for="i in 18" :key="i" @click.stop="open">
        <div class="car-brand">奔腾</div>
        <div class="item-img">
          <img src="http://www.17sucai.com/preview/1268063/2018-09-19/car/images/ad-im-001.png" alt="">
        </div>
        <div class="car-name">
          <p>911</p>
        </div>
      </div>
    </div>
    <wux-popup closable :visible="visible" title="车辆款式" @close="close">
      <div>
        <div class="car-wrap">
          <span class="car-select" v-for="r in 3" :key="r">
            2012款式
          </span>
        </div>
      </div>
      <div>
        <wux-button block type="positive" @tap="close">确认选择</wux-button>
      </div>
    </wux-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },

    close() {
      this.visible = false;
      console.log('关闭了');
    },
  },
};
</script>

<style lang="less" scoped>
.car-detail {
  padding: 10px;
  column-count: 3;
  column-gap: 10px;
  padding: 5px;
}
.car-item {
  height: 90px;
  margin-bottom: 10px;
  break-inside: avoid;
  box-shadow: #f4f4f4 0px 1px 2px 1px;
  .car-brand {
    height: 20px;
    font-size: 12px;
    color: grey;
    line-height: 20px;
    vertical-align: middle;
    text-align: center;
  }
  .item-img {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  }
  .car-name {
    color: #545657;
    font-size: 12px;
    text-align: center;
  }
}

.car-wrap {
  height: auto;
  .car-select {
    width: 45%;
    float: left;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid #048fff;
    margin-bottom: 10px;
  }
  .car-select:nth-child(even) {
    float: right;
  }
}
</style>

