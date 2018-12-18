<template>
  <div class="join-user">
    <wux-refresher id="wux-refresher" @loadmore="more" @refresh="refresh">
      <div class="j-item" v-for="(item,index) in list" :key="index">
        <div class="j-user">
          <img :src="item.avatar" alt="">
          <span>{{item.name}}{{index}}</span>
        </div>
        <div>
          <span class="j-money">预计收益：¥120</span>
          <span class="j-date">2018年09月12日</span>
        </div>
      </div>
    </wux-refresher>
  </div>
</template>
<script>
import { $stopWuxRefresher, $stopWuxLoader } from '../../../static/wux/index';
export default {
  data() {
    return {
      list: [{
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄',
      },
      {
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄'
      }, {
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄'
      }, {
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄'
      }, {
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄'
      }, {
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄'
      }, {
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄'
      }, {
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄'
      }]
    }
  },
  methods: {
    // 加载更多
    more() {
      this.list.push({
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2358895946,1305765833&fm=26&gp=0.jpg',
        name: '曹天骄',
      });
      $stopWuxLoader()
    },
    // 刷新
    refresh() {
      setTimeout(() => {
        $stopWuxRefresher()
      }, 2000)
    }

  }
}
</script>

<style lang="less" scoped>
  .join-user {
    color: #474747;
    font-size: 14px;
    padding-left: 20rpx;
    padding-right: 20rpx;

    .j-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 120rpx;
      border-bottom: 1px solid #f7f7f7;

      .j-user {
        display: flex;
        align-items: center;
      }

      img {
        width: 90rpx;
        height: 90rpx;
        border-radius: 50%;
        margin-right: 10rpx;
      }
    }

    .j-money {
      margin-right: 10rpx;
    }
  }
</style>

