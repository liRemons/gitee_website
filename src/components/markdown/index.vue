<template>
  <div class="flex">
    <div class="author">
      <el-button
        icon="el-icon-search"
        size="mini"
        class="search"
        circle
        @click="submit"
      ></el-button>
      <div
        :class="{
          active: item.classActive,
        }"
        :key="item.outerHTML"
        @click="scrollTo(item.index, index)"
        v-for="(item, index) in authorList"
        v-html="item.outerHTML"
      ></div>
    </div>
    <div class="md" v-html="html" @click="handleClick"></div>
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
    });

    watch(
      () => proxy.$route,
      (router, prev) => {
        if (router.path + router.query.id !== prev.path + prev.query.id) {
          list = [];
          state.authorList = [];
          if (router.query.id) {
            getFile();
          }
        }
      }
    );
    // 获取当前文章
    const getFile = async () => {
      state.html = "";
      let res = await proxy.$api.HOME.getFileOption(proxy.$route.query.id);
      state.html = res;
      proxy.$nextTick(() => {
        // 去除锚点事件，自定义事件替代锚点跳转   ====START
        let a = [...document.querySelectorAll("#write a")].filter((item) =>
          item.outerHTML.includes("#")
        );
        a.forEach((item) => {
          item.onclick = (e) => {
            let index = state.authorList.findIndex(
              (a) =>
                decodeURIComponent(e.target.parentNode.hash).replace(
                  "#",
                  ""
                ) === a.innerText
            );
            index >= 0 && scrollTo(index);
            return false;
          };
        });
        // ==================END
        // 给代码块添加复制类名
        document.querySelectorAll(".md-fences").forEach((item) => {
          let copyCodeBox = document.createElement("div");
          copyCodeBox.setAttribute("class", "copy_code");
          copyCodeBox.onclick = (e) => {
            proxy.$utils.copy(e.target.parentElement);
            proxy.$message.success("复制成功");
          };
          item.appendChild(copyCodeBox);
        });
        createHeader();
        // 初始跳转
        if (proxy.$route.query.index) {
          scrollTo(proxy.$route.query.index);
        }
      });
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
      anchor.forEach((item, index) => {
        if (item.parentNode.nodeName !== "H2" || anchor.length == 1) {
          const { innerText, nodeName, offsetTop, outerHTML } = item.parentNode;
          arr.push({
            outerHTML: outerHTML.replace(/<a.*?>([\s\S]*)<\/a>/, ""),
            innerText,
            nodeName,
            offsetTop,
            classActive: false,
            index,
          });
        }
      });
      state.authorList = arr;
      list = arr;
    };
    // 监听滚动条，保存当前目录位置
    const scroll = () => {
      if (flag) {
        let MdEle = document.querySelector(".md");
        let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
        let menuIndex = Math.max(
          ...list
            .map((item, index) => {
              if (scrollTop >= item.offsetTop) {
                return index;
              }
            })
            .filter((item) => item !== undefined)
        );
        initAuthor();
        if (menuIndex >= 0) {
          state.authorList[menuIndex].classActive = true;
          changeRouter(menuIndex);
        }
      }
      flag = true;
      proxy.$nextTick(() => {
        let dom = document.querySelector(".active");
        dom && dom.scrollIntoView({ behavior: "smooth" });
      });
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
    const scrollTo = (index, activeIndex) => {
      initAuthor();
      let authorText;
      if (state.authorList[index]) {
        state.authorList[index].classActive = true;
        authorText = state.authorList[index].innerText;
      } else {
        state.authorList[activeIndex].classActive = true;
        authorText = state.authorList[activeIndex].innerText;
      }

      changeRouter(index);
      flag = false;
      let dom;
      document.querySelectorAll(".md-header-anchor").forEach((item) => {
        if (item.parentNode.innerText === authorText) {
          dom = item;
        }
      });
      dom && dom.scrollIntoView({ behavior: "smooth" });
    };
    // 搜索功能
    const submit = () => {
      proxy.$prompt("请输入标题", "提示", {}).then(({ value }) => {
        if (value) {
          state.authorList = state.authorList.filter((item) =>
            item.innerText.toLowerCase().includes(value.toLowerCase())
          );
        }
        state.authorList.length == 0 && createHeader();
      });
      createHeader();
    };

    // 点击内容事件
    const handleClick = (e) => {
      proxy.$utils.viewImg();
    };
    return {
      ...toRefs(state),
      scrollTo,
      submit,
      handleClick,
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
  background: rgba(255, 255, 255, 0.8);
  .search {
    position: fixed;
    z-index: 10;
    left: calc(20% - 40px);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    top: 65px;
  }
}
.flex {
  display: flex;
  overflow: hidden;
  height: 100%;
}

.md {
  overflow: auto;
  width: 80%;
}
</style>
