<template>
  <div>
    <div class="layout_flex">
      <!-- 头部 -->

      <header>
        <img
          :src="$img + 'home.png'"
          @click="$router.replace('/')"
          style="width: 40px; cursor: pointer"
          alt=""
        />
        <div>
          <el-select
            v-if="menu.filter((item) => item.path === $route.path).length"
            v-model="routerPath"
            @change="changeRouter"
            placeholder="请选择"
          >
            <el-option
              v-for="item in menu"
              :key="item.id"
              :label="item.title"
              :value="item.path + '&' + item.id"
            >
              <div class="select_option">
                <span style="float: left">{{ item.title }}</span>
                <img
                  v-if="item.imgUrl"
                  :src="$url + item.imgUrl"
                  class="image"
                />
              </div>
            </el-option>
          </el-select>
          <img
            style="width: 30px; margin-left: 15px"
            v-if="
              menu.length &&
              $route.query.id &&
              menu.find((item) => item.id === $route.query.id).imgUrl
            "
            :src="
              $url + menu.find((item) => item.id === $route.query.id).imgUrl
            "
            alt=""
          />
        </div>
        <div class="handle">
          <div class="icon" @click="$router.replace('/my')">
            <img class="avatar" :src="$img + 'avatar.jpg'" alt="" />
          </div>
          <div class="icon">
            <i :class="darkIcon" @click="changeDark"></i>
          </div>
          <div class="icon" v-if="$route.path === '/markdown'">
            <i class="el-icon-bottom" @click="download"></i>
          </div>
          <div class="icon">
            <i class="el-icon-document-copy" @click="checkDoc"></i>
          </div>
        </div>
      </header>

      <!-- 路由展示区 -->
      <div class="main">
        <transition name="el-zoom-in-center">
          <router-view :menu="menu" :key="$router.path"></router-view
        ></transition>
      </div>
    </div>
    <!-- 左侧菜单 -->
    <div class="left">
      <div v-for="item in iconOptions" :key="item.name">
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
          <span v-if="item.name === 'change_bg'">切换背景</span>
        </el-popover>
      </div>
    </div>
    <el-dialog title="前端技术文档" v-model="dialogVisible" width="800px">
      <div>
        <el-alert
          v-for="item in docList"
          :key="item"
          type="success"
          style="margin-bottom: 10px"
          show-icon
          :closable="false"
        >
          <template #title>
            <a
              :href="$url + '/website/assets/documents/' + item"
              target="_blank"
              style="color: #67c23a"
              >{{ item }}</a
            >
          </template>
        </el-alert>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, watch, onMounted } from "vue";
import { dateFormat } from "methods-r";
import XLSX from "xlsx";
import axios from "axios";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      current: "/",
      href: window.location.href,
      darkIcon: "el-icon-moon",
      iconOptions: [
        { name: "mini", qr: "mini" },
        { name: "h5", qr: "fe_h5" },
        { name: "share", qr: "" },
        { name: "change_bg", qr: "" },
      ],
      menu: [],
      routerPath: "",
      dialogVisible: false,
      docList: [],
    });

    watch(
      () => proxy.$route,
      ($route, prev) => {
        state.href = window.location.href;
        state.current = $route.query.id;
        initRouter();
      }
    );

    onMounted(() => {
      getMenuOption();
    });
    //
    const copy = () => {
      proxy.$utils.copy(state.href);
      proxy.$message.success("复制成功");
    };
    // 重置
    const initRouter = () => {
      const {
        path,
        query: { id },
      } = proxy.$route;
      if (id) {
        state.routerPath = path + "&" + id;
      }
    };

    // 获取菜单
    const getMenuOption = async () => {
      let res = await proxy.$api.HOME.getMenuOption("menu");
      let persons = [];
      var workbook = XLSX.read(res, { type: "buffer" });
      for (var sheet in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty(sheet)) {
          persons = persons.concat(
            XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
          );
          break;
        }
      }
      // 我的
      state.menu = persons.filter(item=>item.path === "/markdown");
      //首次进入，重置路由
      setTimeout(() => {
        initRouter();
      }, 500);
    };
    // 改变背景图
    
    const changeBG = async (name) => {
      if (name === "change_bg") {
        let res = await axios.get(
          "https://img.xjh.me/random_img.php?type=bg&ctype=nature"
        );
        res.data.replace(
          /<img [^>]*src=['"]([^'"]+)[^>]*>/gi,
          (match, capture) => {
            if (!capture) {
              capture =
                "https://remons.gitee.io/feq/summarize/website/assets/img/pc_bg.jpg";
            }
            document.documentElement.style.setProperty(
              "--bg",
              `url(${capture})`
            );
          }
        );
      }
    };
    // 暗黑模式
    const changeDark = () => {
      if (state.darkIcon === "el-icon-sunny") {
        state.darkIcon = "el-icon-moon";
        document.documentElement.style.setProperty("--dark", "");
      } else {
        document.documentElement.style.setProperty(
          "--dark",
          "invert(100%) hue-rotate(180deg)"
        );
        state.darkIcon = "el-icon-sunny";
      }
    };
    // 切换页面
    const changeRouter = () => {
      if (state.routerPath) {
        proxy.$router.replace({
          path: state.routerPath.split("&")[0],
          query: {
            id: state.routerPath.split("&")[1],
          },
        });
      }
    };

    const download = () => {
      proxy.$route.query.id && proxy.$route.path === "/markdown";
      proxy.$utils.download(
        proxy.$url + "/md/" + proxy.$route.query.id + ".md"
      );
    };
    // 查看文档
    const checkDoc = () => {
      proxy
        .$prompt("请输入密码", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputType: "password",
        })
        .then(async ({ value }) => {
          if (
            value ===
            "remons" + dateFormat("", "yyyy-MM-dd").replace(/-/g, "")
          ) {
            const res = await proxy.$api.HOME.getDocList();
            if (res.length) {
              state.docList = res;
              state.dialogVisible = true;
            } else {
              proxy.$message.warning("暂无数据");
            }
          } else {
            proxy.$message.error("密码错误");
          }
        })
        .catch(() => {});
    };
    return {
      ...toRefs(state),
      copy,
      changeBG,
      changeDark,
      changeRouter,
      download,
      checkDoc,
    };
  },
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 8px #3333334d;
  position: absolute;
  padding: 0 10px;
  z-index: 10;
  justify-content: space-between;
  .handle {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .avatar {
    border-radius: 50%;
  }
  .icon {
    cursor: pointer;
    margin: 0 5px;
    text-align: center;
    outline: none;
    width: 30px;
    line-height: 30px;
    height: 30px;
    &:hover {
      color: #409eff;
    }
  }
}
.select_option {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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

.image {
  width: 20px;
  height: 20px;
  // border-radius: 50%;
  float: right;
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
  .el-input__inner {
    background-color: transparent;
  }
  .el-alert__content {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  //   .el-menu {
  //     background: rgba(255, 255, 255, 0.8);
  //   }
  //   .el-menu--horizontal > .el-menu-item {
  //     color: #222222;
  //   }
  //   .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  //   .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  //   .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  //     background-color: rgba(90, 195, 255, 0.108);
  //   }
}
</style>