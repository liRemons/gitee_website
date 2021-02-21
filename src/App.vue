<template>
  <div class="bg">
    <div class="bgchild">
      <Layout></Layout>
    </div>
  </div>
</template>

<script >
import { getCurrentInstance, watch, onMounted } from "vue";
import Layout from "@/components/layout/index.vue";
// import Darkmode from 'darkmode-js';
export default {
  components: {
    Layout,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      target();
    });

    const target = () => {
      setTimeout(() => {
        if (!proxy.$utils.IsPC()) {
          const {
            path,
            query: { id, index },
          } = proxy.$route;
          let url = "https://remons.gitee.io/fe_mobile/#";
          if (id) {
            window.location.href =
              url + `${path}?id=${id}${index ? "&index=" + index : ""}`;
          } else {
            window.location.href = url + "/";
          }
        }
      }, 1000);
    };

    return {};
  },
};
</script>
<style>
:root {
  --bg: url("./assets/img/bg.jpg");
  --dark: "";
}
.bgchild,
img,
.el-popover,
.el-affix,
.md-fences {
  filter: var(--dark);
}
</style>
<style scoped lang="less">
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  .bgchild {
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    // background: rgba(255, 255, 255, 0.233);
  }
}

.loading {
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 600px;
  bottom: 0;
  background: #ffffff5e;
}

.bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg);
  filter: blur(5px);
  z-index: -1;
  background-size: cover;
}
</style>

<style >
::-webkit-scrollbar {
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  /*滚动条里面小方块*/

  background: rgba(126, 126, 126, 0.322);
  transition: all 0.5s;
}
::-webkit-scrollbar-thumb:hover {
  background: #757575c2;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 5px;
  border: none;
  background: transparent;
}
</style>