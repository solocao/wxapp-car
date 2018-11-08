<template>
  <div class="home">
    {{userinfo.phone}}
    <Swiper :images="images" />
    <tip-home></tip-home>
    <wux-row>
      <wux-col span="4" class="grids-icon">
        <div class="grids-grid-icon"><img src="http://a-ui.cn/dome/car/images/icon-png/icon-ax-1.png" alt=""></div>
        <p class="grids-grid-label">违章查询</p>
        <p class="grids-grid-num">6次</p>
      </wux-col>
      <wux-col span="4" class="grids-icon">
        <div class="grids-grid-icon"><img src="http://a-ui.cn/dome/car/images/icon-png/icon-ax-2.png" alt=""></div>
        <p class="grids-grid-label">保险到期</p>
        <p class="grids-grid-num">299天</p>
      </wux-col>
      <wux-col span="4" class="grids-icon">
        <div class="grids-grid3-cont">
          <div class="grids-grid-icon"><img src="http://a-ui.cn/dome/car/images/icon-png/icon-ax-3.png" alt=""></div>
          <p class="grids-grid-label">保养到期</p>
          <p class="grids-grid-num">188天</p>
        </div>
      </wux-col>
    </wux-row>
    <div>
      <income-rank></income-rank>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Swiper from '@/components/swiper';
import TipHome from '@/components/TipHome';
import IncomeRank from '@/components/list/IncomeRank';

export default {
  data() {
    return {
      images: [
        { url: 'http://www.benpaobao.com/img/case3_1.jpg' },
        { url: 'http://www.benpaobao.com/img/case4_1.jpg' },
      ],
    };
  },
  computed: {
    ...mapState(['userinfo']),
  },

  methods: {
    go() {
      console.log(this.$router.currentRoute);
      // wx.switchTab({ url: '/pages/my' });


      this.$router.push({ path: '/pages/my', switchTab: true });
    },
  },
  components: { Swiper, TipHome, IncomeRank },
};
</script>
<style lang="less" scoped>
.home {
  padding: 10px;

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
}
</style>

