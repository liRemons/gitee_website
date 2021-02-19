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
      <div v-for="item in iconOptions" :key="item.name">
        <!-- <div class="icon" v-if="item.name === 'change_bg'" @click="changeBG">
          <img :src="$img + item.name + '_icon.png'" alt="" />
        </div> -->
        <el-popover placement="left" trigger="hover" width="100">
          <template #reference>
            <div class="icon" @click="changeBG(item.name)">
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
          <el-input v-if="!item.qr && item.name === 'share'" v-model="href">
            <template #append>
              <i class="el-icon-copy-document" @click="copy"></i>
            </template>
          </el-input>
          <span v-else>切换背景</span>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, watch, onMounted } from "vue";
import axios from "axios";
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
        { name: "change_bg", qr: "" },
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
    const changeBG = async (name) => {
      if(name==='change_bg'){
        let res = await axios.get(
        "http://img.xjh.me/random_img.php?type=bg&ctype=nature"
      );
      res.data.replace(
        /<img [^>]*src=['"]([^'"]+)[^>]*>/gi,
        (match, capture) => {
          if (!capture) {
            capture = require("./assets/img/bg.jpg");
          }
          document.documentElement.style.setProperty("--bg", `url(${capture})`);
        }
      );
      }
      
    };
    return {
      ...toRefs(state),
      copy,
      changeBG,
    };
  },
};
</script>

<style scoped lang="less">
.layout_flex {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
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
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.32);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    text-align: center;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 110%;
      height: 110%;
      max-width: 110%;
    }
  }
  .qr {
    // max-width: 120px;
  }
}
::v-deep {
  .el-menu {
    background: rgba(255, 255, 255, 0.8);
  }
  .el-menu--horizontal > .el-menu-item {
    color: #409eff;
  }
}
</style>