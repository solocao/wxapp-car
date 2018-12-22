<!-- 银行列表 -->
<template>
  <div class="money-bank">
    <topComponent title='请选择银行'></topComponent>
    <ul class="listCom list-arrow list-bank no-top">
      <div v-for="(data,index) of datas" :key="index" @click="chooseBank(data.name)">
        <bank-row :bank="data.name"></bank-row>
      </div>
    </ul>
  </div>
</template>
<script>
import BankRow from '@components/row/BankRow'
//引入银行数据
import bankDatas from '../../data/bankData.json'
import { mapState, mapMutations } from 'vuex';
export default {
  components: {
    BankRow
  },
  data() {
    return {
      datas: []
    }
  },
  computed: {
    ...mapState(['bank']),
  },
  methods: {
    ...mapMutations([
      'set'
    ]),
    // 选择银行 并且返回
    chooseBank(bank) {
      this.set({ 'bank.name': bank })
      wx.navigateBack({ url: `/pages/money/withdraw` });
    }
  },
  mounted() {
    this.datas = bankDatas
  },
}
</script>

<style lang="less" scoped>
  .money-bank {
    .list-arrow li:after,
    .list-icon li:before {
      line-height: 64rpx;
      top: 50%;
    }
  }
  .listCom {
    background-color: #fff;
    .list-bank {
      li {
        height: 80rpx;
      }
    }
  }
  .bankIcons {
    background-image: url(https://jingjingke.github.io/vuePro-demo/dist/static/img/bankIcon.d69063b.png);
    background-repeat: no-repeat;
    background-size: 600%;
    content: "";
  }

  .bank10:before {
    background-position: 0 0;
  } //招商银行
  .bank20:before {
    background-position: 20% 0;
  } //工商银行
  .bank30:before {
    background-position: 40% 0;
  } //农业银行
  .bank40:before {
    background-position: 60% 0;
  } //中国银行
  .bank50:before {
    background-position: 80% 0;
  } //浦发银行
  .bank60:before {
    background-position: 100% 0;
  } //建设银行
  .bank70:before {
    background-position: 0 25%;
  } //邮政储蓄银行
  .bank80:before {
    background-position: 20% 25%;
  } //交通银行
  .bank90:before {
    background-position: 40% 25%;
  } //北京银行
  .bank100:before {
    background-position: 60% 25%;
  } //光大银行
  .bank110:before {
    background-position: 80% 25%;
  } //兴业银行
  .bank120:before {
    background-position: 100% 25%;
  } //民生银行
  .bank130:before {
    background-position: 0 50%;
  } //中信银行
  .bank140:before {
    background-position: 20% 50%;
  } //平安银行
  .bank150:before {
    background-position: 40% 50%;
  } //广发银行
  .bank160:before {
    background-position: 60% 50%;
  } //华夏银行
  .bank170:before {
    background-position: 80% 50%;
  } //深圳农村商业银行
  .bank180:before {
    background-position: 100% 50%;
  } //上海银行
  .bank190:before {
    background-position: 0 75%;
  } //重庆农村商业银行
</style>
