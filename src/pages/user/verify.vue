<template>
  <div class="verify">
    <wux-cell-group title="请输入认证信息">
      <wux-cell hover-class="none">
        <wux-input :value="text" :controlled="true" label="车主姓名" placeholder="请填写本人姓名" @change="(e)=>{this.text=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell hover-class=" none">
        <wux-input label="车牌号" placeholder="请输入车牌号" password type="number" />
      </wux-cell>
      <wux-cell hover-class=" none">
        <span class="z-cell-label">车辆颜色</span>
        <picker @change="bindPickerChange" :value="index" :range="array" placeholder="请输入车牌号">
          <view class="picker">
            <span v-if="index==null">请选择车身颜色</span>
            <span v-else> {{array[index]}}</span>
          </view>
        </picker>
      </wux-cell>
      <wux-cell hover-class="none">
        <span class="z-cell-label">车辆类型</span>
        <div style="float:left">
          <wux-selectable color="positive" value="1" defaultChecked />网约车
          <wux-selectable color="positive" value="2" />私家车
        </div>
      </wux-cell>
    </wux-cell-group>
    <div class="v-upload-wraper">
      <div class="z-title">请上传认证资料</div>
      <div class="v-upload-list">
        <upload-img></upload-img>
        <upload-img></upload-img>
        <upload-img></upload-img>
        <upload-img></upload-img>
      </div>
    </div>
    <wux-select id="wux-select" />
    <div>
      <wux-button block type="positive">确认提交</wux-button>
    </div>
  </div>
</template>

<script>
import { $wuxSelect } from '../../../static/wux/index';
import UploadImg from '@/components/upload/UploadImg';


export default {
  components: {
    UploadImg
  },
  data() {
    return {
      index: null,
      value1: '',
      array: ['白色', '黑色', '银色', '红色', '金色', '蓝色', '棕色', '紫色', '绿色', '粉色', '黄色'],
      text: null,
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
      afaa: '',
    };
  },

  methods: {
    onChange(e) {
      console.log(e)
      console.log('onchange')
    },
    onFail(e) {
      console.log('上传失败')
    },
    onComplete(e) {
      const result = JSON.parse(e.target.data);
      console.log('上传成功');
      this.afaa = result.data.url;
    },
    go() {
      console.log(this.$router.currentRoute);
      // wx.switchTab({ url: '/pages/my' });
      this.$router.push({ path: '/pages/my', switchTab: true });
    },
    afa() {
      JSON.stringify();
    },
    bindPickerChange(e) {
      this.index = parseInt(e.target.value);
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
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    width: 220rpx;
    float: left;
  }
}

.v-upload-wraper {
  .z-title {
    padding: 30rpx 30rpx 18rpx;
    font-size: 28rpx;
    color: #888;
    width: 100%;
    box-sizing: border-box;
  }

  .v-upload-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
