<template>
  <div class="home">
    <el-card class="box-card">
      <div class="card_body">
        <el-avatar :src="require('@/assets/img/avatar.jpg')" :size="80" />
        <div style="padding-left: 20px">
          <div class="name">李润泉</div>
          <div class="introduce">前端开发工程师</div>
        </div>
      </div>
      <div class="list">
        <p v-for="item in data" :key="item.introduce">
          <i :class="item.icon"></i>
          {{ item.introduce }}
        </p>
      </div>
      <div class="foot">
        <el-popover
          placement="right"
          trigger="hover"
          v-for="item in contactOption"
          :key="item.icon"
        >
          <template #reference>
            <img
              class="icon"
              :src="require(`@/assets/img/${item.icon}.png`)"
              alt=""
            />
          </template>
          <img :src="require(`@/assets/img/${item.img}QR.png`)" alt="" />
        </el-popover>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";

export default defineComponent({
  setup() {
    const initialTime = new Date("2018-03-12").getTime();
    const nowTime = new Date().getTime();
    const count: any = (
      (nowTime - initialTime) /
      1000 /
      60 /
      60 /
      24 /
      30 /
      12
    ).toFixed(2);
    const year = parseInt(count);
    const month = Math.ceil(count.split(".")[1] * 0.12);
    const state = reactive({
      contactOption: [
        { icon: "weChat", visible: false, img: "weChat" },
        { icon: "QQ", visible: false, img: "QQ" },
        { icon: "dingTalk", visible: false, img: "ding" },
      ],
      data: [
        { icon: "el-icon-message", introduce: "remons@foxmail.com" },
        { icon: "el-icon-phone-outline", introduce: "15563043705" },
        {
          icon: "el-icon-timer",
          introduce: `码龄：${year} 年 ${month} 个月`,
        },
        { icon: "el-icon-place", introduce: "工作地：浙江 杭州" },
        { icon: "el-icon-house", introduce: "故乡：山东 菏泽" },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="less">
.home {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  .card_body {
    padding: 0 30px;
    display: flex;
    align-items: center;
    .name {
      color: #000;
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: bold;
    }
    .introduce {
      color: #ccc;
      font-size: 14px;
    }
  }
  .list {
    padding: 0 30px;
  }
  .foot {
    width: 280px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fafafa;
  }
  .icon {
    height: 22px;
    cursor: pointer;
  }
}
::v-deep {
  .el-card__body {
    padding: 0;
    padding-top: 20px;
  }
  .el-card {
    border-radius: 0;
  }
  .el-popover {
    width: 300px !important;
  }
}
</style>