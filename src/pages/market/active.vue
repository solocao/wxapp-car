<template>
  <div class="m-active">
    <div class="hot-head">
      <p>参加活动,赢取现金大奖</p>
    </div>
    <div class="m-active-list">
      <active-row-hot :data="active" v-for="(active,index) in activeData" :key="index"></active-row-hot>
    </div>
  </div>
</template>
<script>
import ActiveRowHot from '@components/row/ActiveRowHot';

export default {
  components: {
    ActiveRowHot,
  },
  data() {
    return {
      activeData: []

    }
  },
  methods: {
    // 活动列表
    async activeList() {
      const params = {
        url: 'active/list',
        payload: {
          page: this.page,
          size: 10
        },
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        this.activeData = result.data
        console.log(this.activeData)
      }
    },

  },
  mounted() {
    this.activeList()
  }

};
</script>

<style lang="less" scoped>
.m-active {
  position: relative;
  margin-bottom: 20px;
  .hot-head {
    width: 100%;
    height: 120px;
    color: #fff;
    text-align: center;
    background-image: url(http://www.17sucai.com/preview/1268063/2018-10-09/Hot/images/head-bg.jpg);
    background-size: 100%;
    padding-top: 15px;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .m-active-list {
    position: absolute;
    top: 50px;
    left: 2%;
    width: 96%;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: #f4f4f4 0px 1px 1px 1px;
  }
}
</style>
