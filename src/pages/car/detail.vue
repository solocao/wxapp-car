<template>
  <div class="car-brand-list">
    <div v-for="(brand,index) in brandList" :key="index">
      <div class="brand-title">
        {{brand.name}}
      </div>
      <div class="car-detail">
        <div class="car-item" v-for="(car,ii) in brand.car" :key="ii" @click.stop="open(brand,car)">
          <div class="item-img">
            <img :src="car.img" alt="">
          </div>
          <div class="car-name">
            <p>{{car.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 车辆款式的年份选择 -->
    <wux-popup closable :visible="visible" title="车辆款式" @close="close">
      <div class="car-batch-wrap">
        <div class="car-batch-item" v-for="(batch,index) in batchList" :key="index" @click="selectBatch(batch)">
          {{batch}}
        </div>
      </div>
    </wux-popup>
  </div>
</template>
<script>
import { getQuery } from '@libs/utils';
export default {
  data() {
    return {
      visible: false,
      brandList: [],
      // 年份款式
      batchList: [],
      car: null,
      // 车辆型号
      model: {
        // 大品牌型号
        category_name: null,
        // 具体小品牌的型号
        brand_name: null,
        // 汽车名称
        car_name: null,
        // 生产日期
        batch_at: null
      }
    };
  },
  methods: {
    // 获取品牌
    async getBrand() {
      const { category_name = '奥迪' } = getQuery();
      this.model.category_name = category_name;
      const params = {
        url: `car/brand/${category_name}`,
        payload: {},
        auth: true
      }
      const result = await this.get(params)
      if (result.code === 1) {
        this.brandList = result.data
      }
      console.log(result)
    },
    open(brand, car) {
      this.model.brand_name = brand.name;
      this.model.car_name = car.name;
      this.batchList = car.batch_at;
      console.log(this.model)
      this.visible = true;

    },
    close() {
      this.visible = false;
    },
    selectBatch(batch) {
      this.model.batch_at = batch;
      wx.redirectTo({ url: `/pages/user/verify?car_model=${JSON.stringify(this.model)}` });
    }
  },
  mounted() {
    this.getBrand();
  }
};
</script>

<style lang="less" scoped>
  .car-brand-list {
    .brand-title {
      font-size: 14px;
      color: grey;
      height: 50rpx;
      background: #efefef;
      padding-left: 10rpx;
      display: flex;
      align-items: center;
    }
  }
  .car-detail {
    display: flex;
    flex-wrap: wrap;

    .car-item {
      height: 200rpx;
      width: calc(33.33vw - 20rpx);
      margin: 10rpx;
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
        height: 160rpx;
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
  }

  .car-batch-wrap {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    .car-batch-item {
      width: calc(50% - 20rpx);
      margin: 10rpx;
      box-shadow: #f4f4f4 0px 1px 2px 1px;
      background: #048fff;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: white;
      border-radius: 2rpx;
    }
  }
</style>

