<template>
  <div class="home">
    <a-card hoverable style="width: 300px; margin-top: 20px">
      <template class="ant-card-actions" #actions>
        <a-popover
          v-for="item in contactOption"
          :key="item.img"
          v-model:visible="item.visible"
          trigger="click"
          placement="left"
        >
          <template #content>
            <img
              :src="require(`@/assets/img/${item.img}.png`)"
              style="width: 250px"
            />
          </template>
          <component :is="item.icon"></component>
        </a-popover>
      </template>
      <div class="card_body">
        <a-avatar :src="require('@/assets/img/avatar.jpg')" :size="80" />
        <div style="padding-left: 20px">
          <div class="name">李润泉</div>
          <div class="introduce">前端开发工程师</div>
        </div>
      </div>
      <a-list size="small" bordered :data-source="data">
        <template #renderItem="{ item, index }">
          <a-list-item>
            <component :is="item.icon"></component>
            {{ item.introduce }}
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>

<script lang="ts">
import {
  WechatOutlined,
  QqOutlined,
  DingdingOutlined,
  MailOutlined,
  WhatsAppOutlined,
  HistoryOutlined,EnvironmentOutlined,HomeOutlined
} from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";

export default defineComponent({
  components: {
    DingdingOutlined,
    WechatOutlined,
    QqOutlined,
    MailOutlined,
    WhatsAppOutlined,
    HistoryOutlined,
    EnvironmentOutlined,HomeOutlined
  },
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
    const month = Math.ceil((count.split(".")[1] ) * 0.12);
    const state = reactive({
      contactOption: [
        { icon: "WechatOutlined", visible: false, img: "weChat" },
        { icon: "QqOutlined", visible: false, img: "QQ" },
        { icon: "DingdingOutlined", visible: false, img: "ding" },
      ],
      data: [
        { icon: "MailOutlined", introduce: "remons@foxmail.com" },
        { icon: "WhatsAppOutlined", introduce: "15563043705" },
        { icon: "HistoryOutlined", introduce: `码龄：${year} 年 ${month} 个月` },
        { icon: "EnvironmentOutlined", introduce: '工作地：浙江 杭州' },
        { icon: "HomeOutlined", introduce: '故乡：山东 菏泽' },
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
  display: flex;
  justify-content: space-around;
  .card_body {
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
    }
  }
}
::v-deep {
  .ant-list-bordered {
    border: none;
  }
}
</style>