<template>
  <div class="flex">
    <!-- <div class="left" style="width:85%">
      <router-view></router-view>
    </div> -->
    <a-menu
      style="width: 100%"
      v-model:selectedKeys="current"
      mode="horizontal"
    >
      <a-menu-item :key="item.path" v-for="item in routes">
        <component :is="item.meta.icon"></component>{{ item.meta.title }}
      </a-menu-item>
    </a-menu>
   <div class="main">
      <router-view></router-view>
   </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, reactive, toRefs } from "vue";
import {
  UserOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    UserOutlined,
  },
  setup() {
    let { options } = router;
    const { routes } = options;
    const state: any = reactive({
      current: ["/"],
      routes: routes,
    });

    const handleClick = (e: any) => {};
    const titleClick = (e: any) => {
      console.log("titleClick", e);
    };

    return {
      ...toRefs(state),
      handleClick,
      titleClick,
    };
  },
});
</script>

<style scoped lang="less">
.flex {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .main{
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 50px;
    position: absolute;
  }
}
::v-deep{
  .ant-menu{
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>