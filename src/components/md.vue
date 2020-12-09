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
      <el-menu
        :default-active="menuIndex"
        class="el-menu-vertical-demo"
        @select="scrollTo"
      >
        <div v-for="item in authorList">
          <el-submenu :index="item.index" v-if="item.childNode.length">
            <template #title>
              <div v-html="item.parentNode"></div>
            </template>
            <div v-for="a in item.childNode">
              <el-submenu
                :index="a.index"
                v-if="a.childNode && a.childNode.length"
              >
                <template #title><div v-html="a.parentNode"></div></template>
                <el-menu-item
                  :index="c.index"
                  v-for="c in a.childNode"
                  v-html="c.parentNode"
                ></el-menu-item>
              </el-submenu>
              <el-menu-item :index="a.index" v-else>
                <div v-html="a.parentNode"></div>
              </el-menu-item>
            </div>
          </el-submenu>
          <el-menu-item :index="item.index" v-else>
            <template #title>
              <div v-html="item.parentNode"></div>
            </template>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
    <div class="md" v-html="html"></div>
    <el-backtop target=".md"></el-backtop>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  watch,
} from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    let list: any = [];
    const { proxy }: any = getCurrentInstance();
    const state = reactive({
      html: "",
      authorList: <any>[],
      menuIndex: 0,
      scrollList: [],
    });

    watch(
      () => proxy.$route,
      (router, prev) => {
        list = [];
        state.authorList = [];
        proxy.$nextTick(() => {
          getFile();
        });
      }
    );

    const getFile = async () => {
      state.html = "";
      let res = await proxy.$api.HOME.getFileOption(proxy.$route.name);
      state.html = res;
      let timer;
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        createHeader();
      }, 1000);
    };
    onMounted(() => {
      let MdEle: any = document.querySelector(".md");
      MdEle.onscroll = debonce(scroll, 500); // 每隔 0.5s 输出
      getFile();
    });

    const createHeader = () => {
      state.authorList = [];
      let mdHeader: any = [];
      mdHeader = document.querySelectorAll(
        ".md-header-anchor"
      ) as NodeListOf<Element>;
      mdHeader.forEach((item: any) => {
        if (!["H1", "H2"].includes(item.parentNode.nodeName)) {
          list.push({
            name: item.name,
            nodeName: item.parentNode.nodeName,
            parentNode: item.parentNode.outerHTML,
            offsetTop: item.parentNode.offsetTop,
          });
        }
      });
      state.scrollList = list.map((item: any) => item.offsetTop);
      let H3: any = [],
        H4: any = [],
        H5: any = [],
        H6: any = [];
      list.forEach((item: any, index: number) => {
        item.nodeName === "H3" && H3.push(index);
        item.nodeName === "H4" && H4.push(index);
        item.nodeName === "H5" && H5.push(index);
        item.nodeName === "H6" && H6.push(index);
      });

      let arr5: any = getArr(H4, H5);
      let arr4: any = getArr(H3, arr5);
      let eleArr = arr4.length ? arr4 : arr5;
      function initData(arr: any) {
        arr.forEach((item: any) => {
          item.name = list[item.index].name;
          item.nodeName = list[item.index].nodeName;
          item.parentNode = list[item.index].parentNode;
          item.offsetTop = list[item.index].offsetTop;
          item.childNode = [];
          item.children.forEach((a: any) => {
            if (!isNaN(a)) {
              item.childNode.push({
                name: list[a].name,
                nodeName: list[a].nodeName,
                parentNode: list[a].parentNode,
                offsetTop: list[a].offsetTop,
                index: a,
              });
            } else {
              item.childNode.push({
                index: a.index,
                name: list[a.index].name,
                nodeName: list[a.index].nodeName,
                parentNode: list[a.index].parentNode,
                offsetTop: list[a.index].offsetTop,
                childNode: initData([a])[0].childNode,
              });
            }
          });
        });
        return arr;
      }

      state.authorList = initData(eleArr);
    };

    const getArr = (bigEle: any, MinEle: any) => {
      let arr: any = [];
      bigEle.forEach((item: any, index: number) => {
        arr[index] = {
          index: item,
          children: MinEle.filter((a: any) => {
            if (index + 1 < bigEle.length + 1) {
              return (
                (isNaN(a) ? a.index : a) > item &&
                (isNaN(a) ? a.index : a) < bigEle[index + 1]
              );
            }
          }),
        };
      });
      return arr;
    };

    const debonce = (fn: any, delay: number) => {
      let time: any = null;
      return () => {
        if (time) {
          clearTimeout(time);
        }
        time = setTimeout(fn, delay);
      };
    };
    const scroll = () => {
      let MdEle: any = document.querySelector(".md");
      let scrollTop = MdEle.scrollTop || document.documentElement.scrollTop;
      state.menuIndex = state.scrollList.findIndex((item) => item > scrollTop);
    };
    const scrollTo = (index: any) => {
      let mdEle = document.querySelector(".md") as Element;
      mdEle.scrollTop = list[index].offsetTop - 100;
    };
    return {
      ...toRefs(state),
      scrollTo,
    };
  },
});
</script>

<style lang="less">
.author {
  h2,
  h3,
  h4,
  h5 {
    cursor: pointer;
    margin: 0;
    padding: 10px 0;
  }
  h2 {
    font-size: 18px !important;
  }
  h3 {
    font-size: 16px !important;
  }
  h4 {
    font-size: 14px !important;
  }
  h5 {
    font-size: 12px !important;
  }
}
</style>
<style scoped lang="less">
.author {
  width: 20%;
  overflow: auto;
  background: rgba(255, 255, 255, 0.5);
  .childNode {
    margin: 5px;
    cursor: pointer;
  }
  .childNode:hover {
    color: rgb(255, 255, 255);
  }
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

::v-deep {
  .el-submenu .el-menu-item {
    min-width: 100%;
    height: 100%;
    white-space: inherit;
    padding: 0 10px !important;
  }
  .el-menu-item,
  .el-submenu__title {
    white-space: inherit;
    height: 100%;
    line-height: 24px;
    padding: 0 10px !important;
  }
  .el-menu {
    background: transparent;
  }
  .el-menu--inline {
    // background:transparent
  }
}
</style>