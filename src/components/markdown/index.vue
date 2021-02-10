<template>
  <div
    class="flex"
    v-loading="!html"
    element-loading-text="加载页面中..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255,255, 255, 0.4)"
  >
    <div
      class="author"
      v-loading="!authorList.length"
      element-loading-text="加载目录中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255,255, 255, 0.2)"
    >
      <el-affix :offset="60" v-if="authorList.length">
        <el-input
          size="mini"
          @change="submit"
          v-model="title"
          placeholder="请输入标题"
        >
          <template #append>
            <el-button
              @click="submit"
              icon="el-icon-search"
            ></el-button> </template
        ></el-input>
      </el-affix>

      <div
        :class="{
          active: item.classActive,
        }"
        :key="item.outerHTML"
        @click="scrollTo(index)"
        v-for="(item, index) in authorList"
        v-html="item.outerHTML"
      ></div>
    </div>
    <div class="md" v-html="html" @click="$utils.viewImg()"></div>
    <el-backtop target=".md"></el-backtop>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, getCurrentInstance, watch } from "vue";
export default {
  setup() {
    let list = [];
    let flag = false;
    const { proxy } = getCurrentInstance();
    const state = reactive({
      html: "",
      authorList: [],
      title: "",
    });

    watch(
      () => proxy.$route,
      (router, prev) => {
        if (router.path + router.query.id !== prev.path + prev.query.id) {
          state.title = "";
          list = [];
          state.authorList = [];
          if (router.query.id) {
            proxy.$nextTick(() => {
              getFile();
            });
          }
        }
      }
    );
    // 获取当前文章
    const getFile = async () => {
      state.html = "";
      let res = await proxy.$api.HOME.getFileOption(proxy.$route.query.id);
      state.html = res;
      let timer = null;
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        createHeader();
      }, 1000);
    };
    onMounted(() => {
      let MdEle = document.querySelector(".md");
      proxy.$utils.watchScroll(scroll, 500, MdEle); // 每隔 0.5s 输出
      getFile();
    });
    // 获取标题，创建目录
    const createHeader = () => {
      let arr = [];
      list = [];
      let anchor = document.querySelectorAll(".md .md-header-anchor");
      anchor.forEach((item) => {
        if (item.parentNode.nodeName !== "H2" || anchor.length == 1) {
          arr.push({
            outerHTML: item.parentNode.outerHTML,
            innerText: item.parentNode.innerText,
            nodeName: item.parentNode.nodeName,
            offsetTop: item.parentNode.offsetTop,
            classActive: false,
          });
        }
      });

      state.authorList = arr;
      let menuIndex = proxy.$route.query.index;
      if (menuIndex) {
        scrollTo(menuIndex);
        state.authorList[menuIndex].classActive = true;
      }
      list = arr;
    };
    // 监听滚动条，保存当前目录位置
    const scroll = () => {
      if (flag) {
        let MdEle = document.querySelector(".md");
        let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
        let menuIndex = list.findIndex((item) => item.offsetTop > scrollTop);
        initAuthor();
        if (menuIndex > 0) {
          state.authorList[menuIndex].classActive = true;
          changeRouter(menuIndex);
        }
        proxy.$nextTick(() => {
          let author = document.querySelector(".author");
          let active = document.querySelector(".author .active");
          Number(active.offsetTop) > window.innerHeight - 150 &&
            (author.scrollTop = Number(active.offsetTop) - 100);
        });
      }
      flag = true;
    };
    // 初始化目录 active
    const initAuthor = () => {
      state.authorList.forEach((item) => {
        item.classActive = false;
      });
    };
    // 改变路由
    const changeRouter = (index) => {
      const { $route } = proxy;
      proxy.$router.replace({
        path: $route.path,
        query: {
          id: $route.query.id,
          index: index,
        },
      });
    };
    // 点击目录，控制页面位置
    const scrollTo = (index) => {
      let mdEle = document.querySelector(".md");
      initAuthor();
      state.authorList[index].classActive = true;
      changeRouter(index);
      flag = false;
      mdEle.scrollTop = state.authorList[index].offsetTop - 100;
    };
    // 搜索功能
    const submit = () => {
      createHeader();
      if (state.title) {
        state.authorList = state.authorList.filter((item) =>
          item.innerText.includes(state.title)
        );
      }
      if (state.authorList.length == 0) {
        createHeader();
      }
    };
    return {
      ...toRefs(state),
      scrollTo,
      submit,
    };
  },
};
</script>

<style lang="less">
.author {
  h2,
  h3,
  h4,
  h5 {
    cursor: pointer;
    margin: 0;
    padding: 5px 0;
  }
  h2:hover,
  h3:hover,
  h4:hover,
  h5:hover {
    transition: all 0.5s;
    background: rgba(213, 231, 255, 0.801);
    color: rgb(72, 105, 255);
  }
  h2 {
    padding-left: 2px;
    font-size: 20px !important;
  }
  h3 {
    padding-left: 6px;
    font-size: 17px !important;
  }
  h4 {
    padding-left: 12px;
    font-size: 14px !important;
  }
  h5 {
    padding-left: 18px;
    font-size: 12px !important;
  }
  .active {
    background: rgba(213, 231, 255, 0.801);
    color: rgb(72, 105, 255);
  }
}
</style>
<style scoped lang="less">
.author {
  width: 20%;
  overflow: auto;
  background: rgba(255, 255, 255, 0.5);
}
.flex {
  display: flex;
  overflow: hidden;
  height: 100%;
  background: rgba(255, 255, 255, 0.301);
}

.md {
  overflow: auto;
  width: 80%;
}
</style>
