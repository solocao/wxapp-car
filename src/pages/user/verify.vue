<template>
  <div class="verify">
    <wux-cell-group title="请填写认证信息">
      <wux-cell hover-class="none">
        <wux-input :value="form.name" :controlled="true" label="车主姓名" placeholder="请填写本人姓名" @change="(e)=>{this.form.name=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell hover-class=" none">
        <wux-input :value="form.car_number" :controlled="true" label="车牌号" placeholder="请输入车牌号" @change="(e)=>{this.form.car_number=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell>
        <div style="display:flex">
          <span class="z-cell-label">选择车型</span>
          <div class="z-cell-content" @click.stop="goSelectCar">
            <span v-if="form.car_model == null">请选择车辆品牌/车型</span>
            <span v-else>{{form.car_model.car_name}}&nbsp{{form.car_model.batch_at}}</span>
          </div>
        </div>
      </wux-cell>
      <wux-cell hover-class=" none">
        <span class="z-cell-label">车辆颜色</span>
        <picker @change="pickerColor" :value="colorIndex" :range="colorArray">
          <view class="picker">
            <span v-if="colorIndex==null">请选择车身颜色</span>
            <span v-else> {{form.car_color}}</span>
          </view>
        </picker>
      </wux-cell>
      <wux-cell hover-class="none">
        <span class="z-cell-label">车辆类型</span>
        <div style="float:left">
          <wux-selectable color="positive" value="1" :controlled="true" :checked="carType==0" @change="()=>{this.carType =0}" />网约车
          <wux-selectable color="positive" value="2" :controlled="true" :checked="carType==1" @change="()=>{this.carType =1}" />私家车
        </div>
      </wux-cell>
      <wux-cell hover-class="手机号">
        <wux-input :value="form.mobile" :controlled="true" label="手机号" placeholder="请输入手机号" @change="(e)=>{this.form.mobile=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell hover-class="验证码">
        <span class="z-cell-label">验证码</span>
        <captcha-row :mobile="form.mobile" :code.sync="form.code"></captcha-row>
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-input :value="form.user_id_number" :controlled="true" label="身份证号" placeholder="请输入身份证号" @change="(e)=>{this.form.user_id_number=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-input :value="form.driver_licence" :controlled="true" label="驾驶证号" placeholder="请输入驾驶证号" @change="(e)=>{this.form.driver_licence=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-input :value="form.driving_licence" :controlled="true" label="行驶证号" placeholder="请输入行驶证号" @change="(e)=>{this.form.driving_licence=e.mp.detail.value }" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-input :value="form.driving_licence_owner" :controlled="true" label="行驶证所有人" placeholder="请输入行驶证所有人" @change="(e)=>{this.form.driving_licence_owner=e.mp.detail.value }" />
      </wux-cell>
    </wux-cell-group>
    <div class="v-upload-wraper">
      <div class="z-title">请上传认证图片</div>
      <div class="v-upload-list">
        <upload-img :path="path" :url.sync="form.car_cover_img" title="车辆封面" desc="45度角拍摄、必须拍到车牌"></upload-img>
        <upload-img :path="path" :url.sync="form.user_id_number_img" title="身份证正面"></upload-img>
        <upload-img :path="path" :url.sync="form.driver_licence_img" title="驾驶证照片"></upload-img>
        <upload-img :path="path" :url.sync="form.driving_licence_img" title="行驶证照片"></upload-img>
      </div>
    </div>
    <wux-select id="wux-select" />
    <div>
      <wux-button block type="positive" @click="fill">填充数据</wux-button>
      <wux-button block type="positive" @click="submit">确认提交</wux-button>
    </div>
    <wux-toast id="wux-toast" />
  </div>
</template>

<script>
import { $wuxSelect, $wuxToast } from '../../../static/wux/index';
import { getQuery } from '@libs/utils';

import UploadImg from '@/components/upload/UploadImg';
import CaptchaRow from '@/components/row/captcha/CaptchaRow';
import { mapState, mapMutations } from 'vuex';
import { minor } from 'semver';

export default {
  components: {
    UploadImg,
    CaptchaRow
  },
  data() {
    return {
      value1: '',
      colorArray: ['白色', '黑色', '银色', '红色', '金色', '蓝色', '棕色', '紫色', '绿色', '粉色', '黄色'],
      colorIndex: null,
      // 车辆类型 0 网约车  1 私家车
      carType: 0,
      carTypeName: ['网约车', '私家车'],
      form: {
        // 姓名
        name: null,
        car_number: null,
        // 手机号
        mobile: '17768118595',
        code: null,
        car_color: null,
        // 车辆型号
        car_model: null,
        // 车辆类型  0 网约车 1 私家车
        car_type: null,
        // 身份证号
        user_id_number: null,
        // 驾驶证号
        driver_licence: null,
        //行驶证
        driving_licence: null,
        // 汽车封面照
        car_cover_img: null,
        // 身份证正面
        user_id_number_img: null,
        // 驾驶证
        driver_licence_img: null,
        // 行驶证
        driving_licence_img: null,
        // 行驶证所有人
        driving_licence_owner: null,
      },
      validText: {
        name: '请输入车主姓名',
        car_number: '请输入车牌号',
        car_color: '请选择车辆颜色',
        car_model: '奔驰 S300 2018年款',
        car_type: 0,
        // 身份证号码
        user_id_number: '请填写身份证号',
        driver_licence: '请填写驾驶证号',
        driving_licence: '请填写行驶证号',
        driving_licence_owner: '请填写行驶证所有人',
        // 汽车封面照
        car_cover_img: '请上传汽车封面照',
        // 身份证正面
        user_id_number_img: '请上传身份证正面照',
        // 驾驶证
        driver_licence_img: '请上传驾驶证照片',
        // 行驶证
        driving_licence_img: '请上行驶证证照片',

      },
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
    };
  },

  computed: {
    ...mapState(['user']),
    // 文件上传路径
    path() {
      return {
        path: `verify/${this.user.openid}`
      };
    }
  },
  methods: {
    ...mapMutations([
      'set'
    ]),
    // 进行提交前的验证
    valid() {
      for (const key in this.form) {
        console.log(key)
        console.log(this.form[key])
        if (this.form[key] == null || this.form[key] == undefined) {
          $wuxToast().show({
            type: 'text',
            duration: 1000,
            color: '#fff',
            text: this.validText[key],
            success: () => console.log('已完成')
          })
          return false
        }
      }
      return true
    },
    goSelectCar() {
      wx.navigateTo({
        url: '/pages/car/category'
      })
    },
    onChange(e) {
      console.log(e);
    },
    // 填充数据
    fill() {
      this.colorIndex = 1;
      this.carType = 0;
      const formTest = {
        name: '曹天骄',
        mobile: '17768118595',
        car_number: '粤K000F0',
        car_color: '白色',
        car_model: {
          category_name: "奥迪",
          brand_name: "一汽-大众奥",
          car_name: "奥迪A4L",
          batch_at: "2017年款"
        },
        car_type: '网约车',
        // 身份证号
        user_id_number: '150624197307108592',
        // 驾驶证号
        driver_licence: '23479294791274',
        //行驶证
        driving_licence: '324231241',
        // 行驶证所有人
        driving_licence_owner: '南京美盛汽车有限公司',
        // 汽车封面照
        car_cover_img: 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/verify/oMrxa1FLnqTiETFyf8vOLvmgf18c/wx212ce8e249e36ef4.o6zAJs64KXfZ8SWRB2IGyk6alpvw.ZI8sdm1KH0vvfbc346b1ba5f83d19781148988cb9fac.png?x-oss-process=image/resize,l_200',
        // 身份证正面
        user_id_number_img: 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/verify/oMrxa1FLnqTiETFyf8vOLvmgf18c/wx212ce8e249e36ef4.o6zAJs64KXfZ8SWRB2IGyk6alpvw.kykjWknJ8GcC1f32b501aab6e3631aadb1f29a93e5ef.png?x-oss-process=image/resize,l_200',
        // 驾驶证
        driver_licence_img: 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/verify/oMrxa1FLnqTiETFyf8vOLvmgf18c/wx212ce8e249e36ef4.o6zAJs64KXfZ8SWRB2IGyk6alpvw.cvGYNFaA6rxAe66062e18a86a5e8f762d9f1e3f80260.png?x-oss-process=image/resize,l_200',
        // 行驶证
        driving_licence_img: 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/verify/oMrxa1FLnqTiETFyf8vOLvmgf18c/wx212ce8e249e36ef4.o6zAJs64KXfZ8SWRB2IGyk6alpvw.KPYesrBXKA8Bec078c6502ee1591e28eb97eb6785982.png?x-oss-process=image/resize,l_20',
      };
      this.form = formTest
    },
    pickerColor(e) {
      this.colorIndex = parseInt(e.target.value);
      this.form.car_color = this.colorArray[this.colorIndex];
    },
    // 提交结果
    async submit() {
      // 没有通过认证、则返回
      if (!this.valid()) {
        return false
      }
      const params = {
        url: 'verify',
        payload: this.form,
        auth: true
      }
      const result = await this.post(params)

      if (result.code === 1) {
        this.set({ 'user.verify.state': 2 })
        wx.switchTab({ url: '/pages/my' });
      }
      console.log(result)
    },
  },

  created() {
    // this.form = Object.assign({}, this.form, this.formTest)
  },
  mounted() {
    // 选择汽车型号后，在这里面显示
    const { car_model } = getQuery()
    if (car_model !== undefined) {
      this.form.car_model = JSON.parse(car_model)
    }

    // 
    // console.log('看看汽车model')
    // console.log(car_model)
    // console.log(this.user)
  },
  watch: {
    carType(val) {
      this.form.car_type = this.carTypeName[val]

    }
  }
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
    .z-cell-content {
      flex: 1;
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
