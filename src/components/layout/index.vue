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
    <!-- <el-button
      v-if="NODE_ENV === 'development'"
      class="btn"
      type="primary"
      size="mini"
      icon="el-icon-plus"
      circle
      @click="dialogVisible = true"
    ></el-button> -->
    <input
      type="file"
      name=""
      id="file"
      v-if="fileFlag"
      style="display: none"
      @change="changefile"
    />
    <el-dialog title="上传文件" v-model="dialogVisible" width="600px">
      <el-select v-model="fileName" placeholder="请选择" v-if="dialogVisible">
        <el-option
          v-for="item in routes"
          :key="item.name"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-plus"
        circle
        @click="getFile"
      ></el-button>
    </el-dialog>
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
import { saveAs } from "file-saver";
export default defineComponent({
  components: {},
  setup() {
    const { proxy }: any = getCurrentInstance();
    let { options } = router;
    const { routes } = options;
    const state: any = reactive({
      current: "/",
      routes: routes,
      value: "",
      dialogVisible: false,
      fileName: "",
      fileFlag: false,
    });

    console.log(proxy);

    watch(
      () => proxy.$route,
      ($route, prev) => {
        state.current = $route.path;
      }
    );

    // 生产环境下可以上传文件并下载数据
    const getFile = () => {
      if (!state.fileName) {
        proxy.$message.warning("请选择");
        return;
      }
      proxy.fileFlag = false;
      proxy.fileFlag = true;
      proxy.$nextTick(() => {
        let file: any = document.querySelector("#file");
        file.click();
      });
    };

    const changefile = (e: any) => {
      let file = e.target.files[0];
      let reader = new FileReader();
      // 读取纯文本文件,且编码格式为 utf-8
      reader.readAsText(file, "UTF-8");
      reader.onload = (a: any) => {
        let fileContent = a.target.result;
        let reg = /<body[^>]*>([\s\S]*)<\/body>/;
        let content = fileContent.match(reg)[1];
        let imgReg: any = /<img.*?(?:>|\/>)/gi;
        let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        let arr = content.match(imgReg) || []; // arr 为包含所有img标签的数组
        let srcArr = arr.map((item: any) => item.match(srcReg)[1]);
        let str = "../assets";
        srcArr.forEach((item: any) => {
          content = content.replace(item, "$" + `{require('${item}')}`);
          content = content.replace(str, "..");
        });
        let file =
          "let html:string=" +
          "`" +
          `${content}` +
          "`" +
          "\nexport default html";
        let blob = new Blob([file], {
          type: "text/plain;charset=utf-8",
        });
        saveAs(blob, state.fileName + ".ts");
      };
    };

    onMounted(() => {});

    return {
      ...toRefs(state),
      changefile,
      getFile,
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