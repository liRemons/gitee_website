<template>
  <div class="flex">
    <div class="author">
      <p
        class="childNode"
        v-for="item in authorList"
        :key="item.name"
        @click="scrollTo(item)"
      >
        {{ item.name }}
      </p>
    </div>
    <div class="md" v-html="html[routerName]"></div>
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
import JS from "@/assets/js/JS";
import Vue from "@/assets/js/Vue";
import React from "@/assets/js/React";
import HTML_CSS from "@/assets/js/HTML_CSS";
import TypeScript from "@/assets/js/TypeScript";
export default defineComponent({
  setup() {
    const { proxy }: any = getCurrentInstance();
    const state = reactive({
      html: { JS, Vue, React, HTML_CSS, TypeScript },
      routerName: proxy.$route.name,
      authorList: <any>[],
    });
    watch(
      () => proxy.$route,
      (router, prev) => {
        state.routerName = router.name;
        proxy.$nextTick(() => {
          init();
        });
      }
    );
    onMounted(() => {
      init();
    });

    const init = () => {
      state.authorList = [];
      let mdHeader: any = document.querySelectorAll(
        ".md-header-anchor"
      ) as NodeListOf<Element>;
      mdHeader.forEach((item: any) => {
        state.authorList.push({
          name: item.name,
          parentNode: item.parentNode.nodeName,
          offsetTop: item.parentNode.offsetTop,
        });
      });
    };

    const scrollTo = (data: any) => {
      let mdEle = document.querySelector(".md") as Element;
      mdEle.scrollTop = data.offsetTop - 100;
    };
    return {
      ...toRefs(state),
      scrollTo,
    };
  },
});
</script>


<style scoped lang="less">
@import "../assets/css/md.css";
.author {
  width: 20%;
  overflow: auto;
  padding: 10px;
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
</style>