<template>
  <div class="verify">
    <wux-cell-group title="请输入认证信息">
      <wux-cell hover-class="none">
        <wux-input :value="text" :controlled="true" label="车主姓名" placeholder="请填写本人姓名" @change="(e)=>{this.text=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell hover-class=" none">
        <wux-input label="车牌号" placeholder="请输入车牌号" password type="number" />
      </wux-cell>
      <wux-cell hover-class="none">
        <span class="z-cell-label">车辆类型</span>
        <wux-selectable color="positive" value="1" defaultChecked />网约车
        <wux-selectable color="positive" value="2" />私家车
      </wux-cell>
      <wux-cell hover-class="none" title="车辆颜色" extra="请选择" @click="onClick1"></wux-cell>
    </wux-cell-group>
    <div>
      车辆照片(实际场景)
      <img src="../../../static/img/verify/1.png" alt="">
    </div>
    <div>
      行驶证照片
      <img src="../../../static/img/verify/2.png" alt="">
    </div>
    <wux-select id="wux-select" />
    <wux-button block type="positive">确认提交</wux-button>
  </div>
</template>

<script>
import { $wuxSelect } from '../../../static/wux/index';

export default {
  data() {
    return {
      value1: '',
      text: null,
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
    };
  },

  methods: {
    go() {
      console.log(this.$router.currentRoute);
      // wx.switchTab({ url: '/pages/my' });
      this.$router.push({ path: '/pages/my', switchTab: true });
    },
    afa() {
      JSON.stringify();
    },
    onClick1() {
      $wuxSelect('#wux-select').open({
        value: this.value1,
        options: [
          '法官',
          '医生',
          '猎人',
          '学生',
          '记者',
          '其他',
          '医生',
          '猎人',
          '学生',
          '记者',
          '其他',
          '医生',
          '猎人',
          '学生',
          '记者',
          '其他',
        ],
        onConfirm: (value, index, options) => {


        },
      });
    },
  },
};

</script>

<style lang="less" scoped>
.verify {
  padding: 10px;
  font-size: 14px;

  .grids-icon {
    padding: 10px 0;

    .grids-grid-icon {
      width: 50px;

      height: 50px;

      margin: 0 auto;

      img {
        width: 50px;

        height: 50px;
      }
    }

    .grids-grid-label {
      display: block;

      text-align: center;

      color: #000;

      font-size: 12px;
    }

    .grids-grid-num {
      display: block;

      text-align: center;

      color: #3598dc;

      font-size: 16px;
    }
  }

  .flex-space-between {
    display: flex;
    justify-content: space-between;
  }
  .z-cell-label {
    margin-left: 0;
    margin-right: 10rpx;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    width: 210rpx;
  }
}
</style>
