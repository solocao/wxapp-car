<template>
  <div class="car-brand-list">
    <div v-for="(brand,index) in brandList" :key="index">
      <div class="brand-title">
        {{brand.name}}
      </div>
      <div class="car-detail">
        <div class="car-item" v-for="(car,ii) in brand.car" :key="ii" @click.stop="open">
          <div class="item-img">
            <img :src="car.img" alt="">
          </div>
          <div class="car-name">
            <p>{{car.name}}</p>
          </div>
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
import { getQuery } from '@libs/utils';
export default {
  data() {
    return {
      visible: false,
      brandList: []
    };
  },
  methods: {
    // 获取品牌
    async getBrand() {
      const { category_name = '奥迪' } = getQuery();
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
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      console.log('关闭了');
    },
  },
  mounted() {
    // this.getBrand();

    this.brandList = [{ "car": [{ "batch_at": ["2018年款", "2017年款", "2016年款"], "_id": "5c0fad1e9548b0991ec0dcb1", "name": "奥迪A4L", "img": "http://feiyuoss.oss-cn-hangzhou.aliyuncs.com/car/category/2018-12-11/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-11-19%20%E4%B8%8B%E5%8D%883.42.50.png" }, { "batch_at": ["2018年款", "2017年款", "2016年款"], "_id": "5c0fad1e9548b0991ec0dcb1", "name": "奥迪A4L", "img": "http://feiyuoss.oss-cn-hangzhou.aliyuncs.com/car/category/2018-12-11/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-11-19%20%E4%B8%8B%E5%8D%883.42.50.png" }, { "batch_at": ["2018年款", "2017年款", "2016年款"], "_id": "5c0fad1e9548b0991ec0dcb1", "name": "奥迪A4L", "img": "http://feiyuoss.oss-cn-hangzhou.aliyuncs.com/car/category/2018-12-11/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-11-19%20%E4%B8%8B%E5%8D%883.42.50.png" }, { "batch_at": ["2018年款", "2017年款", "2016年款"], "_id": "5c0fad1e9548b0991ec0dcb1", "name": "奥迪A4L", "img": "http://feiyuoss.oss-cn-hangzhou.aliyuncs.com/car/category/2018-12-11/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-11-19%20%E4%B8%8B%E5%8D%883.42.50.png" }], "_id": "5c0fad0e9548b0991ec0dcb0", "name": "一汽-大众奥迪" }, { "car": [{ "batch_at": ["2017年款", "2016年款", "2013年款"], "_id": "5c0faed25a3b2d9e40c79579", "name": "奥迪R8", "img": "http://feiyuoss.oss-cn-hangzhou.aliyuncs.com/car/category/2018-12-11/s9018_200.jpg" }], "_id": "5c0fae7f5a3b2d9e40c79578", "name": "Audi Sport" }]


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

