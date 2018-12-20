<template>
  <div class="map-clock">
    <map id="map" longitude="113.324520" latitude="23.099994" scale="14" :markers="markers" :polyline="polyline" show-location></map>
    <cover-view class="controls">
      <cover-view class="back" @click="back">
        <cover-image class="img" :src="icon.back" />
      </cover-view>
      <cover-view class="exit" @click="exit">
        <cover-image class="img" :src="icon.exit" />
      </cover-view>
    </cover-view>
    <cover-view class="clock-wrap">
      <cover-view class="item">
        <cover-view class="cl-title">累计打卡</cover-view>
        <cover-view class="cl-total">
          <cover-view class="total-text">
            {{totalClocks}}次
          </cover-view>
        </cover-view>
      </cover-view>
      <cover-view class="item-split">
      </cover-view>
      <cover-view class="item">
        <cover-view class="cl-title">打卡抽奖</cover-view>
        <cover-view v-if="showtime == '结束'" class="cl-click">
          <cover-view class="cl-text" @click="activeClock">
            点击打卡
          </cover-view>
        </cover-view>
        <cover-view v-else class="cl-click cl-click-disable">
          <cover-view class="cl-text">
            {{showtime}}
          </cover-view>
        </cover-view>
      </cover-view>
    </cover-view>
    <cover-view class="clock-money">
      <cover-view>¥ {{clock_reward}}元</cover-view>
    </cover-view>
  </div>
</template>
<script>
import { getQuery } from '@libs/utils';
import dayjs from 'dayjs'
export default {
  data() {
    return {
      map: null,
      icon: {
        // 回退
        back: 'https://feiyuoss.oss-cn-hangzhou.aliyuncs.com/mini/img/icon/back.png',
        // 中止
        exit: 'https://feiyuoss.oss-cn-hangzhou.aliyuncs.com/mini/img/icon/exit.png'
      },
      markers: [{
        iconPath: "../../static/images/map/car_marker.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 26,
        height: 30
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#048FFFBB",
        width: 2,
        dottedLine: false
      }],
      active_id: '5c1a498967aa51690ff92953',
      // 如果等于‘结束’就是显示打卡界面 其余显示灰色倒计时界面
      showtime: '...',
      // 打卡收益
      clock_reward: '--',
      per_reward: null,
      // 总计打卡次数
      totalClocks: '-',
      dayClocks: null,
      // 一天最多打卡次数
      maxClocks: 10,
      // 打卡时间间隔
      clockInterval: 3600,
      // 计时器,注意需要进行销毁
      timeCounter: null
    }
  },
  methods: {
    // 倒计时显示处理
    countDownText(m, s) {
      if (m < 0) {
        this.showtime = ''
        return false;
      }
      if (m !== 0) {
        this.showtime = `${m}分:${s}秒`
      } else {
        this.showtime = `${s}秒`
      }
    },
    // 需要倒计时的秒数
    countDown(times) {
      const self = this;
      // 时间间隔 1秒
      const interval = 1000;
      // 计算时间，转化为毫秒
      let ms = times * 1000;
      let count = 0;
      const startTime = new Date().getTime();
      const endTime = startTime + ms;

      self.timeCounter = setTimeout(countDownStart, interval);
      function countDownStart() {
        if (self.timeCounter == null) {
          return false;
        }
        console.log(self.timeCounter)
        count++
        const offset = new Date().getTime() - (startTime + count * interval);
        // 计算剩余时间
        const diff = endTime - new Date().getTime();
        const h = Math.floor(diff / (60 * 1000 * 60));
        const hdiff = diff % (60 * 1000 * 60);
        const m = Math.floor(hdiff / (60 * 1000));
        const mdiff = hdiff % (60 * 1000);
        const s = mdiff / (1000);
        const sCeil = Math.ceil(s);
        const sFloor = Math.floor(s);
        let nextTime = interval - offset;
        if (nextTime < 0) {
          nextTime = 0
        }
        ms = ms - interval;
        console.log(`误差：${offset} ms，下一次执行：${nextTime} ms 后，离活动开始还有：${ms} ms`);
        self.countDownText(m, sCeil)
        if (ms < 0) {
          clearTimeout(self.timeCounter)
          self.showtime = "结束"
        } else {
          self.timeCounter = setTimeout(countDownStart, nextTime)
        }
      }
    },
    // 活动打卡
    async activeClock() {
      // 获取经纬度
      const { latitude, longitude } = await new Promise((resolve, reject) => {
        wx.getLocation({
          type: 'gcj02',
          success(res) {
            resolve(res)
          }
        })
      })
      // 发送数据
      const params = {
        url: "active/clock",
        payload: {
          active_id: this.active_id,
          longitude: longitude,
          latitude: latitude
        },
        auth: true
      }
      const result = await this.post(params)
      if (result.code === 1) {
        const data = result.data;
        const { clock_reward, per_reward, clock } = data;
        this.clockJudge(clock_reward, per_reward, clock);
        this.addMarker(data.latitude, data.longitude)
      }
    },
    // 获取此次任务打卡情况详情
    async clockDetail() {
      const result = await this.post({
        url: 'active/clock/detail',
        payload: {
          active_id: this.active_id
        },
        auth: true
      });
      if (result.code === 1) {
        //         打卡奖励    每次打卡收益   详细
        const { clock_reward, per_reward, clock } = result.data;
        this.clockJudge(clock_reward, per_reward, clock);
      }
    },
    // 打卡的判定
    clockJudge(clock_reward, per_reward, clock) {
      this.clock_reward = clock_reward.toFixed(2);
      this.per_reward = per_reward;
      // 手机端时间数据
      const dawnDate = new Date(new Date().setHours(0, 0, 0, 0));
      // 总计打卡次数
      this.totalClocks = clock.length;
      // 今天打卡的记录
      const dayClocks = clock.filter(x => {
        return new Date(x.create_at) > dawnDate
      })
      if (dayClocks === undefined) {
        // 需要倒计时秒数 0
        this.countDown(0);
      } else {
        if (dayClocks.length > this.maxClocks) {
          this.showtime = '打卡关闭';
          return false
        }
        const lastClockAt = dayjs(dayClocks[dayClocks.length - 1].create_at);
        const nowAt = dayjs(new Date());
        const diff = nowAt.diff(lastClockAt, 'second');
        if (diff > 3600) {
          this.countDown(0);
        } else {
          this.countDown(3600 - diff);
        }
      }
    },
    // 移动地图到当前定位
    moveToLocation() {
      this.map.moveToLocation()
    },
    // 新增地图坐标点
    addMarker(latitude, longitude) {
      this.markers.push({
        iconPath: "../../static/images/map/car_marker.png",
        id: 0,
        latitude: latitude,
        longitude: longitude,
        width: 26,
        height: 30
      })
      this.polyline[0].points.push({
        longitude: longitude,
        latitude: latitude
      })
      this.moveToLocation()
    },
    // 退出到活动列表
    back() {
      clearTimeout(this.timeCounter);
      this.timeCounter = null;
      wx.switchTab({ url: '/pages/market/active' });
    },
  },
  mounted() {
    // 获取active_id
    // const { active_id } = getQuery();
    // this.active_id = active_id;
    // 初始化map
    this.map = wx.createMapContext('map');
    this.clockDetail();
  }
}
</script>
<style lang="less" scoped>
  .map-clock {
    width: 100%;
    height: 100vh;
    position: relative;

    #map {
      width: 100%;
      height: 100%;
    }

    .clock-wrap {
      position: absolute;
      bottom: 60rpx;
      left: 40rpx;
      width: 670rpx;
      height: 240rpx;
      border-radius: 10rpx;
      box-shadow: 0 -2px 15px #dedede;
      font-size: 12px;
      background: white;
      display: flex;
      justify-content: space-between;

      .item {
        width: 280rpx;
        padding: 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 200rpx;

        .cl-title {
          font-size: 12px;
          color: #333;
        }

        // 一共的打卡次数
        .cl-total {
          margin-top: 20rpx;
          width: 140rpx;
          height: 140rpx;
          border-radius: 50%;
          background: gray;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #20b783;
          box-shadow: 0 2px 10px #36d29a;
          color: white;

          .total-text {
            font-size: 16px;
            font-weight: bold;
          }
        }
        // 点击打卡
        .cl-click {
          margin-top: 20rpx;
          width: 140rpx;
          height: 140rpx;
          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;
          background: #1c99ff;
          box-shadow: 0 2px 10px #03a7f3;

          .cl-text {
            font-size: 12px;
            font-weight: bold;
            color: white;
          }
        }
        .cl-click-disable {
          background: #c5c4c7;
          box-shadow: 0 2px 10px #f2f2f2;
          .cl-text {
            font-weight: bold;
          }
        }
      }

      .item-split {
        margin-top: 20rpx;
        height: 200rpx;
        border: 1px solid #f6f6f6;
      }
    }

    .clock-money {
      position: absolute;
      left: 288rpx;
      bottom: 30rpx;
      width: 180rpx;
      height: 50rpx;
      border-radius: 20rpx;
      box-shadow: 0 2px 10px #dedede;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 12px;
      background: #f86036;
    }
  }
  .controls {
    position: absolute;
    top: 30rpx;
    left: 30rpx;
    width: 60rpx;
    height: 140rpx;

    box-shadow: 0 -2px 15px #dedede;
    font-size: 12px;

    .back {
      width: 60rpx;
      height: 60rpx;
      background: white;
      opacity: 0.95;
      border-radius: 10rpx;
      .img {
        width: 50rpx;
        height: 50rpx;
        margin: 5rpx;
      }
    }

    .exit {
      margin-top: 20rpx;
      width: 60rpx;
      height: 60rpx;
      background: white;
      border-radius: 10rpx;
      opacity: 0.95;
      .img {
        width: 50rpx;
        height: 50rpx;
        margin: 5rpx;
      }
    }
  }
</style>


