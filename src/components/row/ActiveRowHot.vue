<template>
  <div class="active-row-hot" @click="goDetail">
    <div class="aui-goods-img">
      <img :src="data.cover_img" alt="">
      <span class="aui-goods-top aui-goods-top-img">
        <img src="http://www.17sucai.com/preview/1268063/2018-10-09/Hot/images/icon-top-001.png" alt="">
      </span>
    </div>
    <div class="a-detail">
      <div class="a-head">{{data.title}}</div>
      <div class="a-desc">{{data.brief}}</div>
      <div class="a-tag">
        <!-- <span class="a-hot-tag"><i class="aui-hot-tag"></i>热度100℃</span> -->
        <span class="red-tag">收益 | ¥{{data.price}}</span>
        <span class="blue-tag">周期 | {{data.clock_days}}天</span>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    goDetail() {
      wx.navigateTo({
        url: `/pages/active/detail?active_id=${this.data._id}`
      })
    }
  },

};
</script>


<style lang="less" scoped>
  .active-row-hot {
    display: flex;
    position: relative;
    padding: 5px;

    .a-head {
      font-size: 13px;
      font-weight: bold;
    }

    .a-desc {
      font-size: 10px;
      color: grey;
    }

    .aui-goods-img {
      width: 110px;
      height: 80px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 4px;
      }

      .aui-goods-top {
        position: absolute;
        left: -3px;
        top: 0;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        line-height: 20px;
        color: #caa322;
        border-radius: 100%;
        font-style: italic;
      }

      .aui-goods-top-img {
        width: 40px;
        height: 40px;

        img {
          width: 100%;
          height: 100%;
          display: block;
          border: none;
        }
      }
    }
    .a-detail {
      flex: 1;
      color: #333;
      margin-left: 4px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .a-desc {
        color: #333333;
        font-size: 12px;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        margin: 2px 0;
      }
    }
  }

  .aui-hot-tag {
    background-image: url(http://www.17sucai.com/preview/1268063/2018-10-09/Hot/images/icon-hot.png);
    background-size: 21px;
    display: block;
    width: 21px;
    height: 30px;
    position: absolute;
    left: -1px;
    top: -7px;
    background-repeat: no-repeat;
  }
  .aui-goods-price {
    color: #ff1e32;
    text-decoration: none;
    font-size: 16px;
  }
  .aui-flex {
    display: flex;
    box-align: center;
    align-items: center;
    position: relative;
  }

  .a-tag {
    height: 30px;
    position: relative;
    font-size: 12px;
    display: flex;
    align-items: center;

    .a-hot-tag {
      background: #ff1e32;
      border: 1px solid #ff1e32;
      color: #fff;
      font-size: 12px;
      font-style: normal;
      border-radius: 20px;
      padding: 3px 15px 3px 25px;
      position: relative;
    }
    .red-tag {
      background: #fff;
      color: #ff1e32;
      border: 1px solid #ff1e32;
      padding: 1px 5px;
      font-style: normal;
      font-size: 10px;
      border-radius: 4rpx;
    }
    .blue-tag {
      background: #fff;
      color: #03a3ff;
      border: 1px solid #03a3ff;
      padding: 1px 5px;
      font-style: normal;
      font-size: 10px;
      border-radius: 4rpx;
      margin-left: 8rpx;
    }

    .clock-tag {
      font-size: 10px;
      background: #3b8bdb;
      border-radius: 4rpx;
      color: white;
      padding: 2rpx 6rpx;
    }
  }
</style>
