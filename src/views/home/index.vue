<template>
  <div>
    <div class="flex">
      <div
        class="card"
        v-for="item in menu.filter((el) => !el.flag)"
        :key="item.id"
        @click="toRouter(item)"
      >
        <el-card shadow="hover" class="tc" :body-style="{ padding: '0px' }">
          <img :src="$url + item.imgUrl" class="image" /><br />
          <span class="title">{{ item.title }}</span>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    menu: Array,
  },
  setup() {
    const router = useRouter();
    const toRouter = (data) => {
      const { id, path } = data;
      router.replace({
        path,
        query: {
          id,
        },
      });
    };
    return { toRouter };
  },
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1300px;
  margin: 50px auto;
  .card {
    width: 180px;
    margin:  18px;
    flex-grow: 0;
    flex-shrink: 0;
    background: rgba(226, 247, 255, 0.507);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    img {
      width: 70%;
      margin: 10px 0;
    }
    .title {
      display: inline-block;
      margin: 10px 0;
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }
  }
}

::v-deep {
  .el-card {
    background: transparent;

    border: none;
    .el-card__body {
      text-align: center;
    }
  }
  .el-card.is-always-shadow,
  .el-card.is-hover-shadow:focus,
  .el-card.is-hover-shadow:hover {
    box-shadow: 0 0 10px 6px rgba(41, 41, 41, 0.171);
    transition: all 0.5s;
  }
}

// @media screen and (max-width: 1400px) {
//   .flex {
//     max-width: 1300px;
//     .card {
//       width: 200px;
//       margin: 10px 15px;
//     }
//   }
// }
</style>