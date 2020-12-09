<template>
  <div>
    <div class="layout_flex">
      <el-menu
        router
        :default-active="current"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item
          :index="item.path"
          v-for="item in routes"
          :key="item.path"
          >{{ item.meta.title }}</el-menu-item
        >
      </el-menu>
      <div class="main">
        <transition>
          <router-view :key="$router.path"></router-view
        ></transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import {
  defineComponent,
  reactive,
  toRefs,
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
      current: "/",
      routes: routes,
    });

    watch(
      () => proxy.$route,
      ($route, prev) => {
        state.current = $route.path;
      }
    );
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="less">
.btn {
  position: fixed;
  top: 10px;
  right: 0;
}
.layout_flex {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .main {
    width: 100%;
    height: calc(100% - 61px);
    overflow: auto;
    top: 61px;
    position: absolute;
  }
}

.add {
  position: fixed;
  right: 0;
  top: 10px;
}
::v-deep {
  .el-menu {
    background: rgba(255, 255, 255, 0.5);
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background: rgba(255, 251, 192, 0.144);
  }
}
</style>