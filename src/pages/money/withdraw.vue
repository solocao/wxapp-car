<!-- 提取现金页面 -->
<template>
  <div class="money-withdraw">
    <div class="can-withdraw">
      <div class="can-text">
        可提取金额
      </div>
      <div class="can-money">
        <div>
          <span class="money-tag">¥</span>
          300.00
        </div>
      </div>
    </div>
    <wux-cell-group title="提取现金">
      <wux-cell hover-class="none">
        <wux-input :value="form.money" :controlled="true" label="金额" placeholder="请填写提现金额" @change="(e)=>{this.form.money=e.mp.detail.value }" type="number" />
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="请填写持卡人本人的银行卡信息">
      <wux-cell hover-class="none">
        <wux-input :value="form.holder" :controlled="true" label="持卡人" placeholder="请填写持卡人姓名" @change="(e)=>{
        this.form.holder=e.mp.detail.value}" />
      </wux-cell>
      <wux-cell>
        <div style="display:flex">
          <span class="z-cell-label">银行</span>
          <div class="z-cell-content" @click.stop="chooseBank">
            <span v-if="bank.name == null">请选择提现银行</span>
            <span v-else style="color:black">{{bank.name}}</span>
          </div>
        </div>
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-input :value="form.number" :controlled="true" label="卡号" placeholder="请填写银行卡号" @change="(e)=>{
 this.form.number=e.mp.detail.value}" />
      </wux-cell>
      <wux-cell hover-class="none">
        <wux-input :value="form.branch" :controlled="true" label="开户行" placeholder="请填写开户行信息" @change="(e)=>{this.form.branch=e.mp.detail.value }" />
      </wux-cell>
    </wux-cell-group>
    <div style="padding:20rpx">
      <wux-button block type="positive" @click="submit">提现</wux-button>
    </div>
  </div>
</template>
<script>
import { getQuery } from '@libs/utils';
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      form: {
        money: null,
        // 银行名称
        name: null,
        // 持卡人姓名
        holder: null,
        // 银行卡号
        number: null,
        // 开户行
        branch: null,
      }
    }
  },
  computed: {
    ...mapState(['bank']),
  },
  methods: {
    ...mapMutations([
      'set'
    ]),
    // 选择银行
    chooseBank() {
      wx.navigateTo({ url: '/pages/money/bank' });
    },
    setBank(key, value) {
      console.log('来了，老弟')
      console.log(value)
      console.log(key)
      this.set({ key: value })
    }
  },
  mounted() {
    console.log(this.bank)
    console.log(this.user)
  }
}
</script>
<style lang="less" scoped>
  .money-withdraw {
    .can-withdraw {
      height: 180rpx;
      background: linear-gradient(to right, #69a5f3, #4a91f7);
      margin: 20rpx;
      border-radius: 20rpx;
      color: white;
      .can-text {
        font-size: 12px;
        padding-top: 10rpx;
        padding-left: 20rpx;
      }
      .can-money {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
        .money-tag {
          font-size: 20px;
        }
      }
    }
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
    color: #808080;
  }
</style>

