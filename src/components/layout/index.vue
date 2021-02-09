<template>
  <div>
    <div class="layout_flex">
      <el-menu
        :default-active="current"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item
          :index="item.id"
          v-for="item in menu"
          :key="item.path"
          :route="{
            path: item.path,
            query: { id: item.id },
          }"
          >{{ item.title }}</el-menu-item
        >
      </el-menu>
      <div class="main">
        <transition>
          <router-view :key="$router.path"></router-view
        ></transition>
      </div>
    </div>
    <div class="left">
      <el-popover
        placement="left"
        trigger="hover"
        width="100"
        :key="item.name"
        v-for="item in iconOptions"
      >
        <template #reference>
          <div class="icon">
            <img :src="$img + item.name + '_icon.png'" alt="" />
          </div>
        </template>
        <img
          v-if="item.qr"
          class="qr"
          style="width: 120px"
          :src="$img + item.qr + '.png'"
          alt=""
        />
        <el-input v-else v-model="href">
          <template #append>
            <i class="el-icon-copy-document" @click="copy"></i>
          </template>
        </el-input>
      </el-popover>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { reactive, toRefs, getCurrentInstance, watch } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      current: "/",
      href: window.location.href,
      iconOptions: [
        { name: "mini", qr: "mini" },
        { name: "h5", qr: "fe_h5" },
        { name: "share", qr: "" },
      ],
      menu: [
        { title: "首页", id: "", path: "/" },
        { title: "html/css", id: "HTML_CSS", path: "/markdown" },
        { title: "JS", id: "JS", path: "/markdown" },
        { title: "Vue", id: "Vue", path: "/markdown" },
        { title: "React", id: "React", path: "/markdown" },
        { title: "TypeScript", id: "TypeScript", path: "/markdown" },
        { title: "Node", id: "Node", path: "/markdown" },
        { title: "Electron", id: "Electron", path: "/markdown" },
        { title: "Webpack", id: "Webpack", path: "/markdown" },
        { title: "Vite", id: "Vite", path: "/markdown" },
        { title: "其它", id: "other", path: "/markdown" },
      ],
    });

    watch(
      () => proxy.$route,
      ($route, prev) => {
        state.href = window.location.href;
        state.current = $route.query.id;
      }
    );
    const copy = () => {
      proxy.$utils.copy(state.href);
      proxy.$message.success("复制成功");
    };
    return {
      ...toRefs(state),
      copy,
    };
  },
};
</script>

<style scoped lang="less">
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
.left {
  position: fixed;
  right: 20px;
  bottom: 200px;
  .icon {
    background: #fff;
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 10px;
    text-align: center;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 30px;
    }
  }
  .qr {
    // max-width: 120px;
  }
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