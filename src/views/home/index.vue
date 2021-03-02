<!--
 * @Description: 
 * @Version: 
 * @Autor: 
 * @Date: 2021-02-23 08:42:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 15:02:52
-->
<template>
  <div>
    <div class="flex">
      <div
        class="card"
        v-for="item in menu.filter((el) => !el.flag)"
        :key="item.id"
        @click="toRouter(item)"
      >
        <img :src="$url + item.imgUrl" class="image" />
        <span class="title">{{ item.title }}</span>
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
    text-align: center;
    width: 180px;
    margin: 18px;
    flex-grow: 0;
    flex-shrink: 0;
    background: rgba(226, 247, 255, 0.507);
    color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:hover {
      box-shadow: 0 0 10px 6px rgba(41, 41, 41, 0.171);
      transition: all 0.5s;
    }
    cursor: pointer;
    img {
      height: 130px;
     max-width: 90%;
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
</style>