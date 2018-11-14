<template>
  <div class="aui-flex b-line">
    <div class="aui-skill-img">
      <img src="http://www.17sucai.com/preview/1268063/2018-11-05/Skill/images/pro-img-009.png" alt="">
    </div>
    <div class="aui-flex-box">
      <h3>张紫乘 <span> <i class="icon icon-vip"></i> 金牌</span></h3>
      <p>￥收益 5000元 | 210单</p>
    </div>
    <div class="aui-skill-button">
      <span>查看</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="less" scoped>
.aui-flex {
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
  border-bottom: 1px solid #f7f8f8;
  .aui-skill-img {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 1px solid #d8d9d8;
      display: block;
    }
  }

  .aui-flex-box {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #333;
    margin-left: 10px;

    h3 {
      color: #333333;
      font-size: 12px;
      margin-right: 2px;
      margin-bottom: 4px;

      span {
        font-style: normal;
        color: #ecbd70;
        font-weight: normal;
        position: relative;
        padding-left: 1px;

        .icon-vip {
          position: absolute;
          left: 0;
          top: 2px;
          background-size: 15px;
          width: 15px;
          height: 15px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAIAAABzZz93AAAAGXRFW…dpFeatwnV3c0tdgRgSNS4+JA5mxcE9DCdF8REZ7P8Y/wowAB7kwuWFy+eJAAAAAElFTkSuQmCC);
        }
      }
    }

    p {
      color: #999999;
      font-size: 12px;
    }
  }

  .aui-skill-button {
    span {
      display: block;
      border: 1px solid #ff4422;
      color: #ff4422;
      border-radius: 3px;
      font-size: 14px;
      padding: 2px 8px;
    }
  }
}
</style>


