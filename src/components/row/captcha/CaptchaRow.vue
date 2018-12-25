<template>
  <div class="captcha-row">
    <input class="captcha-input" placeholder="输入验证码" auto-focus @input="codeChange" />
    <div v-if="showtime===null" class="captcha-button" @click="send">
      获取验证码
    </div>
    <div v-else class="captcha-button">
      {{showtime}}
    </div>
  </div>
</template>
<script>
import { isMobile } from '@/libs/regex.js'
export default {
  props: {
    mobile: {
      type: String
    },
    code: {
      type: String
    }
  },
  data() {
    return {
      // 计时器,注意需要进行销毁
      timeCounter: null,
      // null 则显示按钮 秒数则显示读秒
      showtime: null
    }
  },
  methods: {
    // 验证码的数据同步
    codeChange(e) {
      const value = e.mp.detail.value;
      this.$emit('update:code', value);
    },
    // 倒计时显示处理
    countDownText(s) {
      this.showtime = `${s}s后重新获取`
    },
    // 倒计时 60秒 不需要很精准
    countDown(times) {
      const self = this;
      // 时间间隔 1秒
      const interval = 1000;
      let count = 0;
      self.timeCounter = setTimeout(countDownStart, interval);
      function countDownStart() {
        if (self.timeCounter == null) {
          return false;
        }
        count++
        self.countDownText(times - count + 1);
        if (count > times) {
          clearTimeout(self.timeCounter)
          self.showtime = null;
        } else {
          self.timeCounter = setTimeout(countDownStart, interval)
        }
      }
    },
    // 发送验证码短信
    send() {
      if (isMobile(this.mobile)) {
        // 发送验证码请求
        this.post({
          url: 'verify/captcha/send',
          payload: {
            mobile: this.mobile
          },
          auth: true
        });
        this.countDown(60);
      } else {
        wx.showToast({
          title: '手机号不合法',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },
}
</script>

<style lang="less" scoped>
  .captcha-row {
    display: flex;
    .captcha-button {
      background: #048fff;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4rpx 8rpx;
      width: 320rpx;
      border-radius: 4rpx;
    }
  }
</style>

