<template>
  <div class="money-income">
    <div class="a-img">
      <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2093889074,1920851261&fm=202&mola=new&crop=v1" alt="">
      <span class="a-tag">阿瑟费</span>
    </div>
    <div class="a-detail">
      <div class="a-title">再内向也不用怕，职场沟通小秘诀轻松教你</div>
      <div class="a-state">
        <span>小红书直播</span>
        <span>|</span>
        <span class="img-tag">
          <img src="http://www.17sucai.com/preview/1268063/2018-10-31/Classroom/images/info-icon.png" alt="">
        </span>
        <span> 89分钟</span>
      </div>
    </div>
    <div class="a-reward">
      <div class="a-price">￥4.9</div>
      <div>会员免费</div>

    </div>
  </div>
</template>
<style lang="less" scoped>
.money-income {
  display: flex;
  align-items: center;

  .a-img {
    width: 72px;
    height: 52px;
    margin-right: 8px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }

    .a-tag {
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 3px;
      color: #1a1a1a;
      font-size: 10px;
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 4px 6px;
    }
  }
  .a-detail {
    flex: 1;
    font-size: 12px;
    .a-title {
      color: #454545;
      font-weight: bold;
    }

    .a-state {
      display: flex;
      align-items: center;
      color: grey;
    }

    .img-tag {
      width: 15px;
      height: 15px;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .a-reward {
    font-size: 12px;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
    .a-price {
      background: #f6f6f6;
      font-weight: bold;
      color: #e6ac73;
      font-size: 12px;
      border-radius: 20px;
      height: 26px;
      line-height: 26px;
      width: 60px;
      margin-bottom: 4px;
      text-align: center;
    }
  }
}
</style>

