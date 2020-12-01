<template>
  <div class="layout_flex">
    <!-- <div class="left" style="width:85%">
      <router-view></router-view>
    </div> -->
    <a-menu
      style="width: 100%"
      v-model:selectedKeys="current"
      mode="horizontal"
    >
      <a-menu-item :key="item.path" v-for="item in routes">
        <router-link :to="item.path">
          <component :is="item.meta.icon"></component
          >{{ item.meta.title }}</router-link
        >
      </a-menu-item>
    </a-menu>
    <div class="main">
      <transition> <router-view :key="$router.path"></router-view></transition>
    </div>
    <a-button type="primary" shape="circle" class="add" @click="visible = true">
      A
    </a-button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  watch,
} from "vue";
export default defineComponent({
  components: {},
  setup() {
    const { proxy }: any = getCurrentInstance();
    let { options } = router;
    const { routes } = options;
    const state: any = reactive({
      current: ["/"],
      routes: routes,
      value: "",
      content: "",
    });

    watch(
      () => proxy.$route,
      ($route, prev) => {
        state.current = [$route.path];
      }
    );

    const change = (e: any) => {
      let file = e.target.files[0];
      let reader = new FileReader();

      // 读取纯文本文件,且编码格式为 utf-8
      reader.readAsText(file, "UTF-8");
      reader.onload = (a: any) => {
        let fileContent = a.target.result;
        let reg = /<body[^>]*>([\s\S]*)<\/body>/;
        state.content = fileContent.match(reg)[1];
      };
    };

    onMounted(() => {});

    return {
      ...toRefs(state),
      change,
    };
  },
});
</script>

<style scoped lang="less">
.layout_flex {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .main {
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 50px;
    position: absolute;
  }
}

.add {
  position: fixed;
  right: 0;
  top: 10px;
}
::v-deep {
  .ant-menu {
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>