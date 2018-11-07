<template>
  <section class="aui-flexView">
    <button @click="go">跳转</button>
    <section class="aui-scrollView">
      <div class="aui-flex-header">
        <div class="aui-flex-text" style="paddingTop:10px;height:80px">
          <span>
            <!-- 更多活动优惠 -->
          </span>
        </div>
      </div>
      <div style="padding:10px">
        <task-row></task-row>
      </div>
    </section>
  </section>
</template>

<script>
import TaskRow from '@/components/TaskRow';

export default {
  components: { TaskRow },
  data() {
    return {

    };
  },
  methods: {
    go() {
      console.log(this.$router.currentRoute);
      this.$router.push('/pages/task');
    },
  },
};
</script>

<style lang="less" scoped>
.aui-flexView {
  background: #f6f5f6;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.aui-scrollView {
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  margin-top: -44px;
}

.aui-center {
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 50%;
  margin-left: 25%;
}

.aui-center-title {
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #333;
}

.aui-flex-header {
  background-repeat: no-repeat;
  background-image: url("http://www.benpaobao.com/img/case3_1.jpg");
  width: 100%;
  height: auto;
  padding-top: 35px;
  background-size: 100%;
}

.aui-flex-text {
  color: white;
  text-align: center;
  padding-bottom: 1rem;
}

.aui-flex-text h1 {
  font-size: 14px;
}

.aui-flex-text h2 {
  width: 20px;
  height: 4px;
  background: #fff;
  margin: 0 auto;
}

.aui-flex-text h3 {
  margin-top: 0.3rem;
  font-size: 12px;
  font-weight: normal;
}

.aui-flex-hos {
  width: 120px;
  height: 83px;
  margin-right: 0.8rem;
  position: relative;
}

.aui-flex-hos img {
  width: 100%;
  display: block;
  border: none;
  border-radius: 3px;
}
</style>

