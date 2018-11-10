<template>
  <div class="active-row-hot">
    <div class="aui-goods-img">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3455249101,4063048586&fm=27&gp=0.jpg" alt="">
      <span class="aui-goods-top aui-goods-top-img">
        <img src="http://www.17sucai.com/preview/1268063/2018-10-09/Hot/images/icon-top-001.png" alt="">
      </span>
    </div>
    <div class="a-detail">
      <div class="a-head">经典原色 修身直筒</div>
      <div class="a-desc">全球购 lee/李牛仔裤男直筒 经典百搭牛仔裤百搭牛仔裤</div>
      <div class="a-tag">
        <!-- <span class="a-hot-tag"><i class="aui-hot-tag"></i>热度100℃</span> -->
        <span class="red-tag">6.2折 | 劵</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
    padding: 3px;
    font-style: normal;
  }
}
</style>
