<template>
  <div class="aui-activity">
    <div class="aui-activity-item">
      <div class="aui-flex b-line">
        <div class="aui-flex-hos">
          <img src="../../static/images/task/hos-001.jpg" alt="">
        </div>
        <div class="aui-flex-box">
          <h2>灌云鼎大厦</h2>
          <div class="aui-flex-address aui-flex">
            <span class="aui-flex-box">密云-密云</span>
            <span class="aui-flex-price">31000 <span>元/㎡起</span></span>
          </div>
          <p>建筑面积139-800㎡</p>
          <div class="aui-pattern">
            <span class="aui-pattern-one">在售</span>
            <span class="aui-pattern-two">别墅</span>
            <span>山景</span>
            <span>投资</span>
          </div>
        </div>
      </div>
      <div class="aui-flex">
        <div class="aui-flex-box">
          <h4> 总价499万/套起</h4>
          <h5><span>2434</span>人已经报名</h5>
        </div>
        <div class="aui-flex-button">
          <button>获取优惠</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.aui-activity-item {
  background: #fff;
  display: block;
  position: relative;
  margin-bottom: 15px;
}
.aui-flex {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
  .aui-flex-hos {
    width: 120px;
    height: 83px;
    margin-right: 10px;
    position: relative;
    img {
      width: 100%;
      height: 80px;
      display: block;
      border: none;
      border-radius: 3px;
    }
  }
}

.aui-flex-button button {
  background-image: linear-gradient(to right, #02a457, #5bc547);
  background-color: #02a457;
  color: #fff;
  border-radius: 20px;
  border: none;
  font-size: 12px;
  height: 34px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aui-flex-box {
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}
.aui-flex-box h4 {
  font-size: 12px;
  color: #fa4600;
  font-weight: normal;
}

.aui-flex-box h5 {
  color: #9aa0a6;
  font-weight: normal;
}

.aui-flex-box h5 em {
  color: #fa4600;
  font-style: normal;
  margin-right: 0.2rem;
}

.aui-flex-box h2 {
  font-weight: normal;
  font-size: 12px;
  color: #333;
}

.aui-flex-address {
  font-size: 12px;
  width: 100%;
  padding: 0;
}

.aui-flex-box p {
  color: #676c73;
  font-size: 12px;
}

.aui-flex-address .aui-flex-box {
  color: #676c73;
}

.aui-flex-price {
  color: #fe5019;
  font-weight: bold;
  font-size: 12px;
}

.aui-flex-price em {
  font-style: normal;
  font-size: 12px;
  font-weight: normal;
}

.aui-pattern {
  position: relative;
  overflow: hidden;
}
.aui-pattern em {
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  color: #9aa0a6;
  font-size: 12px;
  font-style: normal;
  padding: 0 2px;
}

.aui-pattern {
  .aui-pattern-one {
    border: 1px solid #dcecfb;
    background: #dcecfb;
    color: #678eb0;
    font-size: 12px;
  }
  .aui-pattern-two {
    border: 1px solid #ecf5e2;
    background: #ecf5e2;
    color: #698e60;
    font-size: 12px;
  }
}

.aui-comm {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
}

.b-line {
  position: relative;
}

.b-line:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 92%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  left: 15px;
}
</style>

