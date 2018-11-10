<template>
  <div class="">
    <scroll-view class="flex groups box box-tb" :scroll-y="true" :scroll-into-view="scrollIntoView">
      <block v-for="group in groups" :key="group.groupName">
        <view class="flex" :id="group.groupName">
          <view class="group-name">{{group.groupName}}</view>
          <view class="flex group-users">
            <div v-for="(user,uIndex) in group.users" :key="uIndex" class="user-cell">
              <img class="user-avatar-img" :src="user.avatar" alt="">
              <div class="user-name">{{user.name}}</div>
            </div>
          </view>
        </view>
      </block>
    </scroll-view>
    <div class="c-nav box box-tb" @touchmove="touchmove" @touchend="touchend">
      <view @tap="tabLetter" :data-index="item" v-for="item in letters" :key="item" class="flex box box-align-center box-pack-center letter">
        <text :class="letter-text">{{item}}</text>
      </view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: null,
      windowWidth: null,
      pixelRatio: null,
      eachLetterHeight: 0,
      // 当前选择的导航字母
      selected: 0,
      // 选择字母视图滚动的位置id
      scrollIntoView: 'X',
      // 导航字母
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'],
      groups: [{
        groupName: 'A',
        users: [
          {
            name: '阿码',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'B',
        users: [
          {
            name: '白娘子',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '包天齐',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'C',
        users: [
          {
            name: '陈大年',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '丛云山',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '崔鸣贵',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'D',
        users: [
          {
            name: '邓牛牛',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '刁仁衣',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '杜长城',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'E',
        users: [
          {
            name: '陈大年',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '丛云山',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '崔鸣贵',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'F',
        users: [
          {
            name: '范长龙',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '冯肖晓',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'G',
        users: [
          {
            name: '甘地',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '高墙',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '宫都举',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'H',
        users: [
          {
            name: '何芸',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '胡坨坨',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '黄坨坨',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'T',
        users: [
          {
            name: '谭老头儿',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '汤云西',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '图图',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      {
        groupName: 'X',
        users: [
          {
            name: '夏一天',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '鲜轰轰',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
          {
            name: '谢大佩',
            avatar: 'https://avatars3.githubusercontent.com/u/17442685?s=88&v=4',
          },
        ],
      },
      ],


    };
  },
  methods: {
    tabLetter(e) {
      const index = e.currentTarget.dataset.index;
      console.log(index);

      // this.setData({
      //   selected: index,
      //   scrollIntoView: index,
      // });
      this.selected = index;
      this.scrollIntoView = index;
      this.cleanAcitvedStatus();
    },
    // 清除字母选中状态
    cleanAcitvedStatus() {
      setTimeout(() => {
        this.selected = 0;
      }, 1000);
    },
    touchmove(e) {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const lettersPosition = this.lettersPosition;
      const eachLetterHeight = this.eachLetterHeight;
      const letters = this.letters;

      // 判断触摸点是否在字母导航栏上
      if (x >= lettersPosition[0][0]) {
        for (let i = 0, len = lettersPosition.length; i < len; i++) {
          // 判断落在哪个字母区域，取出对应字母所在数组的索引，根据索引更新selected及scroll-into-view的值
          const _y = lettersPosition[i][1];// 单个字母所处高度
          const __y = _y + eachLetterHeight; // 单个字母最大高度取值范围， 50为字母高50rpx
          if (y >= _y && y <= __y) {
            console.log(letters[i]);
            this.selected = letters[i];
            this.scrollIntoView = letters[i];
            break;
          }
        }
      }
    },
    touchend(e) {
      // console.log('结束了');
      // this.cleanAcitvedStatus();
    },
    async init() {
      const res = wx.getSystemInfoSync();
      console.log(res);
      // 设备信息
      this.windowHeight = res.windowHeight;
      this.windowWidth = res.windowWidth;
      this.pixelRatio = res.pixelRatio;

      // 第一个字母距离顶部高度，单位使用的是rpx,须除以pixelRatio，才能与touch事件中的数值相加减，css中定义nav高度为94%，所以 *0.94
      const navHeight = this.windowHeight * 0.94;
      const eachLetterHeight = navHeight / 26;
      const comTop = (this.windowHeight - navHeight) / 2;
      const temp = [];
      this.eachLetterHeight = eachLetterHeight;


      // 求各字母距离设备左上角所处位置
      for (let i = 0, len = this.letters.length; i < len; i += 1) {
        const x = this.windowWidth - (10 + 50) / this.pixelRatio;
        const y = comTop + (i * eachLetterHeight);
        temp.push([x, y]);
      }

      this.lettersPosition = temp;
      console.log('看看temp');
      console.log(temp);

      setTimeout(() => {
        console.log('开始易懂');
        this.scrollIntoView = 'H';
      }, 2000);
    },
  },
  mounted() {
    this.init();
  },


};
</script>

<style lang="less" scoped>
page {
  background-color: #eee;
}
.c-nav {
  position: fixed;
  right: 10rpx;
  top: 3%;
  width: 50rpx;
  font-family: Arial, Helvetica, sans-serif;
  background: yellow;
  z-index: 9999px;
  text-align: center;
}
.letter {
  width: 50rpx;
  height: 40rpx;
  font-size: 12px;
}
.letter-text {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 50rpx;
  border-radius: 50%;
}
.letter-actived {
  background-color: #ccc;
}
.groups {
  /*height: 100%;*/
}
.group-name {
  padding: 10rpx 10rpx;
  height: 30rpx;
  line-height: 30rpx;
  background: red;
}
.group-users {
  background-color: #fff;
}
.user-cell {
  height: 80rpx;
  line-height: 80rpx;
  padding: 0 30rpx;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  font-size: 12px;

  .user-avatar {
    border-right: 1px solid #eee;
    width: 100rpx;
  }
  .user-avatar-img {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
  }
  .user-name {
    padding-left: 30rpx;
  }
}
</style>

